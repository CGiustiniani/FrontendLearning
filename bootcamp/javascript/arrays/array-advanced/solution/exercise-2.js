let arrayDiff = (first, second) => {
  return first.filter((elem) => !second.includes(elem));
};
console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
