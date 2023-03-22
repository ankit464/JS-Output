const persons = [
  { firstname: "ankit", lastname: "gandotra" },

  { firstname: "aa", lastname: "gu" },
];

console.log(persons.map(getFullName));
function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}
