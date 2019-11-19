//http://augur.osshealth.io/api_docs/

function loadGraph() {
     
    var repoId = document.getElementById("repoId").value ; 
    var groupId = document.getElementById("groupId").value ;
     

    var dataPoints = [];

    var chart1 = new CanvasJS.Chart("chartContainer1",{
        title:{
            text:"Representation of contributers for "
        },
        axisX:{

            title: "Contributer number"
        },
        axisY:{

            title: "total contributions (commits + issues + comments)"

        },
            data: [{
            type: "column",
            dataPoints : dataPoints


        }]
    });
        $.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/repos/" + repoId + "/contributors", function(data) {
            $.each(data, function(key, value){
                chart1.options.title.text = "Representation of contributers for  " + value.repo_name;
                dataPoints.push({label: parseInt(value.user_id), label: parseInt(value.total)});
                console.log(value);
            });
            chart1.render();

        });

}