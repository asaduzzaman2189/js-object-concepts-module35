const bottle = {
  color: "yellow",
  hold: "water",
  price: 50,
  isCleaned: true,
}; // এখানে color কে key বলে এবং এর মান "yellow" কে value বলে।

// 1. getting all properties names অর্থাৎ key এর name গুলো দেখাবে
const keys = Object.keys(bottle); // এভাবে করলে কোনো অবজেক্টের যতগুলো key আছে তা দেখাবে।
// console.log(keys); // [ 'color', 'hold', 'price', 'isCleaned' ]

// 2. getting all values অর্থাৎ key এর মানগুলো দেখাবে
const values = Object.values(bottle);
// console.log(values);//[ 'yellow', 'water', 50, true ]

// 3. অবজেক্টের key এবং value গুলোকে জোড়ায় জোড়ায় দেখতে entries ব্যবহার করা হয়। যেখানে একটি array এর ভিতরে আরেকটি array দেখাবে। অর্থাৎ two dimensional array...
const pairs = Object.entries(bottle);
// console.log(pairs);
/* output
[
  [ 'color', 'yellow' ],
  [ 'hold', 'water' ],
  [ 'price', 50 ],
  [ 'isCleaned', true ]
]
 */

// 4. object থেকে কোনো property বাদ দিতে চাইলে
delete bottle.isCleaned;
// console.log(bottle);
/*output
{ color: 'yellow', hold: 'water', price: 50 }
*/

//5. seal করে দিলে কোনো property কে delete করলেও delet হবেনা বা নতুন করে যোগ করলেও যোগ হবে না। কিন্তু value পরিবর্তন করা যাবে।
Object.seal(bottle);
bottle.price = 100;
bottle.height = 16; //এটা নতুন প্রোপার্টি তাই যোগ হবে না।
delete bottle.hold;
// console.log(bottle);
/*output
{ color: 'yellow', hold: 'water', price: 100 }
*/

// 6. seal এর কাছাকাছি আরেকটি জিনিস আছে তা হলো freeze. যা অবজেক্টের পরিবর্তন, মুছে ফেলা বা যোগ করা কোনোটাই যাবে না।

Object.freeze(bottle);
bottle.price = 600;
console.log(bottle);
/*output
{ color: 'yellow', hold: 'water', price: 100 }
*/
