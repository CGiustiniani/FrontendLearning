# Loops and iteration

Looping, for any programming language, is a powerful tool in order to execute a set of instructions, repeatedly, while the expression passed is satisfied. A very basic example can be, to print “Hello World” for 10 times.

=> image

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.

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

    1. The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
    2. The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. If the value of conditionExpression is false, the for loop terminates. (If the condition expression is omitted entirely, the conditionExpression is assumed to be true.)
    3. The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
    4. If present, the update expression incrementExpression is executed.
    5. Control returns to Step 2.
