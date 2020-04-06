const regNumber = /^([-]?[0-9]+|[-]?[0-9]+\.?[0-9]+)+$/;

const firstParameter = document.getElementById("firstParameter");
const secondParameter = document.getElementById("secondParameter");
const thirdParameter = document.getElementById("thirdParameter");
var good = true;

function count()
{
    good = true;

    if(regNumber.test(firstParameter.value))
    {
        firstParameter.style.borderColor = "green";
    } else
    {
        firstParameter.style.borderColor = "red";
        good = false;
    }

    if(regNumber.test(secondParameter.value))
    {
        secondParameter.style.borderColor = "green";
    } else
    {
        secondParameter.style.borderColor = "red";
        good = false;
    }

    if(regNumber.test(thirdParameter.value))
    {
        thirdParameter.style.borderColor = "green";
    } else
    {
        thirdParameter.style.borderColor = "red";
        good = false;
    }

    if(good == true)
    {
        var firstNumber = Number(firstParameter.value);
        var secondNumber = Number(secondParameter.value);
        var thirdNumber = Number(thirdParameter.value);
        var delta = secondNumber*secondNumber-4*firstNumber*thirdNumber;
        if(delta>0)
        {
        var x0 = (-1*secondNumber+Math.sqrt(delta))/(2*firstNumber);
        var x1 = (-1*secondNumber-Math.sqrt(delta))/(2*firstNumber);
        document.getElementById("result").textContent = "Dwa pierwiastki x0 = "+x0+" x1 = "+x1;
        }else if (delta==0)
        {
            var x0 = (-1*secondNumber)/(2*firstNumber);
            document.getElementById("result").textContent = "Jeden pierwiastek x0 = "+x0;
        }else
        {
            document.getElementById("result").textContent = "Brak pierwiastków";
        }

    }else 
    {
        document.getElementById("result").textContent = "Błąd w parametrach";
    }
}