const pen = {
  brand: "econo",
  price: 10,
  writePoem: function (food) {
    console.log(food); //এটাকে অবজেক্টের মেথড বলে।
  },
};
const keys = Object.keys(pen);
console.log(keys);

const values = Object.values(pen);
console.log(values);

for (const key in pen) {
  console.log(pen[key]);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;

if (a === b) {
}

//option
const aBounded = pen.writePoem.bind(a);
aBounded();

//this
/* 
1. arrow function এর নিজস্ব কোনো this হয় না। সে তার উপরের লেভেলের this টাকে নেয়। 
2. arrow function এবং normal function এর মধ্যে পার্থক্য হলো - 
arrow function এর নিজস্ব this হয় না, এক্ষেত্রে bind, call বা apply ব্যবহার করা হয়। 
3. this এর ক্ষেত্রে বাম পাশে কেউ থাকলে সেটি তার কনটেক্সট হবে আর বাম পাশে কেউ না থাকলে তার মান হবে না। 
4. কোনো একটি বাটনে যেটাতে ক্লিক করা হয় তবে event handler এর this হবে সেই element টা, কিন্তু event handler যদি ফাংশন হয় তবে সেই ফাংশনের ভিতরে this হলে তা কোন কনটেক্সটকে execute করা হয়েছে সেটাকে বুঝাবে।  
 */
