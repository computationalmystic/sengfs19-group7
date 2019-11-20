// 

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
        type: "pie",
        dataPoints : dataPoints
    
        
    }]
});
   
       
    $.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/"+ groupId +"/repos/"+repoId+"/top-committers", function(data) {  
    $.each(data, function(key, value){
         console.log(value.email);
        dataPoints.push({label: value.email, y: parseInt(value.commits)});
        console.log(value);
    });
    chart.render();
  
});
      
}

function loadSecondGraph(){
    
     let repoId = document.getElementById("repoId").value ; 
        let groupId = document.getElementById("groupId").value ;
     
var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer2",{
    
    
    
    title:{
        text:"Commits in Repo Over Time"
    },
    axisX:{
        
        title: "Date"
    },
    axisY:{
        
        title: "Total Commits"
        
    },
        data: [{
        type: "line",
        dataPoints : dataPoints
    
        
    }]
});
   //$.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/"+ groupId +"/repos/"+repoId+"/committers", function(data) {  
    
     $.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/"+groupId+"/repos/"+repoId+"/committers", function(data) {  
    $.each(data, function(key, value){
   
        dataPoints.push({label: value.date, y: parseInt(value.count)});
  
    });
    chart.render();
  
});
      
    
    
}


