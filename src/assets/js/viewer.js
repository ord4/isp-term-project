var timeline = {}; //Global object model for timeline
timeline["nodes"] = [];


function loadTimeline(){
    var timelineJSON = "{\"theme\":\"#1861bb\",\"title\":\"Title\",\"desc\":\"A short description\",\"nodes\":[{\"node-title\":\"Node Title (click me)\",\"node-date\":\"Node Date\",\"node-more\":[{\"node-text\":\"Node Text\"},{\"node-image\":\"link-to-file\"}]},{\"node-title\":\"Node Title 2 (click me)\",\"node-date\":\"Node Date 2\",\"node-more\":[{\"node-text\":\"Node Text 2\"},{\"node-link\":\"link-to-website\"}]},{\"node-title\":\"Node Title 3 (click me)\",\"node-date\":\"Node Date 3\",\"node-more\":[{\"node-text\":\"Node Text 3\"},{\"node-link\":\"link-to-website\"}]}]}";
    timeline = JSON.parse(timelineJSON);
    document.getElementById("main-jumbo").style.backgroundColor = timeline["theme"];
    renderTimeline();
}




function renderTimeline(){
    document.getElementById("timeline-title").textContent = timeline["title"];
    document.getElementById("timeline-desc").textContent = timeline["desc"];
    
    var nodes = timeline["nodes"];
    //document.getElementById("timeline-title").innerHTML = timeineTitle;

    for(var i = 0; i < nodes.length; i++){
        document.getElementById("nodes").appendChild(renderNode(nodes[i]));
    }

    $( ".node-more" ).accordion({
      active: false,
      collapsible: true,
      animate: 250

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



// JQuery functions for Drag-And-Drop interaction
$(document).ready(function() {
    loadTimeline();
    $( "#nodes" ).sortable({
         disabled: true
    });
    $( "#nodes" ).disableSelection();


});