let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");
let text = document.getElementById("text");
let form = document.querySelector("#form");

form.addEventListener('submit', (e)=>{
    alert("100 days of code achieved.")
})

var check = function () {
    if (password.value ==
        confirmPassword.value) {
        text.style.color = 'green';
        text.innerHTML = 'matching';
    } else {
        text.style.color = 'red';
        text.innerHTML = 'not matching';
    }
}


