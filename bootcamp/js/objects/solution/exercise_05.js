//Create a dice rolling app.

//Steps:

//1. Create in html one div where you will print the result and one button which will trigger the dice toss
//2. Create an Dice objects with has a numberOfSides property
//3. create a method "roll" on the Dice object(prototype)
//4. create a function for printing the number

//Write your solution below
function Dice(sides) {
    this.sides = sides;
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var dice = new Dice(6);

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number
}

var button = document.getElementById('button');
var square = document.querySelector('square');

button.onclick = function () {
    var result = dice.roll();
    printNumber(result);
};