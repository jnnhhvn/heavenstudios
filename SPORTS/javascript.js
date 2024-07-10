//Login Page
function auth(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    if(email=='heavenstudios@gmail.com' && password=='heaven1234'){
        window.location.assign('index.html');
        alert("Login successful. Welcome to Heaven Studios!");
    }
    else{
        alert("Login failed. Invalid information.");
        return;
    }
}

function forgotPassword() {
    const email = prompt("Please enter your email address:");
    if (email) {
        alert(`A password reset link has been sent to ${email}`);
    } else {
        alert("Email address is required to reset password.");
    }
}

//Sidemenu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

//Services Button
document.getElementById("availButton").addEventListener("click", function() {
    alert("You can check more pictures in the Works section. If you want to avail services, please contact us through our contact form. Looking forward to work with you!");
});

//Contact Form
document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxFEz7LmxtxhTH8qXy2flTxuJ4Aef7pJ1Vi3CsxQZIuSr7pbME1Of7L7B_w54wPmGSa/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response);
                alert('Your message has been sent successfully!');
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error sending your message. Please try again.');
            });
    });
});
