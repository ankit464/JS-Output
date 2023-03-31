// const prompt = require("prompt-sync")();

const str = [1, 2, 3, 4, 1, 2, 3, 5, 7];

let len = str.length;
let map1 = new Map();
for (let i = 0; i < len; i++) {
  let char = str[i];

  if (map1.has(char)) {
    let value = map1.get(char);
    map1.set(char, value + 1);
  } else {
    map1.set(char, 1);
  }
}
console.log(map1);

// // for (let i = 0; i < len; i++) {
// //   let char = str[i];
// // for (let char in map) {
// //   if (map[char] == 1) {
// //     console.log(char);
// //   }
// //   let value = map.get(char);
// //   // map.set(char, value + 1);
// //   if (value == 1) console.log(char);
// //}
map1.forEach((values, keys) => {
  if (values == 1) {
    console.log(keys);
  }
});
// console.log(map);
// for (let val in map) {
//   console.log(val);
// }

// const arr = [1, 2, 3, 3, 4, 5, 1, 2, 3];

// const map2 = new Map();

// for (let val of arr) {
//   if (map2[val]) {
//     map2[val]++;
//   } else {
//     map2[val] = 1;
//   }
// }
// console.log(map1);
// console.log(map2);

// for (let val in map1) {
//   if (map1[val] == 1) {
//     console.log(val);
//   }
// }
