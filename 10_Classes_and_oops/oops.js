// object literal

const user = {
  //properties
  username: "rahul",
  isSingedIn: true,
  loggedInCount: 8,

  //method
  getUserDetails: function () {
    console.log("get user details");
    console.log(`Username: ${this.username}`);
    console.log(this); // whole object
  },
};

// console.log(this); // {} => globaly
// yahi agar browser pe karoge toh window object return hoga

console.log(user.username);
console.log(user.getUserDetails());

// *********************************************************
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // if not written it atutomatically return this
}

//if we can't use new keyword value changes
// new keyword provide new instances
const userOne = new User("rahul", 10, true);

const userTwo = new User("ChaiAurCode", 15, false);
console.log(userOne);
console.log(userTwo);
console.log(userTwo.greeting());
