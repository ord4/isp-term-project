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

function peekTimeline(){
    var timelineString = JSON.stringify(timeline, null, 2);
    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=timelineString;
}

function loadTimeline(){
    var timelineJSON = prompt("Paste JSON"); // Will be loaded from db
    timeline = JSON.parse(timelineJSON);
    populateTimeline();
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
function populateTimeline(){

    var timelineTitle = timeline["title"];
    var nodes = timeline["nodes"];
    alert(timelineTitle);

    for(var i = 0; i < nodes.length; i++){
        addNode(nodes[i]);
    }
}
function addNode(node){

    var nodeTitle = node["node-title"];
    var nodeDate = node["node-date"];
    var nodeMore = node["node-more"];

    var nodeItems = [];
        
    for(var i = 0; i < nodeMore.length; i++){
        nodeItems.push(addNodeItem(nodeMore[i]));
    }
}

function addNodeItem(item){

    var type = Object.keys(item).toString();
    
    switch(type){

        case "node-text":
            var itemDiv = document.createElement("DIV");
            itemDiv.className = type;
            itemDiv.textContent = item[type];
            break;

        case "node-link":
            var itemDiv = document.createElement("A");
            itemDiv.className = type;
            itemDiv.setAttribute("href", item[type]);
            break;

        case "node-image":
            break;
    }

    return itemDiv;
}

function newTimeline(){
    var timelineTitle = prompt("Title: ");
    timeline["title"] = timelineTitle;
}


// Seriazlie timeline into javascript --> to be deprecated
function jsonifyTimeline() {

        // Init JSON object
        var timelineJSON = {};

        var timelineTitle = document.getElementById("timeline-title").textContent;
        timelineJSON["title"] = timelineTitle;

        // Init empty array in object for nodes
        timelineJSON["nodes"] = [];

        // JS array holding timeline nodes
        var nodes = document.getElementsByClassName("node");

        // Iterate over every node in array
        for(i = 0; i < nodes.length; i++){

            // JS object holding the children of current node
            var children = nodes[i].children;

            var nodeDate = children[0].textContent;
          
            // An array containing the children of the "node-more" div, 
            // the collapsable section of a timeline node holding extra information.
            // There can be 0 to n extra data items in this section.
            var nodeMore = children[1].children; 

            if(nodeMore.length > 0){
                // An array to hold the parsed items as JS objects.
                // This array will be added to the timelineJSON object as a main member.
                var moreArray = []; 
                var nodeTitle = nodeMore[0].textContent;
                nodeMore = nodeMore[1].children;
                for(var j = 0; j < nodeMore.length; j++){

                    var itemType = nodeMore[j].className;

                    switch(itemType){
                        case "node-text":
                            var item = {"node-text" : nodeMore[j].textContent};
                            break;
                        case "node-link":
                            var item = {"node-link" : nodeMore[j].getAttribute("href")};
                            break;
                        case "node-image":
                            var item = {"node-image" : nodeMore[j].getAttribute("src")};
                            break;
                    }

                    moreArray.push(item);
                }
            }

            var newNode = {"node-title" : nodeTitle, "node-date" : nodeDate, "node-more" : moreArray};

            timelineJSON["nodes"].push(newNode);
        }

    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=JSON.stringify(timelineJSON, null, 2);
}

// Add a new node to the bottom of the timeline
// No support for user input or the "node-more" data members
 function addNodeOld(){
    var i = document.getElementsByClassName("node").length + 1;

    var nodeTitle = "#newTitle" + i; //prompt("Node Title");
    var nodeDate = "#newDate" + i; //prompt("Node Date");

    var newTitle = document.createElement("DIV");
    newTitle.appendChild(document.createTextNode(nodeTitle));
    newTitle.className = "node-title";

    var newDate = document.createElement("DIV");
    newDate.appendChild(document.createTextNode(nodeDate));
    newDate.className = "node-date";

    var newNode = document.createElement("LI");
    newNode.appendChild(newTitle);
    newNode.appendChild(newDate);
    newNode.className = "node";

    document.getElementById("nodes").appendChild(newNode);
 }


// JQuery functions for Drag-And-Drop interaction
$( function() {
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
    $( "#nodes" ).draggable();
    $( ".node-more" ).accordion({
      active: false,
      collapsible: true
    });
    $('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });


} );