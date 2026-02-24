abstract class Animal {
  String name;

  Animal(this.name);

  void makeSound(); // Abstract method

  void eat() {
    print("$name is eating.");
  }
}