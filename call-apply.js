const kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense, boksis, tax) {
    this.money = this.money - expense - boksis - tax;
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

//call
// bind এর পরিবর্তে call ব্যবহার করে এক অবজেক্ট থেকে অন্য অবজেক্টের ফাংশন বা মেথড ব্যবহার করা যায় সহজেই। এক্ষেত্রে call এর ভিতরে প্রথমে অবজেক্টের নাম তারপর কমা দিয়ে সেই মেথডে যতটি প্যারামিটার দেয়া আছে সে অনুযায়ী কমা দিয়ে দিয়ে মান লিখতে হবে -

kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);

// call এর কাছাকাছি apply. শুধু প্যারামিটারগুলো [] এর ভিতরে লিখতে হবে array আকারে লিখতে হবে।
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

kibria.treatDey.apply(normalGolam, [700, 100, 70]);

//Interview
// Difference between bind, call and apply ?
// এরা অন্য একটি অবজেক্ট থেকে মেথড ব্যবহার করে। যা bind, call and apply ফাংশন আকারে লিখতে হবে।
