const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((nums) => {
  return (nums = nums + 10);
});
console.log(newNums);

//* using for each
// const newNum = myNums.forEach((nums) => {
//   return (nums = nums + 10);
// });

//*  chaining

const otherNums = myNums
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums > 40);

console.log(otherNums);
