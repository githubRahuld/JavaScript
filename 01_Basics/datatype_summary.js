//! Primitive DT --only value is copied
// 7 types: String , Number, Boolean, null , undefined ,Symbol ,BigInt

const num = 88;
let numValue = 88.6;

const isLogged = false;
const outsideTemp = null;
let email;

//Symbol gives unique values ,it is used in objects
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId); //false

let mySymbol = Symbol();
console.log(mySymbol); //Symbol()

const bigNumber = 3544243545333454123n; //bitInt

// !Reference (Non Primitive) --reference is allocated
//Arrays , Objects , Functions

const myArr = ["Ram", "shyam", "Hariom"];

const myObj = {
  name: "rahul",
  age: 22,
  email: "rahul@gmail.com",
};

const myFun = function () {
  console.log("This is  function");
};
myFun(); //calling func

/* //!Return type:- 
undefined => undefined
null => object
Boolean => Boolean
Number = number
String = string
Symbol => Symbol
array = object
object => object
funct => funcion object
*/

console.log(typeof myArr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//! Memory Allocation

// Primitive (Stack)  Non-primitive(Heap)
// Stack me variable ki copy create hoti hai
// Heap me value ka referecing ki jati hai

let myName = "Rahul";
let myNewName = myName;
myNewName = "rahul Dhakad";

console.log(myName);
console.log(myNewName);

let userOne = {
  id: 1,
  upi: "user1@ybl",
  mail: "user1@mail.com",
};

let userTwo = userOne;
userTwo.mail = "user3@mail.com";

console.log(userOne.mail);
console.log(userTwo.mail);
