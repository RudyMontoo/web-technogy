const sum=(...num)=>
{total=0;
    // console.log(num)
    num.forEach((n)=>{
        total+=n
    })
    console.log(total)
}
sum(1,2,3,4,5,6)



function showDetail(name, ...skills){
    console.log(name);
    console.log(skills)
}
showDetail("Rudra","Js","AiML","DL")



// copy and update an object using spread operator
const org={
    name:"Rudra",
    class:"Btech",
    course:"CS"
}

const upd={
    ...org,
    class:"CS3C",
    course:"btech"
}
console.log(upd)

