// # Data types
//
// 1. What's the value of `cat`?

let cat = { name: 'Garfield' };
cat.name = 'Bobi';
cat = 'Art';

console.log(cat)

// 2. Initialize object with following property-value pairs: `one: 1, two: 2, three: 3`
// Two solutions possible
const object1 = { one: 1, two: 2, three: 3 };
console.log(object1)

const object2 = new Object(); //or just simplify by putting const object2 = {};
object2.one = 1;
object2.two = 2;
object2.three = 3;

// 3. What is the output of the following code?
const ages = new Set();
ages.add(15);
ages.add(18);
ages.add(20);
ages.add(20);
ages.add(21);

console.log(ages)

