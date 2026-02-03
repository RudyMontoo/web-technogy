let a = 7;
let div = 0;

for (let i = 2; i < a; i++) {
  if (a % i === 0) {
    div = 1;
    break;
  }
}

if (div === 1) {
  console.log(a + " is not a prime number");
} else {
  console.log(a + " is a prime number");
}
