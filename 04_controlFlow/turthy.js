// const userEmail = ""
const userEmail = [];

if (userEmail) {
  console.log("Got the mail");
} else {
  console.log("Not get mail");
}

//* Falsy values
// flase, 0, -0, BigInt 0n, "", null, undefined, NaN

//* Truthy values
// "0", 'false', " ", [] , {}, function(){}

//to check array is empty
if (userEmail.length === 0) {
  console.log("Array is empty");
}

//to check object is empty
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Empty Object");
}

// false == 0 || false == '' || 0 == '' => all are True

//! NUllish coalescingoperator (??) : null undefined

let val1;
// val1 = 5 ?? 10; //? 5
// val1 = null ?? 5 //? 5;
// val1 = undefined ?? 3; //? 3
val1 = null ?? 3 ?? 5; //? 3

console.log(val1);

// Terniary Operator
// condition ? true : false

const age = 21;
age >= 18 ? console.log("Right to vote") : console.log("Unable to vote");
