# Conditional Code Execution

*[Example](/task/example/example.md)

## Prerequisites:

- Booleans, Boolean algebra
- Strings: length

## Recap of prerequisites
### Booleans
In computer science, a Boolean is a logical data type that can have only the values true or false. For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops).

Examples of conditions:

- Is the numeric value of variable ==A== greater than the numeric value of variable ==B==?
- Is the length of string ==A== equal to the length of string ==B==?
- Is the date greater than yesterday's date or any given date?
- Did something happen in previous code execution?
- Did we iterate the desired amount of times over a code block?

---

## Operators

Operators we might use in a conditional expression are:

| Operator | Description |
| -------- | ----------- |
| Equal (==) | Returns true if the operands are equal. |
| Not equal (!=) | Returns true if the operands are not equal. |
| Strict equal (===) | Returns true if the operands are equal and of the same type. |
| Strict not equal (!==) | Returns true if the operands are of the same type but not equal, or are of different type. |
| Greater than (>) | Returns true if the left operand is greater than the right operand. |
| Greater than or equal (>=) | Returns true if the left operand is greater than or equal to the right operand. |
| Less than (<)	| Returns true if the left operand is less than the right operand. |
| Less than or equal (<=) | Returns true if the left operand is less than or equal to the right operand. |

***Note: => is not an operator, but the notation for Arrow functions.***

## Truthy and Falsy

n JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN)

---

## If statements

The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

***Syntax***

```js
if (condition) {
   statement1
} else {
   statement2
}
```

Multiple if...else statements can be nested to create an else if clause. Note that there is no elseif (in one word) keyword in JavaScript.

```js
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
```

***Real life examples***

```js
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

```js
const shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

```js
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
  }
}
```

---

## Logical operators

If you want to test multiple conditions without writing nested if...else statements, logical operators can help you. When used in conditions, the first two do the following:

- ==&&== — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
- ==||== — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

***Boolean algebra***
In mathematics and mathematical logic, Boolean algebra is the branch of algebra in which the values of the variables are the truth values true and false, usually denoted 1 and 0, respectively.
*[Boolean algebra Simplifier](https://www.boolean-algebra.com/)

***Grouping and short-circuiting***
*[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)

---

## Switch

A switch statement is similar to IF and is of use when you need to execute one code out of the multiple code block execution possibilities, based on the result of the expression passed. Switch statements carry an expression, which is compared with values of the following cases and once a match is found, code associated with that case executes.

***Syntax***

```js
switch (expression) {
  case a:
    //code block to be executed
    break;
  case b:
    //code block to be executed
    break;
  case n:
    //code block to be executed
    break;
  default:
    //default code to be executed if none of the above case is executed
}
```

***Real life examples***

*[Keyboard event](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
```js
function onKeyUp(event) {
  switch(event.code) {
    case "KeyS":
    case "ArrowDown":
      goBack();
      break;
    case "KeyW":
    case "ArrowUp":
      goForward();
      break;
    case "KeyA":
    case "ArrowLeft":
      goLeft();
      break;
    case "KeyD":
    case "ArrowRight":
      goRight();
      break;
  }
}
```

```js
function onKeyUp(event) {
  const code = event.code;

  if (code === "KeyS" || code === "ArrowDown") {
    goBack();
  } else if (code === "KeyW" || code === "ArrowUp") {
    goForward();
  } else if (code === "KeyA" || code === "ArrowLeft") {
    goLeft();
  } else if (code === "KeyD" || code === "ArrowRight") {
    goRight();
  }
}
```