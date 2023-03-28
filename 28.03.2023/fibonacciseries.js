// different numbers in three calls
function* fib(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var gen = fib(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
