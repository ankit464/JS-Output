let x = 9;

console.log("The Fibonacci series upto 9 no.s : ");

// function returns the Fibonacci number
// function fib(n) {
//   if (n <= 1) return n;
//   return fib(n - 1) + fib(n - 2);
// }

// //function call
// console.log(fib(n));

for (i = 0; i < x; i++) {
  console.log(recursivefibonacci(i));
}

function recursivefibonacci(x) {
  if (x == 0) return 0;
  else if (x == 1) return 1;
  else return recursivefibonacci(x - 1) + recursivefibonacci(x - 2);
}
