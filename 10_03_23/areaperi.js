const prompt = require("prompt-sync")();
var r = prompt("enter radius: ");
var area = 3.14 * r * r;
var peri = 2 * 3.14 * r;

console.log("Area of the circle: " + area);
console.log("Perimeter of the circle :" + peri);
