const form = document.getElementById("form");
const username = document.getElementById("username");
const minError = document.getElementById("min-error");
const password = document.getElementById("password");
const maxError = document.getElementById("max-error");
const buttton = document.getElementById("btn");
const minimum = document.getElementById("minimum")
const maximum = document.getElementById("maximum")
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (username.value == "" || password.value == "") {
        alert("Before Submit Please Fill the credentials")
    }
    else if (username.value.length < 3) {
        alert("Invalid ID: ID Should be of minimum 3 numbers");
    }
    else if (username.value.length >= 10) {
        alert("ID can not exceed more the 10 number")
    }
    else if (flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        form.submit();
        alert("Singin Successfull")
    } else {
        alert("Please enter valid Password")
    }
})

username.addEventListener("input", function () {
    let inputvalue = username.value.trim();
    if (inputvalue.length < 3) {
        minimum.style.display = "block";
        minimum.textContent = "ID should contain more than 3 numbers";
        minimum.style.fontSize = "15px";
        minimum.style.color = "red";
    }
    if (inputvalue.length > 3 || inputvalue == "") {
        minimum.style.display = "none";
    }
    if (inputvalue.length <= 10) {
        maximum.style.display = "none";
    }
    if (inputvalue.length > 10) {
        maximum.style.display = "block";
        maximum.textContent = "Your ID can not exceed more than 10 number"
        maximum.style.fontSize = "15px";
        maximum.style.color = "red";
    }
    if (/^\d+$/.test(inputvalue)) {
        minError.textContent = "";
    }
    else {
        minError.textContent = "ID should contain numbers only! ";
        minError.style.fontSize = "15px";
        minError.style.color = "red";
        if (inputvalue == "") {
            minError.textContent = "";
        }
    }
});

function checkpasswordvalidity(passwordvalue, character, message, flagvalue) {

    if (character.test(passwordvalue)) {
        message.style.display = "none";
        flagvalue = true;
    }
    else {
        message.style.display = "block";
        flagvalue = false;
    }
    return flagvalue;
}

password.addEventListener("input", function () {
    const inputpassword = password.value.trim();
    const specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const lowercasechar = /[a-z]/;
    const uppercasechar = /[A-Z]/;
    const numericvalue = /\d/;
    const specialcharcheck = document.getElementById("specialchar");
    const lowercasecheck = document.getElementById("lowercase");
    const uppercasecheck = document.getElementById("uppercase");
    const numericvaluecheck = document.getElementById("Numericvalue");

    flag1 = checkpasswordvalidity(inputpassword, specialchar, specialcharcheck, flag1);
    flag2 = checkpasswordvalidity(inputpassword, lowercasechar, lowercasecheck, flag2);
    flag3 = checkpasswordvalidity(inputpassword, uppercasechar, uppercasecheck, flag3);
    flag4 = checkpasswordvalidity(inputpassword, numericvalue, numericvaluecheck, flag4);

    if (inputpassword == "") {
        specialcharcheck.style.display = "block";
        lowercasecheck.style.display = "block";
        uppercasecheck.style.display = "block";
        numericvaluecheck.style.display = "block";
    }
});


