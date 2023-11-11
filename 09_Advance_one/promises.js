const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    resolve(); // have to write to execute then part
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consume");
});

// other way
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise completed succ");
});

// if resolve has data
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 3");
    resolve({ username: "Paul", email: "paul@mail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  //user is object as a parameter
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "raju", pass: "123" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

// chaining
promiseFour
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    // finally toh chlega hi
    console.log("The promise is either resolved or rejected");
  });

// other way using async await

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", pass: "123" });
    } else {
      reject("JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// // get api using async await

// async function getUserData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//       console.log("E:", error);
//     }
// }

// getUserData();

// another simple method
import fetch from "cross-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
