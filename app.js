var generate;
var lives=10;
function firstpage()
{
    location.href="firstpage.html";
}
function loading()
{
    generate=Math.round(Math.random()*100);
    document.getElementById("livecount").innerHTML=lives;
}
function submitting()
{
    if(document.getElementById("inputbox").value=="")
    {
        window.alert("Input box is empty,please enter the value!!!");
    }
    if(document.getElementById("inputbox").value!="")
    {
    lives--;
    document.getElementById("livecount").innerHTML=lives;
    var user=document.getElementById("inputbox").value;
    }
    if(user==generate)
    {
        location.href="win.html";
        document.getElementById("inputbox").value="";
    }
    else if(user<generate)
    {
        document.getElementById("suggestion").innerHTML="Your input is too Low!!!";
    }
    else if(user>generate)
    {
        document.getElementById("suggestion").innerHTML="Your input is too High!!!";
    }
    if(lives==0)
    {
        location.href="Lost.html";
        document.getElementById("inputbox").value="";
    }
}
function reseting()
{
    if(document.getElementById("inputbox").value=="")
    {
        window.alert("Input box is empty,cannot use the reset!!!");
    }
    document.getElementById("inputbox").value="";
}
function backof()
{
   location.href="index.html";
}

