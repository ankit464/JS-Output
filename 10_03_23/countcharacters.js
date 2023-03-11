let a = "ankit gandotra";
var letters = 0,
  nos = 0,
  sp = 0;
sch = 0;
var l = a.length;
for (var i = 0; i < l; i++) {
  if (
    (a.charAt(i) >= "a" && a.charAt(i) <= "z") ||
    (a.charAt(i) >= "A" && a.charAt(i) <= "Z")
  ) {
    letters++;
  } else if (a.charAt(i) >= 48 && a.charAt(i) <= 57) {
    nos++;
  } else if (a.charAt(i) == " ") {
    sp++;
  } else {
    sch++;
  }
}
console.log(letters);
console.log(nos);
console.log(sp);
console.log(sch);

//     else if (){
// s++;
//     }
// else if (){
// n++;
// }
// else if (){
// sp++
// }
