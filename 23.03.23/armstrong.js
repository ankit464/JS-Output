let sum = 0;
const prompt = require("prompt-sync")();

const num = prompt("enter a number: ");
let temp = num;
while (temp > 0) {
  let rem = temp % 10;
  sum += rem * rem * rem;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log("no. is armstrong");
} else {
  console.log("no . is not armstrong ");
}
