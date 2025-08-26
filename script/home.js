const pinNumber = parseInt("1234");

//Re_useable Function
function getEBID(id) {

}

// Log Out Functionality
document.getElementById("btn-logout").addEventListener("click", function () {
    window.location.href = "./index.html"
});

//Add Money functionality
document.getElementById("btn-addMoney").addEventListener("click", function () {
    const bank = document.getElementById("inp-bank").value;
    const bankAccountNum = document.getElementById("inp-bank-num").value;
    const addBalance = parseInt(document.getElementById("inp-money").value);
    const pin = parseInt(document.getElementById("inp-pin").value);
    const balance = parseInt(document.getElementById("balance").innerText);

    if (bank == "Select bank") {
        alert("Select A abank");
        return;
    }
    if (bankAccountNum.length != 11) {
        alert("Invalid account number");
        return;
    }
    if (addBalance <= 0 || addBalance == Nan) {
        alert("Invalid amount");
        return;
    }
    if (pinNumber != pin) {
        alert("Invalid pin number");
        return;
    }
    const newBalance = balance + addBalance;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("inp-money").value = "";
});