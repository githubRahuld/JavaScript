const accountNumber = 76334567;
let accountName = "Rahul";
var accountCity = "Ruthiyai"; // not to use var bcs of block scope
accountMail = "rahul@mail.com"; //can be used but not prefferable

//way to print all varibe at a time in tablular form
console.table([accountNumber, accountCity, accountName, accountMail]);

//! accountNumber = 76334567; //const cant be re assign
accountName = "Rahul Dhakad";
accountCity = "Guna";
accountMail = "rahulD@mail.com";

console.table([accountNumber, accountCity, accountName, accountMail]);
