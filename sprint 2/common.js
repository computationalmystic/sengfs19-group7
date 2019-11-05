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
    document.getElementById("navbar").innerHTML = "<a id='home' href = 'index.html'>Home</a><a id='data1'>Data 1</a><a id='data2'>Data 2</a><a id='data1'>Data 3</a>";
    if (x == 0)
    {
        document.getElementById("home").className = "active";
    }
    if (x == 1)
    {
        document.getElementById("data1").classname = "active";
    }
    if (x == 2)
    {
        document.getElementById("data2").classname = "active";
    }
    if (x == 3)
    {
        document.getElementById("data3").classname = "active";
    }
}