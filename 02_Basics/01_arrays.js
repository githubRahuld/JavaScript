//**  array

let myArr = [0, 1, 2, 3, 3, 4, 5];
const movies = ["jawan", "krish"];

const myArr2 = new Array(1, 3, 4, 4, 5, 56);
console.log(myArr2[4]);

//**  Array methods

myArr.push(6); //add values in arr
myArr.push(7);
myArr.pop();

myArr.unshift(10); // add at front
myArr.shift(); // delete from front

console.log(myArr.includes(3)); //return boolean value
console.log(myArr.indexOf(4)); //return index

console.log(myArr);

const newArr = myArr2.join(); // transfer values of arr & convert into string
console.log(newArr);

//**  slice , splice

const myn1 = myArr.slice(1, 3);
console.log(myn1);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

//! interview que
// splice => it include the end value also it removes the splice portion from orig arr
// minupulate the org arr
console.log(myArr);
