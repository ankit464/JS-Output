const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  // callback hell

  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//api.proceedTopayment();
//api.showordersummary();
//api.updatewallet()
