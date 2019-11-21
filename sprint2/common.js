function getNavBar()
{
    var x = document.getElementById("navbar");
    if(x.className == "topbar")
        {
            x.className += " newClass";
        }
    else
        {
            x.className = "topbar";
        }
}
function displayNavBar(x)
{
    document.getElementById("navbar").innerHTML = "<a id='home' href = 'http://augur.osshealth.io/'>Home</a><a id='data1' href = 'contributers.html'>Contributers</a><a id='data2' href = 'issues.html'>Issues</a><a id='data3' href = 'commits.html'>Commits</a> <a href='javascript:void(0);' class='click' onclick='getNavBar()'> <i class='fa fa-bars'></i> </a>";
    if (x == 0)
    {
        document.getElementById("home").className = "activeButton";
    }
    if (x == 1)
    {
        document.getElementById("data1").className = "activeButton";
    }
    if (x == 2)
    {
        document.getElementById("data2").className = "activeButton";
    }
    if (x == 3)
    {
        document.getElementById("data3").className = "activeButton";
    }
}

//To do: fix active class not working

