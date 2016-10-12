console.log('Loaded!');
var heading=document.getElementById("text");

heading.innerHTML="This is new hading";
var marginleft=0;
var img=document.getElementById("madi");
function moveRight()
{
    marginleft=marginleft+5;
    img.style.marginLeft=marginleft+'px';
}
img.onclick=function()
{
    var interval=setInterval(moveRight,100);
    
};