# Console

The console object provides access to the browser's debugging console.

The most frequently-used feature of the console is logging of text and other data. There are four categories of output you can generate, using the `console.log()`, `console.info()`, `console.warn()`, and `console.error()` methods respectively. Each of these results in output styled differently in the log.

```javascript
let text = 'Hello World';
console.log(text);
console.info(text);
console.warn(text);
console.error(text);
```

**Outputting multiple objects**

You can also output multiple objects by listing them when calling the logging method.

```javascript
let car = "Dodge Charger";
let someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);
```

**Using string substitutions**

When passing a string to one of the console object's methods that accepts a string (such as `log()`).

- `%o` or `%O`
    - Outputs a JavaScript object. Clicking the object name opens more information about it in the inspector.
- `%d` or `%i`
    - Outputs an integer.
- `%s`
    - Outputs a string.
- `%f`
    - Outputs a floating-point value.

```javascript
let times = 4;
console.log("Hello, %s. You've called me %d times.", "John", times);
```

**Using groups in the console**
You can use nested groups to help organize your output by visually combining related material. To create a new nested block, call `console.group()`.<br/>
To exit the current group, call `console.groupEnd()`.

```javascript
console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");
```

**Timers**

You can start a timer to calculate the duration of a specific operation. To start one, call the `console.time()` method, giving it a name as the only parameter. To stop the timer, and to get the elapsed time in milliseconds, just call the `console.timeEnd()` method, again passing the timer's name as the parameter.

```javascript
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

### Exercise
1. [Console](task/console.md)

# Var, let and const

## Scope

The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

## Closure

A function serves as a closure in JavaScript, and thus creates a scope, so that (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions.

## var

Before the advent of ES6, `var` declarations ruled. There are issues associated with variables declared with `var`, though. That is why it was necessary for new ways to declare variables to emerge.

### Scope of var

`var` declarations are globally scoped or function/locally scoped.<br/>
The scope is global when a `var` variable is declared outside a function. This means that any variable that is declared with `var` outside a function block is available for use in the whole window.

`var` is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

```javascript
var saySomething = "hello world";
    
function helloFunction() {
    var hey = "hey";
}
console.log(hey); // error: hey is not defined
```

**var variables can be re-declared and updated**

This means that we can do this within the same scope and won't get an error.

```javascript
var greeter = "hey hi";
var greeter = "say Hello instead";
```

```javascript
var greeter = "hey hi";
greeter = "say Hello instead";
```

### Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

```javascript
console.log(greeter);
var greeter = "say hello"
```

it is interpreted as this:

```javascript
var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"
```

So `var` variables are hoisted to the top of their scope and initialized with a value of `undefined`.

## Let

**let is block scoped**

A block is a chunk of code bounded by `{}`. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with `let`  is only available for use within that block.

```javascript
if (true) {
    let hello = "say Hello instead"; 
}

console.log(hello) // hello is not defined
```

**let can be updated but not re-declared.**

Just like `var`,  a variable declared with `let` can be updated within its scope. Unlike `var`, a `let` variable cannot be re-declared within its scope.

```javascript
let hello = 'say hi';

if (true) {
    let hello = "say Hello instead"; 
}

console.log(hello) // "say hi"
```

## Const

Variables declared with the `const` maintain constant values. `const` declarations share some similarities with `let` declarations.

**const cannot be updated or re-declared**

This means that the value of a variable declared with `const` remains the same within its scope. It cannot be updated or re-declared.

This behavior is somehow different when it comes to objects declared with `const`. While a `const` object cannot be updated, the properties of this objects can be updated.

```javascript
const greeting = {
    message: "say Hi",
    times: 4
}
```
we cannot do this:
```javascript
greeting = {
    words: "Hello",
    number: "five"
} // error:  Assignment to constant variable.
```
we can do this:
```javascript
greeting.message = "say Hello instead";
```

### Hoisting of let and const
`let` and `const` declarations are hoisted to the top but are not initialized.

## Summary

- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while `var` variables are initialized with `undefined`, `let` and `const` variables are not initialized.
- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

### Exercises
1. [Var, let and const](task/var-let-const.js)
