let names = {
  firstname: "Ankit",
  lastName: "Gandotra",
  //   printFullName: function () {
  //     console.log(this.firstname + " " + this.lastName);
  //   },
};
let printFullName = function (hometown, state) {
  console.log(
    this.firstname +
      " " +
      this.lastName +
      ": hometown is " +
      hometown +
      " state is " +
      state
  );
};
printFullName.call(names, "delhi", "delhi");

let name2 = {
  firstname: "rajan",
  lastName: "kumar",
  //by call method we can do function barrowing means we can take the function from other object and use them within other object
};
printFullName.call(name2, "bombay", "maharastra");
//difference between the call and apply is that call takes diff no of arguments individually and apply takes all arguments as array list
printFullName.apply(name2, ["mumbai", "Maharastra"]);
// //bind method is same as the call method but only differnce is that
// instead of calling  this method bind method bind this method to the
// object and return the copy of thatv METHOD
//bind is used to make the copy of the method and use it later.
//where  as call directly call the method

let printmyname = printFullName.bind(name2, "mumbai", "maharastra");
console.log(printmyname);
printmyname();
