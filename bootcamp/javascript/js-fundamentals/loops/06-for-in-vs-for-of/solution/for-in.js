Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
    console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
    if (iterable.hasOwnProperty(i)) {
        console.log(i); // logs "0", "1", "2", "foo"
    }
}

for (const i of iterable) {
    console.log(i); // logs 3, 5, 7
}