class User {
  constructor(username) {
    this.username = username;
  }
  static createid() {
    //static property ko excesss krne se rokta hai
    return "12445";
  }
}

const userOne = new User("Rahul");
console.log(userOne.createid()); // error kyoki static use hua
