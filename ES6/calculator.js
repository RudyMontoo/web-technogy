// console.log("Calculator");

// let a = Number(prompt("Enter your num1:"));
// let b = Number(prompt("Enter your num2:"));

// let op = prompt("Enter operation:");
// console.log(calculator(a, b, op));
// function calculator(a, b, op) {
//     switch (op) {
//         case "+":
//             return a + b;
//         case "-":
//             return a - b;
//         case "*":
//             return a * b;
//         case "/":
//             return b !== 0 ? a / b : "Cannot divide by zero";
//         default:
//             return "Invalid operator";
//     }
// }


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculator");

rl.question("Enter your num1: ", (a) => {
  rl.question("Enter your num2: ", (b) => {
    rl.question("Enter operation (+ - * /): ", (op) => {
      console.log(calculator(Number(a), Number(b), op));
      rl.close();
    });
  });
});

function calculator(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}
