//Task

// Make an app where the user enters data about cars as long as he wants.A car is defined be it’s manufacturer, 
//model and horsepower.Print the entered cars in the console in the format: manufacturer – model[horsepower]
// E.g.
// Volvo – xc40[122]

//Write your code below
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