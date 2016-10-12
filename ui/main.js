console.log('Loaded!');
var heading=document.getElementById("text");

heading.innerHTML="This is new hading";

var image=document.getElementById("image");
image.onClick=function()
{
    image.style.marginLeft='15px';
};