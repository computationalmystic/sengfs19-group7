 function loadGraph() {
     
    let repoId = document.getElementById("repoId").value ; 
    let groupId = document.getElementById("groupId").value ;
     

var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer",{
    title:{
        text:"Representation of top commiters"
    },
    axisX:{
        
        title: "emails of commiters"
    },
    axisY:{
        
        title: "total commits"
        
    },
        data: [{
        type: "column",
        dataPoints : dataPoints
    
        
    }]
});
    $.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/24/repos/21623/top-committers", function(data) {  
    $.each(data, function(key, value){
         console.log(value.email);
        dataPoints.push({label: value.email, y: parseInt(value.commits)});
        console.log(value);
    });
    chart.render();
  
});
      
}


