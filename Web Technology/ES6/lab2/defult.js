let marks = [80]; 
let [math = 0, science = 0] = marks; 
console.log(math); 
console.log(science);

let data = []; 
let [a = 10, b = 20] = data; 
console.log(a); 
console.log(b);

// let data = [0, null];
// let [a = 10, b = 20] = data;

let product = {
name: "Laptop"
};
let { name, price = 0 } = product;
console.log(name);
console.log(price);