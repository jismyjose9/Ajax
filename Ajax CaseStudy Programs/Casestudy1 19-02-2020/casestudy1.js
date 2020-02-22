

var xhr=new  XMLHttpRequest();
xhr.open("get","casestudy2.html");
xhr.send();
xhr.onload=function()
{
    document.getElementById("container").innerHTML=xhr.responseText;
}

