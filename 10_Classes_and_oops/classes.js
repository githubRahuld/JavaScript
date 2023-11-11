class User {
  constructor(Username, email, pass) {
    this.Username = Username;
    this.email = email;
    this.pass = pass;
  }

  encriptPass() {
    return `${this.pass}abc`;
  }
  changeUsername() {
    return this.Username.toUpperCase();
  }
}

const userOne = new User("Arun", "arun@mail.com", "123");
console.log(userOne);
console.log(userOne.encriptPass());

// behind the scene

function AnotherUser(Username, email, pass) {
  this.Username = Username;
  this.email = email;
  this.pass = pass;
}

AnotherUser.prototype.encriptPass = function () {
  return `${this.pass}abc`;
};

const userTwo = new AnotherUser("Rao Shab", "rao@mail.com", "12345");
console.log(userTwo);
console.log(userTwo.encriptPass());
