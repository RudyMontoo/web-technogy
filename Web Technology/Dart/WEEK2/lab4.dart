// building a Simple Calculator: Dart command-line app implementing basic arithmetic operations (+, -, *, /) using functions and switch statements.
import 'dart:io';
void main(){
  print("Enter First Number");
double num1=double.parse(stdin.readLineSync()!);
print("Enter Second Number");
double num2=double.parse(stdin.readLineSync()!);
print("Enter the operation");
String? op = stdin.readLineSync();
double ans=0;
switch(op){
  case '+': ans=num1+num2;
  case '-': ans=num1-num2;
  case '*': ans=num1*num2;
  case '/': num2!=0?ans=num1/num2:ans=-1;
}
print(ans);



}