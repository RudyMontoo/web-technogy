class Student{
  String ? name;
  int ? age;
  int ? marks;
  String ? city;
// parametric constructor
  Student(this.name, this.age, this.marks, this.city);
  display(){
  print("$name $age $marks $city");
  }

}
void main(){
  Student s1=Student("Rudra",30,80,"Sitapur");
   Student s2=Student("Ram",20,90,"Delhi");
    Student s3=Student("Mahesh",70,80,"Banaras");
    List<Student> students=[s1,s2,s3];
    for(var e in students){
      e.display();
    }
  // print(s1.name);// before using this it give null because its not initializing with given data after this it will work properly
}

// class -> property + behaviour

