let stocks = {
  Fruits: ["apple", "mango"],
  liquid: ["water ", "ice"],
  holder: ["cone", "cup", "stick"],
  toopings: ["chocolate", "peanuts "],
};
let is_shop_open = true;
let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which toppings do  you like the most ?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log("A");
  console.log("b");
  console.log("c");
  await toppings_choice();
  console.log("d");
  console.log("e");
}

kitchen();
console.log("doing the dishes ");
console.log("cleaning the tables ");
console.log("taking the orders ");
