function* fun() {
  yield 10;
  yield 20;
  yield 30;
}
var gen = fun();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
