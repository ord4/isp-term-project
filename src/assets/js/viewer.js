var timeline = {}; //Global object model for timeline
timeline["nodes"] = [];


function loadTimeline(){
    var timelineJSON = "{\"theme\":\"red\",\"title\":\"CppCon 2017 Program\",\"desc\":\"CppCon is the annual, week-long face-to-face gathering for the entire C++ community. \",\"nodes\":[{\"node-title\":\"Lightning Talks\",\"node-date\":\"Saturday, September 23\",\"node-more\":[{\"node-text\":\"15 minute presentations from top C++ professionals.\"},{\"node-image\":\"http:\/\/clipart-library.com\/images\/8cAbM6zLi.jpg\"}]},{\"node-title\":\"Concurrent Thinking in C++\",\"node-date\":\"Sunday, September 24\",\"node-more\":[{\"node-text\":\"A two day training course taught by Anthony Williams of Just Software Solutions Ltd.\"},{\"node-link\":\"https:\/\/cppcon2017.sched.com\/event\/Bhaj\/concurrent-thinking-in-c\"}]},{\"node-title\":\"Learning and Teaching Modern C++\",\"node-date\":\"Monday, September 25\",\"node-more\":[{\"node-text\":\"The basics of Modern C++ and their applications in the classroom.\"},{\"node-link\":\"http:\/\/en.cppreference.com\/w\/\"}]}]}";
    timeline = JSON.parse(timelineJSON);

    renderTimeline();
    applyTheme();
}

function applyTheme(){
    var theme = timeline["theme"];
    var headColor;
    var highlightColor;

    switch(theme){
        case "blue":
            highlightColor = "#1861bb";
            headColor = "#4a81c4";
            break;
        case "red":
            highlightColor = "#bb1919";
            headColor = "#c94242";
            break;
        case "green":
            highlightColor = "#17bb66";
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
    
    var nodes = timeline["nodes"];
    for(var i = 0; i < nodes.length; i++){
        document.getElementById("nodes").appendChild(renderNode(nodes[i]));
    }


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

    document.getElementById("nodes").appendChild(nodeDateDiv);
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



// JQuery functions for Drag-And-Drop interaction
$(document).ready(function() {
    loadTimeline();

     $( ".node-more" ).accordion({
      active: false,
      collapsible: true,
      animate: 250

    });
});