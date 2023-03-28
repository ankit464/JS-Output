import { default as yahoo } from "./library.js";
import { bfun } from "./bridge.js";
//import yahoo from "./library.js"
yahoo();
import { message, user, user1, test } from "./library.js";
//import * as yahoo from "./library.js";
console.log(message);
//console.log(yahoo.essage);

document.body.innerHTML = message;
user();
user1("ankit gandotra ");
console.log(user1("function returning value "));

let a = new test();
bfun();
