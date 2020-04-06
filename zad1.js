const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const telephone = document.getElementById("telephone");
const birthDate = document.getElementById("birthDate");
const email = document.getElementById("email");
const login = document.getElementById("login");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const regFirstName = /^[a-zA-Z ]{3,}$/;
const regLastName = /^[a-zA-Z ]{3,}$/;
const regTelephone = /^\+\d{11}$/;
const regBirthDate = /^(((3[01])|([12][0-9])|(0[1-9]))\.((1[0-2])|(0[1-9]))\.((19[0-9]{2})|(20[01][0-9])|(2020)))$/;
const regEmail = /^[a-z\d]+[\w\d\.-]*@([a-z\d]{1}[a-z\d-]+[\.]{1})+[a-z]{2,6}$/i;
const regLogin = /^[a-z ]{3,}$/;
const regPassword = /^.{3,}$/;
const regPassword2 = /^.{3,}$/;

const goodName = document.getElementById("goodName");
const goodLastName = document.getElementById("goodLastName");
const goodTelephone = document.getElementById("goodTelephone");
const goodDay = document.getElementById("goodDay");
const goodMonth = document.getElementById("goodMonth");
const goodYear = document.getElementById("goodYear");
const goodEmail = document.getElementById("goodEmail");
const goodLogin = document.getElementById("goodLogin");
const goodPassword = document.getElementById("goodPassword");
const goodPassword2 = document.getElementById("goodPassword2");

var check = true;

function checkAll()
{
    check = true;
    if(regFirstName.test(firstName.value))
    {
        firstName.style.borderColor = "green";
        document.getElementById("errorName").style.visibility = "hidden";
    } else
    {
        firstName.style.borderColor = "red";
        document.getElementById("errorName").style.visibility = "visible";
        check = false;
    }

    if(regLastName.test(lastName.value))
    {
        lastName.style.borderColor = "green";
        document.getElementById("errorLastName").style.visibility = "hidden";
    } else
    {
        lastName.style.borderColor = "red";
        document.getElementById("errorLastName").style.visibility = "visible";
        check = false;
    }

    if(regTelephone.test(telephone.value))
    {
        telephone.style.borderColor = "green";
        document.getElementById("errorTelephone").style.visibility = "hidden";
    } else
    {
        telephone.style.borderColor = "red";
        document.getElementById("errorTelephone").style.visibility = "visible";
        check = false;
    }

    if(regBirthDate.test(birthDate.value))
    {
        birthDate.style.borderColor = "green";
        document.getElementById("errorBirthDate").style.visibility = "hidden";
    } else
    {
        document.getElementById("errorBirthDate").style.visibility = "visible";
        birthDate.style.borderColor = "red";
        check = false;
    }

    if(regEmail.test(email.value))
    {
        email.style.borderColor = "green";
        document.getElementById("errorEmail").style.visibility = "hidden";
    } else
    {
        email.style.borderColor = "red";
        document.getElementById("errorEmail").style.visibility = "visible";
        check = false;
    }

    if(regLogin.test(login.value))
    {
        login.style.borderColor = "green";
        document.getElementById("errorLogin").style.visibility = "hidden";
    } else
    {
        document.getElementById("errorLogin").style.visibility = "visible";
        login.style.borderColor = "red";
        check = false;
    }

    if(regPassword.test(password.value))
    {
        password.style.borderColor = "green";
        document.getElementById("errorPassword").style.visibility = "hidden";
    } else
    {
        document.getElementById("errorPassword").style.visibility = "visible";
        password.style.borderColor = "red";
        check = false;
    }

    if(password2.value == password.value)
    {
        password2.style.borderColor = "green";
        document.getElementById("errorPassword2").style.visibility = "hidden";
    } else
    {
        document.getElementById("errorPassword2").style.visibility = "visible";
        password2.style.borderColor = "red";
        check = false;
    }

    if(check == true)
    {
        document.getElementById("header").style.visibility = "visible";
        goodName.textContent = firstName.value;
        firstName.value = "";
        goodLastName.textContent = lastName.value;
        lastName.value = "";
        goodTelephone.textContent = telephone.value;
        telephone.value = "";
        goodDay.textContent = birthDate.value.substring(0,2);
        goodMonth.textContent = birthDate.value.substring(3,5);
        goodYear.textContent = birthDate.value.substring(6,11);
        birthDate.value = "";
        goodEmail.textContent = email.value;
        email.value = "";
        goodLogin.textContent = login.value;
        login.value = "";
        goodPassword.textContent = password.value;
        password.value = "";
        goodPassword2.textContent = password2.value;
        password2.value = "";
    }
}