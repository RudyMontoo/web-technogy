const user={
    firstname:"Rudra",
    lastname:"Sharma",
    address:{
        city:"Ghaziabad",
        country:"India"
    }
};
let a=user.firstname
// console.log(a)
let b=user.address.city
// console.log(b)

// instead of storing each thing individual we can do it by destructuring
let{firstname,lastname,address:{city,country}}=user

// above syntax is known as obj destructuring
console.log(firstname)
console.log(lastname)


// aliasing
let{firstname:fn,lastname:ln}=user
console.log(fn)



// similarily u can do with arrray
let number=[1,2,3,4,5]
let[a1,b1,c1]=number //yhn pr suru ki teen value aayegi baaki ignore ho jayegi
let[a2,b2,,c2]=number//yhn meine tisri value skip krdi
console.log(a1)
console.log(c2)

let color=["Red", "Blue", "Orange" , "Yellow" , "Green"]
let[x,y,,z]=color
console.log(x)
console.log(z)


// how we can pass obj in function
const student={
    name:"Rudra",
    age:21,
    city:"Ghaziabad"
}

function showStudent({name,age,city}){
    console.log(name);
    console.log(age);
    console.log(city);
}

showStudent(student)

