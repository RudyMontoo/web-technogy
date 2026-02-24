mixin ElectricVariant {
  void useElectric() {
    print("This is an electric vehicle");
  }
}

mixin PetrolVariant {
  void usePetrol() {
    print("This is a petrol vehicle");
  }
}

class Tesla with ElectricVariant {}

class HybridCar with ElectricVariant, PetrolVariant {}

void main() {
  Tesla t = Tesla();
  t.useElectric();

  print("-----------");

  HybridCar hc = HybridCar();
  hc.useElectric();
  hc.usePetrol();
}