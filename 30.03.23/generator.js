function* timestampGenerator() {
  console.log(Date.now());

  yield;
  console.log("exceution continues");
}
const it = timestampGenerator();
// for (const val of it) {
//   console.log(val);
// }

it.next();
it.next();
