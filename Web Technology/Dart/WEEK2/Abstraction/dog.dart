import 'animal.dart';

class Dog extends Animal {
  Dog(String name) : super(name);

  @override
  void makeSound() {
    print("Woof!");
  }
}