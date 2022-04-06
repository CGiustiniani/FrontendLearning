//sort
console.info("sort() #1 solution");
const sortByName = (a, b) => a.name.localeCompare(b.name);
const sortByName2 = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
console.log(
  [
    { name: "Zagreb", postalCode: 10000, type: 1 },
    { name: "Varazdin", postalCode: 42000, type: 2 },
    { name: "Split", postalCode: 21000, type: 2 },
    { name: "Rijeka", postalCode: 51000, type: 3 },
    { name: "Osijek", postalCode: 31000 },
    { name: "Zadar", postalCode: 23000 },
  ].sort(sortByName)
);
console.log(
  [
    { name: "Zagreb", postalCode: 10000, type: 1 },
    { name: "Varazdin", postalCode: 42000, type: 2 },
    { name: "Split", postalCode: 21000, type: 2 },
    { name: "Rijeka", postalCode: 51000, type: 3 },
    { name: "Osijek", postalCode: 31000 },
    { name: "Zadar", postalCode: 23000 },
  ].sort(sortByName2)
);
console.info("sort() #2 solution");

const sortByPostalCode = (a, b) => b.postalCode - a.postalCode;
console.log(
  [
    { name: "Zagreb", postalCode: 10000, type: 1 },
    { name: "Varazdin", postalCode: 42000, type: 2 },
    { name: "Split", postalCode: 21000, type: 2 },
    { name: "Rijeka", postalCode: 51000, type: 3 },
    { name: "Osijek", postalCode: 31000 },
    { name: "Zadar", postalCode: 23000 },
  ].sort(sortByPostalCode)
);

console.info("sort() #3 solution");
const sortByTypeAndName = (a, b) =>
  (a.type || 999999) - (b.type || 999999) || a.name.localeCompare(b.name);

console.log(
  [
    { name: "Zagreb", postalCode: 10000, type: 1 },
    { name: "Varazdin", postalCode: 42000, type: 2 },
    { name: "Split", postalCode: 21000, type: 2 },
    { name: "Rijeka", postalCode: 51000, type: 3 },
    { name: "Osijek", postalCode: 31000 },
    { name: "Zadar", postalCode: 23000 },
  ].sort(sortByTypeAndName)
);

//splice

let fruits = ["apple", "cherry", "mango", "blueberry"];
fruits.splice(1, 0, "banana", "orange");
console.log(fruits);

console.info("splice() #2 solution");

let fruits2 = ["apple", "banana", "orange", "cherry", "mango", "blueberry"];
fruits2.splice(0, 2, "avocado");
console.log(fruits2);
