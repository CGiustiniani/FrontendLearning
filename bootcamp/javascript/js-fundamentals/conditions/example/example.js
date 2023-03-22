console.log('Operators-equal');
const a = 3;
const b = '3';
console.log(a == b);

console.log('Operators-not equal');
const c = 1;
const d = 2;
console.log(c != d);

const e = 3;
const f = 3;
console.log(e != f);

console.log('Operators - strict equal');
const g = 3;
const h = '3';
console.log(a === b);

const i = 3;
const j = 3;
console.log(i === j);

console.log('Operators - strict not equal');
const value = 3;
const value1 = 3;
console.log(value !== value1);

const value2 = 3;
const value3 = '3';
console.log(value2 !== value3);

console.log('Greater than (>)');
const value4 = 3;
const value5 = 1;
console.log(value4 > value5);

console.log('Greater than or equal (>=)');
const value6 = 2;
const value7 = 2;
console.log(value6 >= value7);

console.log('Less than (<)');
const value8 = 1;
const value9 = 2;
consolee.log(value8 < value9);

console.log('Less than or equal (<=)');
const value10 = 3;
const value11 = 1;
console.log(value10 <= value11);

console.log('Truthy');
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

console.log('Falsy');
console.log(false);
console.log(!! null);
console.log(!! undefined);
console.log(!! 0);
console.log(!! -0);
console.log(!! 0n);
console.log(!! NaN);
console.log(!! "");

console.log('Logical operators = AND');
const choice = 'sunny';
const temperature = 72;
if (choice === 'sunny' && temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.';
}

console.log('Logical operators - OR');
const iceCreamVanOutside = 'not on fire';
const houseStatus = 'on fire';
if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
}

console.log('Logical operators - NOT(NOR)');
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
} else {
    console.log('You should leave the house quickly.');
}