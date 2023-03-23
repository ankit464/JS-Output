var n = 12323;
var sum = 0;
var temp = n;

while (temp > 0) {
  var rem = temp % 10;
  sum += rem;
  temp = Math.floor(temp / 10);
}
console.log(sum);
