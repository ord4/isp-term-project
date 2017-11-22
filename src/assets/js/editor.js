var timeline = {}; //Global object model for timeline
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
    timeline = JSON.parse(timelineJSON);
    renderTimeline();
}


function createNode(){
    var node = {};
    node["node-title"] = prompt("title");
    node["node-date"] = prompt("date");

}

/*
                <div id="timeline-title">#timeine-title</div>

                <ul id="nodes">
                    <li class="node">
                        <div class="node-date">Node Date</div>
                        <div class="node-more">
                            <h3 class="node-title">Node Title (click me)</h3>
                            <div>
                                <div class="node-text">Node Text</div>
                                <img src="link-to-file" class="node-image" alt="Node Image">
                            </div>
                        </div>
                    </li>
                    
                    <li class="node">
                        <div class="node-date">Node Date 2</div>
                        <div class="node-more">
                            <h3 class="node-title">Node Title 2 (click me)</h3>
                            <div>
                                <div class="node-text">Node Text 2</div>
                                <a href="link-to-website" class="node-link">Node Link</a>
                            </div>
                        </div>
                    </li>
                </ul>
*/

function renderTimeline(){
    var timelineTitle = timeline["title"];
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

function newTimeline(){
    var timelineTitle = prompt("Title: ");
    timeline["title"] = timelineTitle;
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
        updateTimelineOrder();
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
            alert(oldIndex);
        }
    });


});
