//#Iterating over an Array
console.log('Iterating over an Array');
const iterable = [10, 20, 30];

// for (const value of iterable) {
//   console.log(value);
// }

// let instead of const
console.log('let instead of const');
const iterable2 = [10, 20, 30];

// for (let value of iterable2) {
//   value += 1;
//   console.log(value);
// }

// console.log(iterable2);


//#Iterating over a String
console.log('Iterating over a String');
const string = 'boo';

// for (const value of string) {
//   console.log(value);
// }


//#Iterating over a Map
console.log('Iterating over a Map');
const iterableMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

// for (const entry of iterableMap) {
//   console.log(entry);
// }

// for (const [key, value] of iterableMap) {
//   console.log(value);
// }


//#Iterating over a Set
console.log('Iterating over a Set');
const iterableSet = new Set([1, 1, 2, 2, 3, 3]);

// for (const value of iterableSet) {
//   console.log(value);
// }


//#Closing iterators
console.log('Closing iterators');
function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

// for (const o of foo()) {
//   console.log(o);
//   break; // closes iterator, execution continues outside of the loop
// }
// console.log('done');


//#Iterating over generators
console.log('Iterating over generators');
// function* fibonacci() { // a generator function
//     let [prev, curr] = [0, 1];
//     while (true) {
//         [prev, curr] = [curr, prev + curr];
//         yield curr;
//     }
// }

// for (const n of fibonacci()) {
//     console.log(n);
//     // truncate the sequence at 1000
//     if (n >= 1000) {
//         break;
//     }
// }
