function numberiterartor(arr) {
  var nextnum = 0;
  return {
    next() {
      if (nextnum < arr.length) {
        return {
          value: arr[nextnum++],

          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

let number = [1, 2, 3, 4, 5];
let num = numberiterartor(number);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
