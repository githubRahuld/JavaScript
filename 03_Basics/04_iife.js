//IIFE
// imediately invoked function expresions

//jab hame koi fuction explicitly(turant baad) invoke karana ho

//syntax
// (func defination)(execute);

(function chai() {
  console.log("System hai");
})();

//named iife
(chai = () => {
  console.log("system hai");
})();

//un-named iife
((name) => {
  console.log(`DB CONNECTED ${name}`);
})("Rahul");
