const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
};
/*
for(let i=0; i<10; i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/

// system1 using for in
// prop দিলে অবজেক্টের property name দেখাবে আবার অবজেক্টের নাম দিয়ে [] এর ভিতরে prop লিখলে property এর মান বা value দেখাবে।
for (const prop in bottle) {
  //   console.log(prop, bottle[prop]);
}
/* output
color yellow
hold water
price 50
isCleaned true
*/

// system2 using for of
const keys = Object.keys(bottle); // এখানে keys একটা array দিবে। আর এই array কে নিয়ে আমরা কাজ করব।
// console.log(keys);
/* output
[ 'color', 'hold', 'price', 'isCleaned' ]
*/
for (const prop of keys) {
  //   console.log(prop, bottle[prop]);
}
/* output
color yellow
hold water
price 50
isCleaned true
*/

// (Advanced) system3 using entries
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ["color", "yellow"];
for (const [key, value] of Object.entries(bottle)) {
  console.log(key, value);
}
/* output
color yellow
hold water
price 50
isCleaned true
*/

//in dile undefined dekhay keno?
// const arr = ["color", "jeans", "top"];
// arr["color"]; // for in শুধু একটি ভ্যালু দেয় তাই প্রথমটা 0 এবং দ্বিতীয়টা undefined দেখায়। শুধু একটি দেখায় জন্যে প্রথমটার ইনডেক্স দেখাচ্ছে আর এর মান undefined দেখাচ্ছে।
