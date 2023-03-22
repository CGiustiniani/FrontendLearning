# Loops and iteration

Looping, for any programming language, is a powerful tool in order to execute a set of instructions, repeatedly, while the expression passed is satisfied. A very basic example can be, to print “Hello World” for 10 times.

![Hello world 10 times](https://raw.githubusercontent.com/CGiustiniani/FrontendLearning/feature/js-loops/bootcamp/javascript/js-fundamentals/loops/bs-hello-world.png)

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

---

## for

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

**Syntax**

```js
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement;
```

```js
for (let i = 0; i < 10; i++) {
  console.log("Hello world.");
}
```

When a for loop executes, the following occurs:

1. The initializing expression ``initialExpression``, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The ``conditionExpression`` expression is evaluated. If the value of ``conditionExpression`` is true, the loop statementsexecute. If the value of ``conditionExpression`` is false, the for loop terminates. (If the condition expression is omittedentirely, the ``conditionExpression`` is assumed to be true.)
3. The statement executes. To execute multiple statements, use a block statement ``({ ... })`` to group those statements.
4. If present, the update expression ``incrementExpression`` is executed.
5. Control returns to Step 2.
---

## do...while

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

**Syntax**

```js
do statement;
while (condition);
```

```js
let result = "";
let i = 0;

do {
  i++;
  result = result + i;
} while (i < 5);

console.log(result);
// "12345"
```

```js
let result = "";
let i = 5;

do {
  i++;
  result = result + i;
} while (i < 5);

console.log(result);
// "6"
```
---

## while

A while statement executes its statements as long as a specified condition evaluates to true.

**Syntax**

```js
while (condition) statement;
```

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

```js
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}
```
---

## break

Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

- When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and transfers control to the following statement.
- When you use break with a label, it terminates the specified labeled statement.

```js
break;
break [label];
```
---

## continue

The ``continue`` statement can be used to restart a ``while``, ``do-while``, ``for``, or ``label statement``.

- When you use continue without a label, it terminates the current iteration of the innermost enclosing while, do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, it jumps to the increment-expression.
- When you use continue with a label, it applies to the looping statement identified with that label.

**Syntax**

```js
continue [label];
```

```js
let i = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// 1, 2, 4, 5
```
---

## labeled

A label provides a statement with an identifier that lets you refer to it elsewhere in your program. For example, you can use a label to identify a loop, and then use the break or continue statements to indicate whether a program should interrupt the loop or continue its execution.

**Syntax**

```js
markLoop: 
while (theMark === true) {
  doSomething();
}
```
---

## for...in

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements.

**Syntax**

```js
for (variable in object) {
  statement;
}
```

```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// "a: 1"
// "b: 2"
// "c: 3"
```

Arrays Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.

Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).

---

## for...of

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

**Syntax**

```js
for (variable of iterable) {
  statement;
}
```

```js
const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

// "a"
// "b"
// "c"
```
---

## Difference between for...of and for...in

Both for...in and for...of statements iterate over something. The main difference between them is in what they iterate over.

The for...in statement iterates over the enumerable properties of an object, in an arbitrary order.

The for...of statement iterates over values that the iterable object defines to be iterated over.
