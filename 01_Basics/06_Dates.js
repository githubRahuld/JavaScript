let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

console.log(Date.now()); //time in milisec from 1970
console.log(Math.floor(Date.now() / 1000)); //time in sec

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());

newDate.toLocaleString("default", {
  weekday: "long",
});
