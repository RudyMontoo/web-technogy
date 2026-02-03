// const marks=[24, 54, 67,12,45]
// let min=100;
// for(let i=0;i<marks.length;i++){
//     if(min>marks[i]){
//         min=marks[i];
//     }
// }
// console.log(min);

// class Marks {
//   constructor(marks) {
//     this.marks = marks;
//     this.min = marks[0];

//     for (let i = 1; i < marks.length; i++) {
//       if (this.min > marks[i]) {
//         this.min = marks[i];
//       }
//     }
//   }
// }

// const obj = new Marks([24, 54, 67, 12, 45]);
// console.log(obj.min); // 12


// STUDENT NAME LIST IN ALPHABETICAL ORDER


// const students = ["Rudra", "Akash", "Vikas", "Neha", "Anjali"];


// students.sort();

// console.log(students);


// STUDENT NAME LIST IN ALPHABETICAL ORDER (Lexical Scope)

function outer() {
  let students = ["Rudra", "Akash", "Vikas", "Neha", "Anjali"];

  function inner() {
    students.sort();
    console.log(students);
  }

  inner();
}

outer();
