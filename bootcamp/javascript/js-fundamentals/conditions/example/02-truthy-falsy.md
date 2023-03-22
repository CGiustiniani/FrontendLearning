## Truthy
```js
console.log(true);
console.log(!! []);
console.log(!! {});
console.log(!! 42);
console.log(!! "0");
console.log(!! "false");
console.log(!! new Date());
console.log(!! -42);
console.log(!! 12n);
console.log(!! 3.14);
console.log(!! -3.14);
console.log(!! Infinity);
console.log(!! -Infinity);
```

## Falsy
```js
console.log(false);
console.log(!! null);
console.log(!! undefined);
console.log(!! 0);
console.log(!! -0);
console.log(!! 0n);
console.log(!! NaN);
console.log(!! "");
```