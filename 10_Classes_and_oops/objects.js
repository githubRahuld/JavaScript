function multiBy5(num) {
  this.num = num;
  return num * 5;
}

multiBy5.power = 2; // function  behave like objects or used as objects

console.log(multiBy5(5)); // 25
console.log(multiBy5.power); // 2
console.log(multiBy5.prototype); // {}

// ****************************************************

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const tea = new createUser("happy", 30);
const chai = new createUser("singh ", 50);

tea.printMe(); // give error if new keyword is not used
