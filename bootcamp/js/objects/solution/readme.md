### Exercise – 01
`````javascript
    function Person(ime, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.fullName = function () {
        return this.name + " " + this.surname;
    }

    function start()
    {
        let p = new Person();
        p.name = prompt("Enter person name:", "");
        p.surname = prompt("Enter person surname:", "");
        alert("Entered person: " + p.fullName());
    }

    start();
`````

### Exercise - 02
````javascript
let arrayOfCars = [];

function Car() {
    this.manufacturer = "";
    this.model = "";
    this.horsepower = 0;
}

Car.prototype.prepareForPrint = function () {
    return this.manufacturer + " " + this.model + " [" + this.horsepower + "]";
}

do {
    arrayOfCars.push(createCar());
} while (confirm("Add another?"));

print();

function createCar() {
    let car = new Car();
    car.manufacturer = prompt("Manufacturer:", "");
    car.model = prompt("Model: ", "");
    car.horsepower = Number(prompt("Horsepower: ", ""));
    return car;
}

function print() {
    for (let i = 0; i < arrayOfCars.length; i++) {
        console.log(arrayOfCars[i].prepareForPrint());
    }
}
````

### Exercise - 03

````javascript
let people = [];

function Person() {
    this.name = "";
    this.surname = "";
    this.age = 0;
}

Person.prototype.isAdult = function () {
    return (this.age >= 18) ? true : false;
}

Person.prototype.prepareForPrint = function () {
    return this.name + " " + this.surname + " [" + this.age + "]";
}

do {
    people.push(createPerson());
} while (confirm("Enter another person"));

print();

function createPerson() {
    var person = new Person();
    person.name = prompt("Name:", "");
    person.surname = prompt("Surname: ", "");
    person.age = Number(prompt("Age: ", ""));
    return person;
}

function print() {
    for (var i = 0; i < people.length; i++) {
        if (people[i].isAdult())
            console.log(people[i].prepareForPrint());
    }
}
````

### Exercise 04
````javascript
function Cylinder(cylHeight, cylRadius) {
    this.cylHeight = cylHeight;
    this.cylRadius = cylRadius;
}

Cylinder.prototype.Volume = function () {
    return this.cylHeight * Math.PI * this.cylRadius * this.cylRadius;
};

let cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(2));
````

### Exercise 05
````javascript
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

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};
````

````html
<div id ='placeholder'> </div>
<button id = 'button'>random </button>
````