var points = 0;
var black = true;
const picture = document.getElementById("picture");
style = window.getComputedStyle(picture);
picture.style.top = style.top;
picture.style.left = style.left;
addPoints = false;
window.onload = function()
{
    this.start();
}

function start()
{
    
    if(random(0,2)==0)
    {
        black = true;
        picture.src = "alien.jpg";
    }else
    {
        black = false;
        picture.src = "wrong.jpg";
    }
    var moveX = random(0,201)-100;
    var moveY = random(0,101)-50;
    
    var newX = parseInt(picture.style.top) + moveY;
    var newY = parseInt(picture.style.left) + moveX;
    if(newX<120)
    {
        newX += 500;
    }
    if(newX>800)
    {
        newX -=400;
    }
    if(newY>500)
    {
        newY-=250;
    }
    if(newY<20)
    {
        newY += 200;
    }
    picture.style.left=newX+"px";
    picture.style.top=newY+"px";
    window.setTimeout("start()", 600);
}

function random(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function subPoints()
{
    if(!addPoints)
    {
        points = parseInt(document.getElementById("counterVal").innerHTML);
        points -= 1;
        document.getElementById("counterVal").innerHTML = points;
    } else
    {
        points = parseInt(document.getElementById("counterVal").innerHTML);
        points += 1;
        document.getElementById("counterVal").innerHTML = points;
        addPoints = false;
    }    
}

function changePoints()
{
    if(black==true)
    {
        addPoints = true;
    }
}