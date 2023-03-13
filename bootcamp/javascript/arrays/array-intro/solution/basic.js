console.info("concat() solution");
console.log([1, [2, 3]].concat(["1", 5, false]));
console.info("every() solution");
const evenGreater = (val) => val % 2 === 0 && val > 20;
console.log([2, 50, 40, 6, 10, 20].every(evenGreater));
console.log([22, 40, 100, 98, 30].every(evenGreater));
