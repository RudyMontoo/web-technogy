function checkLogin() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User is logged into the application");
            resolve();
        }, 3000);
    });
}

function verifyCart() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User verified cart");
            resolve();
        }, 3000);
    });
}

function proceedToPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment done");
            resolve();
        }, 3000);
    });
}

function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order placed");
            resolve();
        }, 3000);
    });
}

checkLogin()
    .then(verifyCart)
    .then(proceedToPayment)
    .then(placeOrder)
    .then(() => {
        console.log("All tasks done");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
