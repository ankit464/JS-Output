const prompt = require("prompt-sync")();

const num = prompt("enter no. of element you want in your array: ");
const temp = [num];
for (var i = 0; i < num; i++) {
  temp[i] = prompt("enter " + `${i}` + " element :");
}
const ele = prompt("enter the no. you want to search ");
var flag = 0,
  idx;
for (var i = 0; i < temp.length; i++) {
  if (temp[i] == ele) {
    flag = 1;
    idx = i;
  }
}
if (flag == 1) {
  console.log("elment found at index " + `${idx}`);
} else {
  console.log("element not found in array");
}
