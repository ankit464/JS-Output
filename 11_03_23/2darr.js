function twoDimensionArray(a, b) {
  let arr = [];

  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }

  // inserting elements to array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}

const x = 3;
const y = 3;

const result = twoDimensionArray(x, y);
console.log(result);
