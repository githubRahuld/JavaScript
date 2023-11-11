let name = "Rahul";
let repoCount = 15;

console.log(name.toUpperCase());
//console.log("my name is " + name + " repo " + repoCount); //!don't use this way
console.log(`my name is ${name} and my repo count is ${repoCount}`); //use this method to concatenate

//!another way to use string || with extra features

const gameName = new String("Takken-new-game");
console.log(gameName);

//this method has some prototype/features
//like
console.log(gameName[0]); // T
console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // TAKKEN

console.log(gameName.charAt(2)); //k
console.log(gameName.indexOf("k")); //2

const subGame = gameName.substring(1, 4); // substring(start,end-1)
console.log(subGame);

const subGameSlice = gameName.substring(-5, 4); //from last index
console.log(subGameSlice);

//trim
const stringOne = " rahul  ";
console.log(stringOne);
console.log(stringOne.trim());

//replace
const url = "https//rahul.com/jkh%20dhakad";

console.log(url.replace("%20", "-"));

//includes
console.log(url.includes("rahul"));

//slit sting into array
console.log(gameName.split("-")); // [ 'Takken', 'new', 'game' ]
