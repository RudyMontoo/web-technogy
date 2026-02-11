// // Method 1
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 3000);
    
// })

// promiseOne.then(function(){
//     console.log("Promise Executed");
// })


// // Method 2

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("Doing Asynchronous Tasks")
//         resolve()
//     }, 3000);
    
// }).then(function(){
//     console.log("Promise Executed");
// })


// // Method 3
// const promiseOne=new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Doing Asynchronous Operations")
//         resolve({username:"Ramesh",id:210})
//     },3000);
// })
// const u2=promiseOne.then(function(u1){
// console.log(u1)
// // console.log(u1.username)
// // console.log(u1.id)
// return u1.username
// }).then((username) =>{
// console.log(username)
// })

// console.log(u2)


// HOW TO MNAGE ERROR
const promiseOne=new Promise(function(resolve,reject){
    let error=true
    if(!error){
        resolve({username:"ramesh",id:123})
    }else{
        reject("something wenr wrong")
    }
    
},2000)
promiseOne.then(function(u1){
    console.log(u1)
    return u1.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
console.log("error")
}).finally(()=>{
    console.log("All operations executed")
})



// promise using asyn await

// const promisOne=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=true
//         if(error){
//         resolve({username:"ramesh",id:123})
//     }else{
//         reject("something wenr wrong")
//     }
//     },2000);
// })

// async function consumepromiseOne(){
//     try{
//     const response=await promisOne
//     console.log(response)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// consumepromiseOne()



