function checkPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password == confirmPassword) {
        document.getElementById("error-message").innerHTML = "";        
    } else {
        document.getElementById("error-message").innerHTML = "Password does not match";
    }
}

function view(tag) {
    var element = document.getElementById(tag);
    if ("none" == element.style.display) {
        document.getElementById(tag).style.display = "block";
    } else {
        document.getElementById(tag).style.display = "none";
    }
}
