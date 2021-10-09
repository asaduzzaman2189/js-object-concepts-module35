const student = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  major: "mathematics",
  isRich: false,
  subjects: ["english", "economics", "math 101", "calculus"],
  bestFriend: {
    name: "kundu",
    major: "mathematics",
  },
  takeExam: function () {
    console.log(this.name, "taking exam");
  }, // এখানে ফাংশনকে মেথড বলে যা একটি প্রোপার্টির ভিতরে আছে তাই(যা অবজেক্টের ভিতরে থাকে)। এখানে ফাংশনের ভিতরে উপরের কোন ডেটা ব্যবহার করতে চাইলে this.property_name দিতে হবে।
  treatDey: function (expense, boksis) {
    this.money = this.money - expense - boksis;
    return this.money;
  },
};

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);
