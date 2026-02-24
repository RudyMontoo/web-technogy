class Person{
String? name;
int ? age;
String ? _city;
double ? _balance;
Person(this.name, this.age);
set setCity(String city){
  _city=city;
}
get getCity{
  return _city;
}
set setBalance(double balance){
  if(balance<0){
    print("give pos amt");
  }
  else{
    _balance=balance;
  }
}
get getBalance{
  return _balance;
}

display(){
  print("$name $age");
}
}