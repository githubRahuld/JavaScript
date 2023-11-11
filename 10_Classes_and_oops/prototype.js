let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getspiderPower: function () {
    console.log(`spiderman power is ${this.spiderman}`);
  },
};
// we can define our own prototype
// jisey woh prototype sare object string function use kr sake
Object.prototype.hitesh = function () {
  console.log(`Rahul is present in all objects`);
};

Array.prototype.heyRahul = function () {
  console.log(`Rahul says hello`);
};

heroPower.getspiderPower();

heroPower.hitesh();
myHeros.hitesh(); // no error bcs we define it in object which is parent
myHeros.heyRahul();
// heroPower.heyRahul(); //error
// prototype is defined in array which is child of object
// so parent cant acccess child methods

// inheritance

const User = {
  name: "jack",
  loggeIn: true,
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax        //child        //parent
Object.setPrototypeOf(TeachingSupport, Teacher); //same functio as __proto__

// **********************************************************************************************************

// if we want to use trim function as a prototype
// which can be used by all strings

const myName = "Rahul ";

String.prototype.trueLength = function () {
  console.log(this); // myName
  console.log(`true length is: ${this.trim().length}`);
};

myName.trueLength(); // 5
"Ganesh".trueLength();
