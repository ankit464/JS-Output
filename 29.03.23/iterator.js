let numbers = [1, 2, 3, 4];

let iter = numbers[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// using while loop
let res = iter.next();
while (!res.done) {
  console.log(res.value);
  res = iter.next();
}

//iterator over string
let str = "ankit";
let iter1 = str[Symbol.iterator]();

// using while loop
let res1 = iter1.next();
while (!res1.done) {
  console.log(res1.value);
  res1 = iter1.next();
}
