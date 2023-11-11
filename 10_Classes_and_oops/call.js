function setUserName(username) {
  this.username = username;
}

function setUserInfo(username, email, pass) {
  setUserName.call(this, username); // yaha setUserInfo apna this/reference bej raha

  this.email = email;
  this.pass = pass;
}

const userOne = new setUserInfo("Komal", "komal123@mail.com", "123");
console.log(userOne);
