//forEach

console.info("forEach() solution");
let newArray = [];

["zero", "one", "two", "three", "four", "five"].forEach((item, i) =>
  newArray.push(item + "_" + i)
);
console.log(newArray);

//map

console.info("map() solution");
console.log([2, 4, 5, 7, 9].map((number) => Math.pow(number, 3)));

//reduce

console.info("reduce() #1 solution");
console.log(
  [5, 4, 66, 12, 33, 45, 90].reduce((acc, value) => {
    if (value % 2 === 0) {
      return acc + value;
    }
    return acc;
  }, 0)
);
console.info("reduce() #2 solution");
console.log(
  [
    {
      name: "Junior",
      employees: ["John", "Doe", "Jane", "Doe"],
    },
    {
      name: "Senior",
      employees: ["Matija", "Daniel", "Mario", "Mateja"],
    },
  ].reduce((acc, value) => [...acc, ...value.employees], ["Silvio"])
);

//slice

console.info("slice() solution");
console.log(["one", "two", "three", "four", "five", "six"].slice(-2));
