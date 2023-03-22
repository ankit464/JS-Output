function person(fname, lname, age, eye) {
  this.firstname = fname;
  this.lastname = lname;
  this.age = age;
  this.eyeColor = eye;
  this.fullname = function () {
    return this.firstname + " " + this.lastname;
  };
}
const mee = new person("ankit", "gandotra", 3, "brown");
console.log(mee.fullname());
