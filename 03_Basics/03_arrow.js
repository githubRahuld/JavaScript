const users = {
  username: "rahul",
  price: 999,
  welcomeMsg: function () {
    console.log(`Hello ${this.username}  from JS side`);
    console.log();
    // this => refers current context
  },
};

users.welcomeMsg();

function chai() {
  const username = "Rahul";
  console.log(this.username); //can't use this is Function , op: (undefined)
}
chai();

//* Arrow Functions

const chaii = () => {
  console.log("This is arrow function.");
};
chaii();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

//if func has one line code
const addTwo2 = (num1, num2) => num1 + num2;
const addTwo3 = (num1, num2) => ({ username: "rahul" }); //obj ko {} me wrap krna pdta hai

console.log(addTwo(1, 2));
console.log(addTwo2(1, 2));

//conclusion
//if {} hai  => use return keyword
//if () hai  => return keyword not used
