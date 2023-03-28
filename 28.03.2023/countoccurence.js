const prompt = require("prompt-sync")();

let str = prompt("enter string : ");
let len = str.length;
let map = new Map();
for (let i = 0; i < len; i++) {
  let char = str.charAt(i);

  if (map.has(char)) {
    let value = map.get(char);
    map.set(char, value + 1);
  } else {
    map.set(char, 1);
  }
}
console.log(map);
