const coding = ["js", "ruby", "java", "py", "cpp"];

//* syntax
// array ka Name.forEach(function (kuch be name)){
//     content idhr ayga
// }

// for each using simple fun
coding.forEach(function (item) {
  console.log(item);
});

// for each using arrow func
coding.forEach((item) => {
  console.log(item);
});

//for each using func as parameter
function printMe(item) {
  //function
  console.log(item);
}
coding.forEach(printMe);

// ****************************************************

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
}); //see o/p

//array ke ander objects || comon to use

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  //   console.log(item); // give all objects
  console.log(item.languageName);
  console.log(item.languageFileName);
});
