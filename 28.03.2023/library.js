export let message = "es6 modules";

export function user() {
  console.log("hello world ");
}
export function user1(name) {
  // console.log(`hello ${name}`);
  return `hello ${name}`;
}

export class test {
  constructor() {
    console.log("constructor method is called ");
  }
}
//export { message, user, test };

export default function () {
  console.log("hello jammu ");
}

export function bfun() {
  console.log("aggregating the modules");
}
