console.log('Loaded!');
var heading=document.getElementById("text");

heading.innerHTML="This is new hading";

var img=document.getElementById("img");
img.onClick=function()
{
    img.style.marginLeft='15px';
};