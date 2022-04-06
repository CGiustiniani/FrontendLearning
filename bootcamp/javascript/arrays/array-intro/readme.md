# Array

The JavaScript `Array` class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them.

## Common operations

**Create an Array**

```javascript
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

**Access an Array item using the index position**

```javascript
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

**Add an item to the end of an Array**
```javascript
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

**Remove an item from the end of an Array**

```javascript
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

**Remove an item from the beginning of an Array**

```javascript
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

**Add an item to the beginning of an Array**

```javascript
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

**Find the index of an item in the Array**

```javascript
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```
# Array Methods

## concat()

The method arr.concat creates a new array that includes values from other arrays and additional items.
It accepts any number of arguments – either arrays or values.

The result is a new array containing items from arr, then arg1, arg2 etc.
The syntax is:

```javascript
arr.concat(arg1, arg2, etc)
```
```javascript
//Example
let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
```

## every(), some()

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

```javascript
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```javascript
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

## filter()

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
});
```
```javascript
//Example
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);

alert(someUsers.length); // 2
```



## find()

The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
```javascript
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
});
```
```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

## findIndex()

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
```

## forEach()

The forEach() method executes a provided function once for each array element.
It is usually used to iterate over elements.
```javascript
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## map()

The arr.map() method is one of the most useful and often used.
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
});
```
```javascript
//Example 1
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
```
```javascript
//Example 2
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

## reduce() and reduceRight()

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```javascript
let value = arr.reduce(function(accumulator, item, index, array) {
    //...
}, [initial]);
```
```javascript
//Example 1
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
```
```javascript
//Example 2
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10
```
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
```javascript
const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
```

## slice()

The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
```javascript
arr.slice([start], [end])
```
```javascript
//Example 1
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
```
```javascript
//Example 2
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## sort()

The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
```javascript
//Example 1
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```
```javascript
//Example 2
let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2
```
```javascript
//Example 3
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);  // 1, 2, 15
```


## splice()

The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, use slice().
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

## Cheat Sheet/Summary

**A cheat sheet of array methods:**

To add/remove elements:

`push(...items)` – adds items to the end.

`pop()` – extracts an item from the end.

`shift()` – extracts an item from the beginning.

`unshift(...items)` – adds items to the beginning.

`splice(pos, deleteCount, ...items)` – at index pos deletes deleteCount elements and inserts items.

`slice(start, end)` – creates a new array, copies elements from index start till end (not inclusive) into it.

`concat(...items)` – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

### To search among elements:

`indexOf/lastIndexOf(item, pos)` – look for item starting from position pos, return the index or -1 if not found.

`includes(value)` – returns true if the array has value, otherwise false.

`find/filter(func)` – filter elements through the function, return first/all values that make it return true.

`findIndex()` is like find, but returns the index instead of a value.
To iterate over elements:

`forEach(func)` – calls func for every element, does not return anything.

### To transform the array:

`map(func)` – creates a new array from results of calling func for every element.

`sort(func)` – sorts the array in-place, then returns it.

`reverse()` – reverses the array in-place, then returns it.

`split/join` – convert a string to array and back.

`reduce/reduceRight(func, initial)` – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
