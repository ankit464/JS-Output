let obj = {
  name: "ankit gandotra",
  age: 21,
  country: {
    state: "j&k",
    nation: "India",
    getCountry() {
      return `${this.state},${this.nation}`;
    },
  },
  getinfo() {
    return `${this.name},${this.age},${this.country.getCountry()}`;
  },
};
console.log(obj.name);
console.log(obj.age);
console.log(obj.country.nation);
console.log(obj.country.getCountry());
console.log(obj.getinfo());
