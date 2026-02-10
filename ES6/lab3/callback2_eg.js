
function checkLogin(callback){
    setTimeout(()=>{
        console.log("user is login in to the Application")
        callback()
    },3000);
}

function verifyCart(callback){
    setTimeout(()=>{
        console.log("User verify cart")
        callback()
    },3000);
}

function proceedToPayment(callback){
    setTimeout(()=>{
        console.log("Payment done")
        callback()
    },3000)
}

function placeOrder(callback){
    setTimeout(()=>{
        console.log("Order Placed")
        callback()
    },3000)
}

checkLogin(()=>{
    verifyCart(()=>{
        proceedToPayment(()=>{
            placeOrder(()=>{
                console.log("All Task Done")
            })
        })
    })
})