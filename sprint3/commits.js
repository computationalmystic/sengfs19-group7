 function loadGraph() {
     
    let repoId = document.getElementById("repoId").value ; 
    let groupId = document.getElementById("groupId").value ;
     
     
var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer",{
    title:{
        text:"Representation of top commiters"
    },
        data: [{
        type: "column",
        dataPoints : dataPoints
    
        
    }]
});
$.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/24/repos/21623/top-committers", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: key[0], y: parseInt(value[1])});
    });
    chart.render();
  
});
      
}


