const marvel_heros = ["spiderman", "Ironman", "hulk"];
const dc_heros = ["Batman", "Superman", "Flash"];

marvel_heros.push(dc_heros);
console.log(marvel_heros); // it add array into array
// op: [ 'spiderman', 'Ironman', 'hulk', [ 'Batman', 'Superman', 'Flash' ] ]

// to merge array use concat()
// it return new array

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);
// op: [ 'spiderman', 'Ironman', 'hulk', 'Batman', 'Superman', 'Flash' ]

// concat two or more arr using spread (...)
const allHeros = [...marvel_heros, ...dc_heros];
console.log(allHeros);

const anotherArr = [1, 2, 3, 4, [3, 84], 7, [1, 2]];
const usableArr = anotherArr.flat(Infinity);
console.log(usableArr); // op: [ 1, 2, 3, 4, 3, 84, 7, 1, 2]

//* convert anything into arr
const name = "rahul";
console.log(Array.isArray(name)); // to check that array or not
console.log(Array.from(name)); // [ 'r', 'a', 'h', 'u', 'l' ]

//! interview que
console.log(Array.from({ name: "Rahul" })); // []
//if key value pair can't convert

let n1 = 100;
let n2 = 200;
let n3 = 300;

console.log(Array.of(n1, n2, n3)); // [ 100, 200, 300 ]
