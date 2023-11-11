const num = 34;

const score = 120.9224;

console.log(score.toString());

console.log(score.toString().length); // 8

console.log(score.toFixed(2)); // 120.32

console.log(score.toPrecision(4)); // 1.2e+2

const hundread = 1000000; //use for currency to better understand
console.log(hundread.toLocaleString("en-IN"));

// ********************* Math *********************************
console.log(Math.abs(-32));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.max(4, 5, 8, 5, 9));
console.log(Math.min(4, 5, 8, 5, 9));

//Random
console.log(Math.random()); //  range => 0-1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 0;
const max = 1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
