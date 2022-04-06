//filter

console.info("filter() solution");
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const isPrime = (val) => {
  for (let i = 2; val > i; i++) {
    if (val % i == 0) {
      return false;
    }
  }
  return val > 1;
};

const myPrimeArray = array.filter((element) => isPrime(element));
console.log(myPrimeArray);

//find

console.info("find() solution");
const things = [
  { name: "wood", quantity: 20 },
  { name: "paper", quantity: 40 },
  { name: "plastic", quantity: 5 },
];
const found = things.find(({ name }) => name === "wood");
console.log(found);

//findIndex

console.info("findIndex() solution");
console.log(
  ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"].findIndex(
    (name) => name === "blueberries"
  )
);
