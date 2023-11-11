// const tinderUser =  new Object(); // singleton object

const tinderUser = {}; //non-singleton obj or object literals

tinderUser.id = "123abc";
tinderUser.name = "Rahul";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  mail: "someone@mail.com",
  //nesting
  fullname: {
    username: {
      firstname: "rahul",
      lastname: "dhakad",
    },
  },
};

console.log(regularUser.fullname);
console.log(regularUser.fullname.username);
console.log(regularUser.fullname.username.firstname);

//* merge objects
const target = { 1: "a", 2: "b" };
const source = { 3: "a", 4: "b" };

const resultObj = Object.assign({}, target, source); //syntax

//mostly used
const rslt = { ...target, ...source }; //spread opr
console.log(rslt);

const users = [
  {
    id: 1,
    mail: "one@mail.com",
  },
  {
    id: 2,
    mail: "one@mail.com",
  },
  {
    id: 3,
    mail: "one@mail.com",
  },
];

users[1].mail;

//imp
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
//both return array

console.log(Object.entries(tinderUser));
//return key value pair in array

//to check property exist or not in obj
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //retrun boolean

//* object Destructure
const course = {
  courseName: "JavaScript",
  price: 999,
  courseInstructor: "Hitest",
};

//syntax
const { courseInstructor: instructor } = course;
console.log(instructor);

// API => are in JSON(JS-object-Notation) format

//ex 1
// {
//   "name":"rahul",
//   "Year":"2023",
//   "Stream":"CS"
// }

//ex2
// [
//   {},
//   {},
//   {}
// ]
