
// Seriazlie timeline into javascript
function jsonifyTimeline() {

        // Init JSON object
        var timelineJSON = {};

        var timelineTitle = document.getElementById("timeline-title").textContent;
        timelineJSON["timeline-title"] = timelineTitle;

        // Init empty array in object for nodes
        timelineJSON["nodes"] = [];

        // JS array holding timeline nodes
        var nodes = document.getElementsByClassName("node");

        // Iterate over every node in array
        for(i = 0; i < nodes.length; i++){

            // JS object holding the children of current node
            var children = nodes[i].children;

            var name = children[0].textContent;
            var date = children[1].textContent;

            var node = {"node-title" : name, "node-date" : date};

            timelineJSON["nodes"].push(node);
        }

        // output to page
    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=JSON.stringify(timelineJSON);
 }

// Add a new node to the bottom of the timeline... no user input yet
 function addNode(){
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
    $( "#nodes" ).sortable();
    $( "#nodes" ).disableSelection();
    $( "#nodes" ).draggable();
    $('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
} );