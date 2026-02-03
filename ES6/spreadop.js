oldarray=[1,2,3,4,5]
newarray=["Ram", "Shyam", ...oldarray,6,7,8]
console.log(newarray)

function add(a,b,c){
    return a+b+c
}
numbers=[1,2,3]
console.log(add(...numbers))


const cs=["Rud","Sam", "Max"];
const it=["Rahul","ram"];
const combine=[...cs,...it];
console.log(combine)