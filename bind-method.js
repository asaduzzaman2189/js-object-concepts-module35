const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log("Here5555", this); // এখানে this হচ্ছে treatDey নিজেই।
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};
const normalGolam = {
  id: 103,
  money: 8000,
  name: "Normal Golam",
};

kibria.treatDey(100);
//kibria এর মেথড বা ফাংশন অন্য অবজেক্টও ব্যবহার করতে পারবে। এক্ষেত্রে নিম্নোক্ত নিয়ম অনুযায়ী bind করতে হবে, এখানে heroBalam হচ্ছে অন্য আরেকটি অবজেক্ট যা bind এর ভিতরে লিখতে হবে-

const heroTreatDey = kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(400);

const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(1000);
