const slow = document.getElementById("slowDownButton");
const speedUpButton = document.getElementById("speedUpButton");
const startRocket = document.getElementById("startButton");
const rocket = document.getElementById("rocketship");
var direction = 1;
var speed = 100;
started = false;
startRocket.addEventListener("click", start);
speedUpButton.addEventListener("click", slowDown);
slow.addEventListener("click", speedUp);
style = window.getComputedStyle(rocket);
rocket.style.left = parseInt(window.getComputedStyle(rocket).left) + 'px';

function start()
{
    if(!started)
    {
        started = true;
        window.setTimeout("start()", speed);
    }else
    {
        if(parseInt(rocket.style.left) > 420 || parseInt(rocket.style.left) < 1)
        {
            
            direction *= -1;
            if(direction<0)
            {
                rocket.src = "reversed.gif";
            }else
            {
                rocket.src = "rocketship.gif";
            }
        }
        rocket.style.left = parseInt(rocket.style.left) + 10*direction + "px";
        window.setTimeout("start()", speed);
    }
}

function speedUp()
{
    if(started)
    {
    speed+=10;
    }
}

function slowDown()
{
    if(started)
    {
    speed -= 10;
    }
}