import 'person.dart';

class Student extends Person{
  int ? marks;
  String ? city;
  Student(String name, int age,this.marks, this.city ):super(name, age);
}