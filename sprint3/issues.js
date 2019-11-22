//http://augur.osshealth.io/api_docs/

function loadGraph() {
     
    var repoId = document.getElementById("repoId").value ; 
    var groupId = document.getElementById("groupId").value ;
     

    var dataPoints = [];

    var chart1 = new CanvasJS.Chart("chartContainer1",{
        title:{
            text:"Closed Issues by Repo Group"
        },
        axisX:{

            title: "Repo ID"
        },
        axisY:{

            title: "Closed Issue Count"

        },
            data: [{
            type: "line",
            dataPoints : dataPoints


        }]
    });
                                                 //repo-groups/:repo_group_id/closed-issues-count
    //http://augur.osshealth.io:5000/api/unstable/repo-groups/25151/repos/25179/contributors
        $.getJSON("http://augur.osshealth.io:5000/api/unstable/repo-groups/" + groupId + "/closed-issues-count", function(data) {
            $.each(data, function(key, value){
                chart1.options.title.text = "Closed Issues for " + groupId;
                dataPoints.push({label: parseInt(value.repo_id), y: parseInt(value.closed_count)});
                console.log(value);
            });
            chart1.render();

        });

}