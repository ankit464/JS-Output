const points = [1, 2, 3, 4, 5, 6];
//sorting in descending order

points.sort(function (a, b) {
  return b - a;
});
console.log("Highest value is :" + points[0]);
console.log("Lowest value is :" + points[points.length - 1]);

points.sort(); // this is the alphabetical sort
console.log(points);
