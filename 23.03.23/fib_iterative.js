var first = 0;
var second = 1,
  result;
const prompt = require("prompt-sync")();
const num = prompt("enter no. upto which series to be printed : ");
console.log("series is given as :");
for (var i = 0; i < num; i++) {
  if (i <= 1) {
    result = i;
  } else {
    result = first + second;
    first = second;
    second = result;
  }
  console.log(result);
}
