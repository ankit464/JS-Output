const prompt = require("prompt-sync")();

var a = prompt("enter a: ");
const prompt1 = require("prompt-sync")();

var b = prompt1("enter b: ");
console.log("Before Swapping:");

console.log("a :" + a);
console.log("b :" + b);

var c = a;
a = b;
b = c;

console.log("After Swapping ");

console.log("a :" + a);
console.log("b :" + b);
