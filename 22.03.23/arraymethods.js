const nos = [1, 2, 3, 4, 5];
console.log(nos.toString()); // comma seperated string

//join method
console.log(nos.join("*"));
//pop method
console.log(nos.pop());
//push methdod
nos.push(6);
console.log(nos);
//shift method  this will remove ist array element and shift others to the right by one pos
nos.shift();
console.log(nos);
//unshift method add element to the beg. and shift all others
nos.unshift(4);
console.log(nos);
//array length
console.log(nos.length);

//merging arrays
const a = [1, 2, 3, 4];
const b = [4, 3, 2, 1];
console.log(a.concat(b));

//splicing and slicing

nos.splice(2, 0, 8, 8); //ist argument defines where the element to be pushed and second argument defines how many arguments to be removed

nos.splice(0, 1); //this trick will remove ist array element

console.log(nos.slice(1, 3)); //3 not included
