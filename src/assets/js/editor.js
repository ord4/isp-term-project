var timeline = {}; //Global object model for timeline
timeline["theme"] = "blue";
timeline["title"] = "Your Timeline";
timeline["desc"] = "A fresh timeline";
timeline["nodes"] = [];
// Global integer to track old/new position of a timeline node
var oldIndex;
var newIndex;

function updateTimelineOrder(){
    var node = timeline["nodes"][oldIndex];
    timeline["nodes"].splice(oldIndex, 1);
    timeline["nodes"].splice(newIndex, 0, node);
    checkPost();
}

function removeNode(i){
    timeline["nodes"].splice(i, 1);
    renderTimeline();
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

function loadTimelineSource(){
    var timelineJSON = document.getElementById("source").textContent;
    timeline = JSON.parse(timelineJSON);
    renderTimeline();
}

function applyTheme(){
    var theme = timeline["theme"];
    var headColor;
    var highlightColor;

    switch(theme){
        case "blue":
            headColor = "#4a81c4";
            break;
        case "red":
            headColor = "#c94242";
            break;
        case "green":
            headColor = "#41c681";
            break;

    }

    document.getElementById("main-jumbo").style.backgroundColor = headColor;

    var nodeHeads = document.getElementsByClassName("node-date");

    for(var i = 0; i <  nodeHeads.length; i++){
         nodeHeads[i].style.backgroundColor = highlightColor;
    }
}


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

    applyTheme();

    checkPost();
}

function checkPost(){

    document.getElementById("source_write").value = '';
    document.getElementById("source_write").value = JSON.stringify(timeline);
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
    var itemDiv;
    switch(type){

        case "node-text":
            itemDiv = document.createElement("div");
            itemDiv.textContent = item[type];
            break;

        case "node-link":
            itemDiv = document.createElement("a");
            itemDiv.href = item[type];
            itemDiv.textContent = item[type];
            break;

        case "node-image":
            itemDiv = document.createElement("img");
            itemDiv.src = item[type];
            break;
    }


    itemDiv.className = type;

    return itemDiv;
}

function addNode(){

    var node = {};
    var input;
    input = prompt("Enter a title for the node: ");
    if(input != ''){
        node["node-title"] = input;
    }
    else{
        node["node-title"] = "title";
    }

    input = prompt("Enter a date for the node: ");
    if(input != ''){
        node["node-date"] = input;
    }
    else{
        node["node-date"] = "date";
    }

    node["node-more"] = [];

    var more;
    more = prompt("Enter an (optional) short description for the node: ");
    if(more != ''){
        node["node-more"].push({'node-text' : more});
    }
    more = prompt("Enter an (optional) website link for the node: ");
    if(more != ''){
        node["node-more"].push({'node-link' : more});
    }
    more = prompt("Enter an (optional) image for the node: ");
    if(more != ''){
        node["node-more"].push({'node-image' : more});
    }

    timeline["nodes"].push(node);

    $( ".node-more" ).accordion({
      active: false,
      collapsible: true
    });

    renderTimeline();
    checkPost();
}

function editHeader(){
    var title = prompt("New timeline title: ");
    var desc = prompt("New timeline description: ");
    document.getElementById("timeline-title").textContent = title;
    document.getElementById("timeline-desc").textContent = desc;
    timeline['title'] = title;
    timeline['desc'] = desc;
    checkPost();
}

function changeTheme(){
    var theme = prompt("Enter a theme (red, blue, or green)");

    if(theme == 'red' || theme == 'blue' || theme == 'green')
    {
        timeline["theme"] = theme;
    }

    applyTheme();
    checkPost();
}

function newTimeline(){
    timeline = {};
    timeline["theme"] = "red";
    timeline["title"] = prompt("Title");
    timeline["desc"] = prompt("A Short Description")
    timeline["nodes"] = [];

    renderTimeline();
    checkPost();
}

function clearTimeline(){

    var myNode = document.getElementById("nodes");
    myNode.innerHTML = '';
}

// JQuery functions for Drag-And-Drop interaction
$(document).ready(function() {
    loadTimelineSource();
    $( "#nodes" ).sortable({
        start: function(e, ui) {
            // Old position of node on timeline (before drag and drop)
            oldIndex = ui.item.index();
        },
        update: function(e, ui) {
            // New position of nod eon timeline (after drag and drop)
            newIndex = ui.item.index();
            checkPost();

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
