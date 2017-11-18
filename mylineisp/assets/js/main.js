
// Seriazlie timeline into javascript
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

            var nodeName = children[0].textContent;
            var nodeDate = children[1].textContent;

            // An array containing the children of the "node-more" div, 
            // the collapsable section of a timeline node holding extra information.
            // There can be 0 to n extra data items in this section.
            var nodeMore = children[2].children; 

            if(nodeMore.length > 0){

                // An array to hold the parsed items as JS objects.
                // This array will be added to the timelineJSON object as a main member.
                var moreArray = []; 

                for(i = 0; i < nodeMore.length; i++){

                    var itemType = nodeMore[i].className;
                    
                    switch(itemType){
                        case "node-text":
                            var item = {"node-text" : nodeMore[i].textContent};
                            break;
                        case "node-link":
                            var item = {"node-link" : nodeMore[i].getAttribute("href")};
                            break;
                        case "node-image":
                            var item = {"node-image" : nodeMore[i].getAttribute("src")};
                            break;
                    }

                    moreArray.push(item);
                }
            }

            var newNode = {"node-title" : nodeName, "node-date" : nodeDate, "node-more" : moreArray};

            timelineJSON["nodes"].push(newNode);
        }

    // Output to page
    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=JSON.stringify(timelineJSON);
 }

// Add a new node to the bottom of the timeline
// No support for user input or the "node-more" data members
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