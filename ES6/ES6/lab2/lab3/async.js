// by default JS is synchronous 
// eg
// console.log("Hello1")
// console.log("Hello2")
// console.log("Hello3")
// console.log("Hello4")

// console.log("Starting my calculation")
// function calculation(){
//     for(let a=0;a<=1e10;a++){

//     }
// }

// calculation()
// console.log("Ending my calculation")


console.log("Hello1")
setTimeout(function(){console.log("Hello2")},2000);
console.log("Hello3")
console.log("Hello4")