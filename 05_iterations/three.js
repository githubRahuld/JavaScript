const coding = ["js", "ruby", "java", "py", "cpp"];

//store in variable
const values = coding.forEach((item) => {
  return item;
});
console.log(values); // undefined

//* conclusion
// forEach does-not return any value

// ****************************************************

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNum.filter((num) => {
  return num > 4;
});
console.log(newNums);

//use this using forEach

const newArr = [];
myNum.forEach((num) => {
  if (num > 4) {
    newArr.push(num);
  }
});

console.log(newArr);

const book = [
  { title: "Book one", genre: "Fiction", publish: "1992", edition: "2004" },
  { title: "Book Two", genre: "Science", publish: "1998", edition: "2004" },
  { title: "Book Three", genre: "History", publish: "1991", edition: "2004" },
  { title: "Book Four", genre: "Fiction", publish: "2001", edition: "2004" },
  { title: "Book Five", genre: "History", publish: "2005", edition: "2009" },
  { title: "Book Six", genre: "Fiction", publish: "2009", edition: "2012" },
];

//find books info whoes genre is History
const HistoryBook = book.filter((bk) => {
  return bk.genre === "History";
});

// console.log(HistoryBook);

//Books publis after 2000 and genre History
const BooksAfter2000 = book.filter((bk) => {
  return bk.publish > 2000 && bk.genre === "History";
});

console.log(BooksAfter2000);
