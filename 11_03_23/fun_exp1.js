function sum(n1) {
  return function (n2) {
    return n1 + n2;
  };
}
const a = sum(10)(20);
console.log("calling using  sum (10)(20):" + a);
