let score = "69";

console.log(typeof score); // typeof(score) :. both are same

score = null;
let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber); //op: 0

/*after converting to Number
"33" => 33
"33abc" => NaN
true = 1 ; false = 0
null = number &  value 0
undefined = number & value NaN
*/

//boolean
let loggedIn = 1;
let boolLoggedIn = Boolean(loggedIn);
console.log(boolLoggedIn); //true

// 1 => true ; 0 =>  false
// "" => false
// "Rahul" => true

//string
let stringNumber = 33;
let numToString = String(stringNumber);
console.log(typeof numToString); //string

// ************************* Operations ****************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); //power operator
// console.log(2 / 2);
// console.log(2 % 2);

console.log("1" + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");
console.log("1" + 2 + 3);

//if first string , whole converted in string
//if first number , treat as number

console.log(+true); //1
console.log(+""); //0

//prefix postfix increment operator
let x = 3;
let y = x++;
console.log(x); //4
console.log(y); //3

let a = 3;
let b = ++a;
console.log(a); //4
console.log(b); //4

//!avoid these kind of conversion given below

//eqaulity check:- ==
//comparisons:- > ,< ,>=, <=

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true bcs comparisons treat null as 0
// null = 0 i.e, 0>=0 true

//all false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

//strict check ===
console.log("2" == 2); //true => only check the value
//but
console.log("2" === 2); //false => also check the datatype
