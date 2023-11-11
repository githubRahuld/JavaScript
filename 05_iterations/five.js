const myNums = [1, 2, 3];

const initialValue = 0;

const myTotal = myNums.reduce((acc, currValue) => {
  //   console.log(`accumlater: ${acc}`);
  return acc + currValue;
}, initialValue);

console.log(myTotal); // 6

// first time accumalator lega initialValue jo ki humne di
// second time jab loop chala toh accumlator ki value add ho jaygi

const shoopingCart = [
  { itemName: "js course", price: 200 },
  { itemName: "web course", price: 200 },
  { itemName: "apps course", price: 200 },
  { itemName: "data course", price: 200 },
  { itemName: "pys course", price: 200 },
];

const priceToPay = shoopingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(priceToPay);
