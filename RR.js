const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const sifninBtn = document.getElementById('signinBtn');
const sifnupBtn = document.getElementById('signupBtn');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
}

signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}