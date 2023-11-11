//* Property descriptor
// we can change properties of object => 3 properties hoti hai unhe change kr saktey hai

const Chai = {
  name: "ginger Chai",
  print: 250,
  inStock: true,

  isChai() {
    console.log(`hey chai`);
  },
};

console.log(Chai);

const descriptor = Object.getOwnPropertyDescriptor(Chai, "name");
// Object.defineProperty(Chai, "name", { enumerable: false });  //change default property
console.log(descriptor);

for (const [key, value] of Object.entries(Chai)) {
  if (typeof value != "function") {
    console.log(`${key}:${value}`);
  }
}

//* Math.PI value cant change

// console.log(Math.PI);
// const math = Object.getOwnPropertyDescriptor(Math, "PI");
// Object.defineProperty(Math, "PI", { writable: true });
// console.log(math);
