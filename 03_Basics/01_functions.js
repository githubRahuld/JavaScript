// Function

function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}
// sayMyName => Reference
// sayMyName() => execution/call

sayMyName();

function addTwoNum(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNum(22, 22));

// *************************************************************************

function loginUserMsg(username) {
  if (!username) {
    console.log("Pls enter a unsername");
    return;
  }
  return `Thanky for login ,${username}`;
}

console.log(loginUserMsg("Rahul"));
// if argument is not passed o/p will be undefined

// *************************************************************************

function add(...num1) {
  return num1;
}
console.log(add(100, 200, 300, 500));
// [ 100, 200, 300, 500 ]

function add1(val1, val2, ...num1) {
  return num1;
}
console.log(add1(100, 200, 300, 500));
// [ 300, 500 ]

// *************************************************************************

const users = {
  pName: "doll",
  price: 399,
};

function pDetail(anyObj) {
  console.log(
    `Product name is ${anyObj.pName} and product price is ${anyObj.price}`
  );
}

pDetail(users);
// object as parameter
pDetail({ pName: "new Doll", price: 499 });

const myArr = [200, 300, 400, 500, 600];

function returnSecValue(someArray) {
  return `sencond value is ${someArray[1]}`;
}

console.log(returnSecValue(myArr));
// array as parameter
console.log(returnSecValue([200, 300, 400, 500, 600]));
