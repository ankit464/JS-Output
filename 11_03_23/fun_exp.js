function sum(n1) {
  return function (n2) {
    return n1 + n2;
  };
}
const a = sum(10);
console.log("calling using  a(10)" + a(20));
