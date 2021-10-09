// console.log(this);
const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDeyArrow: () => {
    console.log(this);
  },
  // arrow function নিজস্ব কোনো this এর value hold করতে পারে না। সে তার বাইরের যে আছে তাকে ধরে।
  treatDeyInside: function () {
    const myArrow = () => console.log(this);
    myArrow();
  },
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log("Here5555", this);
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};

function add() {
  console.log(this);
}
