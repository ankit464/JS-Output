// spread operator for copying
let arr = ["a", "b", "c"];
let arr2 = [...arr];

console.log(arr); // [ 'a', 'b', 'c' ]

arr2.push("d"); //inserting an element at the end of arr2

console.log(arr2); // [ 'a', 'b', 'c', 'd' ]
console.log(arr); //[a,b,c]

let arr3 = ["a", "b"];
let arr4 = [...arr, "c", "d"];

console.log(arr4); // [ 'a', 'b', 'c', 'd' ]
