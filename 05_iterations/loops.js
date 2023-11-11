// for

const num = 10;
for (let i = 0; i < num; i++) {
  if (i == 5) {
    console.log("Five");
  }
  console.log(`num: ${i}`);
}

//nested for loop => tables from 1 to 10
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = `, i * j);
  }
}

// break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    continue; // skip
  }

  if (i == 10) break; // close the loop
  console.log(`num : ${i}`);
}

// while

const myArr = ["flash", "batman", "superman"];

let i = 0;
while (i < myArr.length) {
  console.log(myArr[i]);
  i++;
}

//do while loop

let score = 0;
do {
  console.log(`score is ${score}`);
  score++;
} while (score <= 3);

// for of

let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greeting = "Hello world";

for (const greet of greeting) {
  if (greet == " ") {
    continue;
  }
  console.log(`char ${greet}`);
}

// Maps => key pair vlaues with unique values
// Maps are not iterable
const map = new Map();
map.set(1, "one");
map.set(2, "Two");
map.set(3, "Three");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// const obj = { name: "Rahul", batch: "B7", course: "SE" };

// for (const [key, value] of obj) {
//   console.log(key,":-", value);
// }

//* objects cant be iteratable using (for of)

//* insteadof use (for in)

const obj = {
  // to iterate objects we use (for in)
  // (for in) ke ander keys ati hai
  "c++": "cpp",
  js: "javascipt",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in obj) {
  console.log(obj[key]);
}

let languages = ["c++", "java", "py", "c", "c#", "js"];

for (const arr in languages) {
  // console.log(arr); //op: keys
  console.log(languages[arr]);
}

//summary
// array => for of
// object => for in
