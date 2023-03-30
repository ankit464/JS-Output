// function* generateit() {
//   console.log("first message");
//   yield "yield no. 1";
//   console.log("second message ");
//   yield "yield no. 2";
// }
// let g = generateit();

// //console.log(g.next());

// for (let value of g) {
//   console.log(value);
// }

//creating array of yield
function* gen() {
  let resArray = [yield, yield, yield];
  console.log(`Result : ${resArray}`);
}
let g1 = gen();

g1.next(500);
g1.next(300);
g1.next(200);
