function* errorhandling() {
  try {
    yield 1;
    throw "this is another error "; // in this  way error handling happend in the async function
    yield 2;
    yield 3;
  } catch (error) {
    console.error(error);
  }
}
const errorit = errorhandling();
console.log(errorit.next());
errorit.throw("error occured");
console.log(errorit.next());
