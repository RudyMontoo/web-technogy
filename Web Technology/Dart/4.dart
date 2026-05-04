import 'dart:io';
void main(){
  // user input
print("Enter First Number");
String? num1=stdin.readLineSync();
print("Enter Second Number");
double num2=double.parse(stdin.readLineSync()!);

double sum=num1+num2;
print(sum);

// checking
}