let arr = [10, 11, 12, 13, 14, 15, 16];
console.log(" Given array :" + arr);
function sum(arr) {
  let odd_sum = [];
  let even_sum = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd_sum.push(arr[i]);
    } else {
      even_sum.push(arr[i]);
    }
  }
  return [odd_sum, even_sum];
}
const [odd_sum, even_sum] = sum(arr);
console.log(" Even elements array  " + even_sum);
console.log(" Odd elements array " + odd_sum);

function odsum(odd_sum) {
  let od_sum = 0;
  for (var i = 0; i < odd_sum.length; i++) {
    let sum = 0;
    od_sum += odd_sum[i];
  }
  return od_sum;
}
function evsum(even_sum) {
  let ev_sum = 0;
  for (var i = 0; i < even_sum.length; i++) {
    ev_sum += even_sum[i];
  }
  return ev_sum;
}
console.log(" Even array sum  " + odsum(odd_sum));
console.log(" Odd array sum " + evsum(even_sum));
