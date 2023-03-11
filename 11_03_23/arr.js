let arr = [10, 11, 12];

function sum(arr) {
  let odd_sum = 0;
  let even_sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd_sum = odd_sum + arr[i];
    } else {
      even_sum += arr[i];
    }
  }
  return [odd_sum, even_sum];
}
const [odd_sum, even_sum] = sum(arr);
console.log(" Sum of  even elements " + even_sum);
console.log("Sum of  odd elements" + odd_sum);
