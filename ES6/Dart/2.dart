void main(){

  // var a="Hello";
  // a=10
  // error if we do like this 


// DYNAMIC DATATYPE
  dynamic b="Hello";
  b=10;
  print(b);
  // print(b.length); //run because run time pe fixed hoga

  // Object Datatype
   dynamic c="Hello";
  c=10;
  print(c);
  // print(c.length); //not run because compile time pe fix hoga


  var a;
  a=10;
  a="Hello";
  print(a.length);


// null safety or nullable type operator

String? name1;
print(name1);
print(name1.toString());
print(name1.hashCode);

// late variable
// agr aap kissi var ko same time declare nhi krna chahte hai
// String name; give error
late String name; //no error


// final(run time) const(compile time)
 final time=DateTime.now();
 print(time);

 var hex=0xABCDF;
 print(hex);  //convert num into decimal
 print(hex.runtimeType);


 var v=1.1;
 var v2=1.32e5;
 print(v2);
print(v2.runtimeType);

}