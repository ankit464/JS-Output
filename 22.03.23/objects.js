const person = {
  firstname: "Ankit",
  lastname: "gandotra",
  age: 24,
  roll_no: 12,
  fullname: function () {
    return this.firstname + this.lastname;
  },
};
const rollno = person.roll_no;
console.log(rollno);
console.log(person.fullname());
