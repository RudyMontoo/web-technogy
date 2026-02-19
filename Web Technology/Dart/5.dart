import 'dart:io';
// void main(){
  // conditional satement

//   print("Enter your age");
// int age=int.parse(stdin.readLineSync()!);
//   if(age>18){
//     print("Eleigible for Voting");
//   }
//   else{
//     print("Not eleigible fo voting");
//   }
// }

// void main(){
//   int i=1;
//   while(i<=5){
//     print(i);
//     i++;
//   }
//   //while loop in dart is same as c/c++
// }



// void main(){
//   int i=1;
//   do{
//     print(i);
//     i++;
//   }while(i<=5);
//   //do while loop in dart is same as c/c++
// }



// void main(){
//   List<String> names=["Ramesh","Mukesh","Dhruv"];
//   for(int i=0;i<names.length;i++){
//     print(names[i].length);
//   }
// // membership operator
//   for(var a in names){
//     print(a);
//   }
// }


void main(){
   print("Enter your consumption");
    int unit=int.parse(stdin.readLineSync()!);
    if(unit<100){
      print(1.5*unit);
    }
    else if(unit<200 && unit>100){
      print(1.5*100+2.5*(unit-100));
    }
    else if(unit<300 && unit>200){
      print(1.5*100+2.5*(unit-100)+4*(unit-200));
    }
    else{
      print(1.5*100+2.5*(unit-100)+4*(unit-200)+5*(unit-300));
    }
   
}