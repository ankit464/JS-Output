function one(call_two) {
  call_two();

  console.log("func 1");
}
function two() {
  console.log("func 2");
}
one(two);
