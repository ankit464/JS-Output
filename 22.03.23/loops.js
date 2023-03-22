//for loop

console.log("Square of the no.s from 0 to 4 using for loop  :");
for (let i = 0; i < 5; i++) {
  console.log(i * i);
}
//for in loop
const person = { firstname: "Ankit", lastName: "Gandotra", age: 18 };
let text = " ";
for (let x in person) {
  text += person[x];
}
console.log(text);

// for in  over arrays
let text2 = "";
const num = [1, 2, 3, 4, 5, 6];
for (let x in num) {
  text2 += num[x];
}
console.log(text2);
// array for each
const arr = [1, 2, 3, 4, 5];
let txt = "";
arr.forEach(myfunc);
function myfunc(value, index, array) {
  txt += value;
}
console.log(txt);
//for of loop
const cars = ["a", "b", "c"];
let txt1 = "";
for (let x of cars) {
  txt1 += x;
}
console.log(txt1);
//while loop
let text3 = "",
  text4 = "";
let j = 0;
while (j < 10);
{
  text3 += "The number is " + j;
  j++;
}
//do -while loop

do {
  text4 += "The number is " + i;
  i++;
} while (i < 10);
