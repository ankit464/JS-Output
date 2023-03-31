const cart = ["car", "cycle", "kurta"];
// const promise = createOrder(cart); // API (async operation)
// console.log(promise);
// promise
//   .then(function (orderId) {
//     //proceedToPayment(orderId);
//     console.log(orderId);
//   })
createOrder(cart) //  in this chaining response of the one pass to the another call back chain
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    // making the chain running if any one of the condition fails.
    // handling the errors
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .then(function (orderId) {
    console.log(
      "No matter what happend i will be called because i m after catch block "
    );
  });
//   .catch(function (err) {
//     // handling the errors
//     console.log(err.message);
//   });

//producer code
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createorder
    //validateorder
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
      //  resolve(orderId);
    }
  });
  return pr;
}
function validateCart(cart) {
  //return true;
  return false;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment sucessful");
  });
}
