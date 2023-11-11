// singleton => this way is used when obj is created as constructor
// object.create()

//* object literal => i am using this way to declare object

// declare symbol
const mysym = Symbol("key1");

const user = {
  name: "rahul",
  "full name": "Rahul Dhakad",
  [mysym]: "mykey1", // syntax to use Symbol
  age: 22,
  email: "rahul@gmail.com",
  city: "Guna",
  isLoggedIn: false,
  lastLoggedIn: ["Monday", "Wednesday", "Friday"],
};

console.log(user.name);
console.log(user["name"]); // correct way
//both are the ways to print object value

console.log(user["full name"]);
console.log(user[mysym]);

// Object.freeze(user); //no change will happen after freeze
user.email = "rahuldhakad@mail.com";
console.log(user);

// Functions

user.greeting = function () {
  console.log("Hello JS user");
};
user.greetingTwo = function () {
  console.log(`Hello JS user ${this.name}`);
};

console.log(user.greeting());
console.log(user.greetingTwo());
