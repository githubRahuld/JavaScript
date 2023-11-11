// Block Scope
// Global Scope

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; //avoid using var bcs it has  scope prblm

  console.log("inner a =", a);
}
console.log(c); //scope problem  ,it print even c is not in scope

console.log(a); // 300

//* scope is different is browser and in code compiler

// ********************************************************************************

function one() {
  const unsername = "Rahul";

  function two() {
    const website = "Youtube";
    console.log(unsername);
  }
  two();
  // console.log(website); // scope error
}

one();
// console.log(unsername); // scope error

if (true) {
  const username = "Rahul Dhakad";

  if (true) {
    const website = "YouTube";
    console.log(username);
  }

  //   console.log(website); //scope error
}

// ********************************************************************************

// console.log(addOne(5)); // no error
function addOne(num) {
  return num + 1;
}
console.log(addOne(5));

// console.log(addTwo(10)); // scope error

// another way to define func
const addTwo = function (num) {
  return num + 1;
};

console.log(addTwo(10));
