var timeline = {}; //Global object model for timeline
timeline["theme"] = "#999999";
timeline["title"] = "title";
timeline["desc"] = "description";
timeline["nodes"] = [];
// Global integer to track old/new position of a timeline node
var oldIndex;
var newIndex;

function updateTimelineOrder(){
    var node = timeline["nodes"][oldIndex];
    timeline["nodes"].splice(oldIndex, 1);
    timeline["nodes"].splice(newIndex, 0, node);
}

function removeNode(i){
    timeline["nodes"].splice(i, 1);
}

function peekTimeline(){
    var timelineString = JSON.stringify(timeline, null, 2);
    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=timelineString;
}

function loadTimeline(){
    var timelineJSON = prompt("Paste JSON"); // Will be loaded from db
    if(timelineJSON != null){
        timeline = JSON.parse(timelineJSON);
        renderTimeline();
    }
}



/*

*/

function renderTimeline(){
    
    document.getElementById("timeline-title").textContent = timeline["title"];
    document.getElementById("timeline-desc").textContent = timeline["desc"];

    clearTimeline();

    var nodes = timeline["nodes"];
    //document.getElementById("timeline-title").innerHTML = timeineTitle;

    for(var i = 0; i < nodes.length; i++){
        document.getElementById("nodes").appendChild(renderNode(nodes[i]));
    }

    $( ".node-more" ).accordion({
      active: false,
      collapsible: true
    });
}

function renderNode(node){

    var nodeTitle = node["node-title"];
    var nodeDate = node["node-date"];
    var nodeMore = node["node-more"];

    var nodeItems = [];

    var nodeItemsDiv = document.createElement("div");
        
    for(var i = 0; i < nodeMore.length; i++){
        nodeItemsDiv.appendChild(renderNodeItem(nodeMore[i]));
    }

    var nodeTitleH3 = document.createElement("h3");
    nodeTitleH3.className = "node-title";
    nodeTitleH3.textContent = nodeTitle;

    var nodeMoreDiv = document.createElement("div");
    nodeMoreDiv.className = "node-more";

    nodeMoreDiv.appendChild(nodeTitleH3);
    nodeMoreDiv.appendChild(nodeItemsDiv);

    var nodeDateDiv = document.createElement("div");
    nodeDateDiv.className = "node-date";
    nodeDateDiv.textContent = nodeDate;

    var nodeLi = document.createElement("li");
    nodeLi.className = "node";

    nodeLi.appendChild(nodeDateDiv);
    nodeLi.appendChild(nodeMoreDiv);

    return nodeLi;
}

function renderNodeItem(item){

    var type = Object.keys(item).toString();
    
    switch(type){

        case "node-text":
            var itemDiv = document.createElement("div");
            itemDiv.className = type;
            itemDiv.textContent = item[type];
            break;

        case "node-link":
            var itemDiv = document.createElement("p");
            itemDiv.textContent = "IM A LINK";
            break;

        case "node-image":
            var itemDiv = document.createElement("p");
            itemDiv.textContent = "IM AN IMAGE";
            break;
    }

    return itemDiv;
}

function addNode(){

    var node = {};
    node["node-title"] = "New Title";
    node["node-date"] = "New Date";
    node["node-more"] = [];
    timeline["nodes"].push(node);

    $( ".node-more" ).accordion({
      active: false,
      collapsible: true
    });
}

function newTimeline(){
    timeline = {};
    timeline["theme"] = prompt("Theme (Hex Color)");
    timeline["title"] = prompt("Title");
    timeline["desc"] = prompt("A Short Description")
    timeline["nodes"] = [];

    renderTimeline();
}

function clearTimeline(){

    var myNode = document.getElementById("nodes");
    myNode.innerHTML = '';
}

// JQuery functions for Drag-And-Drop interaction
$(document).ready(function() {
    $( "#nodes" ).sortable({
        start: function(e, ui) {
            // Old position of node on timeline (before drag and drop)
            oldIndex = ui.item.index();
        },
        update: function(e, ui) {
            // New position of nod eon timeline (after drag and drop)
            newIndex = ui.item.index();

            // new index is -1 if element was removed
            if(newIndex != -1){
                updateTimelineOrder();
            }
        }
    });
    $( "#nodes" ).disableSelection();
    $( ".node-more" ).accordion({
      active: false,
      collapsible: true
    });
    $('#trash').droppable({
        drop: function(event, ui) {
            //index = ui.item.index();
            removeNode(oldIndex);
            ui.draggable.remove();
        }
    });


});
