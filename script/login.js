const mobileNumber = parseInt("01826873749");
const pinNumber = parseInt("1234");


// Login Functionality
document.getElementById("btn-login").addEventListener("click", function () {
    const inpMobile = parseInt(document.getElementById("inp-phn-num").value);
    const inpPin = parseInt(document.getElementById("inp-pin").value);
    if (mobileNumber === inpMobile && pinNumber === inpPin) {
        window.location.href = "./home.html"
    }
    else {
        alert("Invalid Credential");
    }
});