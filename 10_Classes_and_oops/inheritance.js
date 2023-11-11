class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

const userOne = new User("Rahul"); //creating instance
console.log(userOne.logMe()); //calling method inside class

class Teacher extends User {
  constructor(username, email, pass) {
    super(username); //super check in parent class and initialise it
    this.email = email;
    this.pass = pass;
  }
  addCourse() {
    console.log(`${this.username} you added new course`);
  }
}

const userTwo = new Teacher("manish", "manishfb@mail.com", "1234xyx");
console.log(userTwo);
console.log(userTwo.addCourse());

console.log(userTwo instanceof Teacher);
