const cart = ["apple", "mango", "banana"];

//callback hell

// createOrder(cart, function (orderId) {
//   proceedToPayment(OrderId, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function () {
//       updateOrderDetails();
//     });
//   });
// });

//creatng promise

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

//promise chaining to avoid hard code of callback hell

const promise = createOrder(cart);
promise.then(function (orderId) {
  proceedTopayment(orderId);
});

// this above code can be written as :
// createOrder(cart).then(function (orderId) {
//   proceedTopayment(orderId);
// });

///promise chaining:it resolve the problem of the callback hell

// NOTE: we must return from the promise to the promise when we are  chaining it .so that we get the data in the proper chain

createOrder(cart)
  .then(function (orderId) {
    return proceedTopayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderDetails(paymentInfo);
  });

//promise chaining using  arrow function'

createOrder(cart)
  .then((orderId) => proceedTopayment(orderId))

  .then((paymentInfo) => showOrderDetails(paymentInfo));

const github_API = "https://api.github.com/users/akashaymarch7";
const user = fetch(github_API);
//API GIVEN BY THE BROWERSER TO US TO FETCH EXTERNAL OBJECT
//it returns promise
console.log(user);

user.then(function (data) {
  console.log(data);
});
