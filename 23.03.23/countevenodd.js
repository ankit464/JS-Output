const num = [1, 2, 3, 4, 5];
var even = 0,
  odd = 0;
for (var i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log("count of even no.s :" + even);
console.log("count of odd no.s: " + odd);
