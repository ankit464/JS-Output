var w = 24;
var h = 6;

let stat;
console.log(bmi(w));

function bmi(w, h) {
  var a = w / (h * h);
  if (a > 10 && a < 15) {
    a = " good weight";
  } else if (w > 15 && w < 20) {
    a = "avg weight";
  } else {
    a = "over weight";
  }
  return a;
}
