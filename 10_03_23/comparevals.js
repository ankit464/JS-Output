const prompt = require("prompt-sync")();

var a = prompt("enter a: ");
const prompt1 = require("prompt-sync")();

var b = prompt1("enter b: ");

console.log("a :" + a);
console.log("b :" + b);

if (a > b) {
  console.log("A is greater than B");
} else if (a < b) {
  console.log("A is less than B ");
} else {
  console.log("Both A and B are equal");
}
