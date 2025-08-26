function getEBID(id){
    
}

// Log Out Functionality
document.getElementById("btn-logout").addEventListener("click", function () {    
        window.location.href = "./index.html"   
});

document.getElementById("btn-addMoney").addEventListener("click", function () {
    const balance = parseInt(document.getElementById("balance").innerText);
    const addBalance = parseInt(document.getElementById("inp-money").value);
    const newBalance = balance + addBalance;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("inp-money").value = "";
});