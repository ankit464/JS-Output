//Destructuring Assignment is a JavaScript expression that allows to unpack
// values from arrays, or properties from objects, into distinct variables data
//  can be extracted from arrays, objects, nested objects and assigning to
//  variables
[x, y, ...restof] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(restof); // [30, 40, 50]
