# Data types and data structures

JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
```javascript
let ecx = 10;    // ecx is now a number
ecx     = 'io';  // ecx is now a string
ecx     = true;  // ecx is now a boolean
```

## Data and Structure types

Six **Data Types** that are primitives, checked by typeof operator:
- undefined : `typeof instance === "undefined"`
- Boolean : `typeof instance === "boolean"`
- Number : `typeof instance === "number"`
- String : `typeof instance === "string"`
- BigInt : `typeof instance === "bigint"`
- Symbol : `typeof instance === "symbol"`

**Structural Types**:
- Object : `typeof instance === "object"`. Special non-data but Structural type for any constructed object instance also used as data structures: `new Object`, `new Array`, `new Map`, `new Set`, `new WeakMap`, `new WeakSet`, `new Date` and almost everything made with new keyword;
- Function : a non-data structure, though it also answers for `typeof` operator: `typeof instance === "function"`. This is merely a special shorthand for Functions, though every Function constructor is derived from Object constructor.

**Structural Root Primitive**:
- null : `typeof instance === "object"`. Special primitive type having additional usage for its value: if object is not inherited, then `null` is shown;

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

### Data type conversion

JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

```javascript
let answer = 42;
```

You could assign the same variable a string value

```javascript
answer = 'Thanks for all the fish...';
```

### Numbers and the '+' operator

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.

```javascript
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
```

## Array

The JavaScript `Array` class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on how the programmer chooses to use them.

### Create and array

```javascript
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

### Access an Array item using the index position

```javascript
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

## Object

The `Object` class represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the `Object()` constructor or the object initializer / literal syntax.

### Object initializer

Objects can be initialized using `new Object()`, `Object.create()`, or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

```javascript
const object1 = { a: 'foo', b: 42, c: {} };

console.log(object1.a);
// expected output: "foo"

const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };

console.log(object2.b);
// expected output: 42

const object3 = { a, b, c };

console.log(object3.a);
// expected output: "foo"
```

## Map

The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

### Objects vs. Maps

`Object` is similar to `Map`—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. For this reason (and because there were no built-in alternatives), `Object` has been used as `Map` historically.

<table>
<thead>
<tr>
<th></th>
<th>Map</th>
<th>Object</th>
</tr>
</thead>
<tbody>
<tr>
<td>Accidental Keys</td>
<td>A Map does not contain any keys by default. It only contains what is explicitly put into it.</td>
<td>An Object has a prototype, so it contains default keys that could collide with your own keys if you're not careful.

**Note**: As of ES5, this can be bypassed by using Object.create(null), but this is seldom done.
</td>
</tr>
<tr>
<td>Key Types</td>
<td>A Map's keys can be any value (including functions, objects, or any primitive).</td>
<td>The keys of an Object must be either a String or a Symbol.</td>
</tr>
<tr>
<td>Key Order</td>
<td>The keys in Map are ordered in a simple, straightforward way: A Map object iterates entries, keys, and values in the order of entry insertion.</td>
<td>Although the keys of an ordinary Object are ordered now, this was not always the case, and the order is complex. As a result, it's best not to rely on property order.</td>
</tr>
<tr>
<td>Size</td>
<td>The number of items in a Map is easily retrieved from its size property.</td>
<td>The number of items in an Object must be determined manually.</td>
</tr>
<tr>
<td>Iteration</td>
<td>A Map is an iterable, so it can be directly iterated.</td>
<td>Object does not implement an iteration protocol, and so objects are not directly iterable using the JavaScript for...of statement (by default).

**Note:**
An object can implement the iteration protocol, or you can get an iterable for an object using Object.keys or Object.entries.
The for...in statement allows you to iterate over the enumerable properties of an object.
</td>
</tr>
<tr>
<td>Performance</td>
<td>Performs better in scenarios involving frequent additions and removals of key-value pairs.</td>
<td>Not optimized for frequent additions and removals of key-value pairs.</td>
</tr>
<tr>
<td>Serialization and parsing</td>
<td>No native support for serialization or parsing.</td>
<td>Native support for serialization from Object to JSON, using JSON.stringify().

Native support for parsing from JSON to Object, using JSON.parse().</td>
</tr>
</tbody>
</table>

### Setting properties

The correct usage for storing data in the Map is through the set(key, value) method.

```javascript
let contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```

## Set

The `Set` object lets you store unique values of any type, whether primitive values or object references.

`Set` objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the `Set` may only occur once; it is unique in the `Set`'s collection.

```javascript
const mySet1 = new Set()

mySet1.add(1)           // Set [ 1 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add(5)           // Set [ 1, 5 ]
mySet1.add('some text') // Set [ 1, 5, 'some text' ]
const o = {a: 1, b: 2}
mySet1.add(o)

mySet1.add({a: 1, b: 2})   // o is referencing a different object, so this is okay

mySet1.has(1)              // true
mySet1.has(3)              // false, since 3 has not been added to the set
mySet1.has(5)              // true
mySet1.has(Math.sqrt(25))  // true
mySet1.has('Some Text'.toLowerCase()) // true
mySet1.has(o)       // true

mySet1.size         // 5

mySet1.delete(5)    // removes 5 from the set
mySet1.has(5)       // false, 5 has been removed

mySet1.size         // 4, since we just removed one value

console.log(mySet1)
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item)
```

**Remove duplicate elements from the array**
```javascript
// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log(new Set(numbers));

// Set(7) {2, 3, 4, 5, 6, 7, 32}
```

### Exercises
1. [Data types](task/01-data-type.md)
