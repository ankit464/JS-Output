const prompt = require("prompt-sync")();

var num = prompt("enter number: ");
var sum = 0;
var temp = num;
while (temp > 0) {
  sum = sum + (temp % 10);
  temp = temp / 10;
}
console.log("original number :" + num);
console.log("sum of digits :" + sum);
