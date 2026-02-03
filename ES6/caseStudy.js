const student={
    id:211,
    name:"rudra",
    couse:"Btech",
    address:"Sitapur",
    marks:[98,85,80,97],
    admissionStatus:""

}

function displayData({id,name,course,address,marks,admissionStatus}){
    // let{id,name,course,address,admissionStatus:as}=student
    let[a,b,c,d]=marks
    let avg=(a+b+c+d)/4
    console.log(id);
    console.log(name);
    console.log(address);
    console.log(course);
     console.log(avg);
    
    if(avg>=80){
        admissionStatus="Eligible for merit scholarship";
    }
    else{
        admissionStatus="Regular Admission";
    }

    console.log(admissionStatus);
   
}

displayData(student)