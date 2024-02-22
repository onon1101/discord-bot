import { MyInterface, myFunction } from "./myLocalModule";
import "./myModule-augentations";

const obj: MyInterface = {
  name: "John",
  age: 25,
  address: "123 Main str",
};

myFunction();
myExtendedFunction();
