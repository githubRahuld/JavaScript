class myClass {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  set password(value) {
    this._password = value; // change the property name otherwise sys confuse
    // like uh set value in constructor and also in setter it give err
  }
  get password() {
    console.log(`${this._password}rahul`);
  }

  set username(value) {
    this._username = value;
  }
  get username() {
    return this._username.toUpperCase();
  }
}

const rahul = new myClass("Rahulll", "123system");
console.log(rahul.password);
console.log(rahul.username);
