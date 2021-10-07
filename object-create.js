// object বিভিন্নভাবে তৈরি করা যায়-

//1. using object literal
const student = { name: "Sakib Al Hasan", job: "cricketer" }; // এইভাবেই অবজেক্ট ডিক্লেয়ার করব

//2. Constructor
const person = new Object();
// console.log(person);// empty object দিবে।

//3.
// const human = Object.create(null); //null অথবা কিছু না কিছু দিতে হবে, ফাঁকা রাখা যাবে না। এখানে ইনহেরিট করে যা student অবজেক্ট থেকে।
const human = Object.create(student);
// console.log(human.job); // output- cricketer

//4. class
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const peop = new People("Manush", 12);
// console.log(peop);

//5. function
function Manus(name) {
  this.name = name;
}
const man = new Manus("Abdul Kader");
console.log(man);
