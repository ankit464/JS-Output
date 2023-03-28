function* generator() {
  try {
    yield 10;
    yield 20;
  } catch (err) {
    console.log(err);
  }
}

var it = generator();
console.log(it.next().value);
console.log(it.next().value);
it.throw("error found ");
