function jsonifyTimeline() {

        var timelineJSON = {};
        var timelineTitle = document.getElementById("timeline-title").textContent;
        timelineJSON["timeline-title"] = timelineTitle;
        timelineJSON["nodes"] = [];

        var nodes = document.getElementsByClassName("node");

        for(i = 0; i < nodes.length; i++){
            children = nodes[i].children;
            var name = children[0].textContent;
            var date = children[1].textContent;
            var node = {"node-title" : name, "node-date" : date};
            timelineJSON["nodes"].push(node);
        }

    var jsonout = document.getElementById("json-out");
    jsonout.innerHTML=JSON.stringify(timelineJSON);
 }

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