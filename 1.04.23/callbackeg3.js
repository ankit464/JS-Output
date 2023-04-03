let stocks = {
  Fruits: ["apple", "mango"],
  liquid: ["water ", "ice"],
  holder: ["cone", "cup", "stick"],
  toopings: ["chocolate", "peanuts "],
};
//console.log(stocks.Fruits[1]);

let order = (fruit_name, call_production) => {
  //   console.log("order placed ,please call production");

  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected `);
    call_production();
  }, 2000);
};
let production = () => {
  //   console.log("order received , starting production");
  //callback hell make relationship ....child grand child .....and so on
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("the fruit has been chooped ");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log("the machine has started");
          setTimeout(() => {
            console.log(
              ` ice cream was placed on the cone  ${stocks.holder[0]}  `
            );
            setTimeout(() => {
              console.log(`${stocks.toopings[0]} was added as toppings`);
              setTimeout(() => {
                console.log("serve the ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};
order(0, production);
