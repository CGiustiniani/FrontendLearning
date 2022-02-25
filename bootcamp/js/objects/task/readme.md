## Objects

### Exercise – 01
Build a object with a prototype function for generating a full name from the person. The user enters the users name and surname.


### Exercise - 02
Make an app where the user enters data about cars as long as he wants. A car is defined be it’s manufacturer, model and horsepower. Print the entered cars in the console in the format: 
manufacturer – model [horsepower]

E.g.

Volvo – xc40 [122]

### Exercise - 03
Make an app where the user enters data about people till he wants to.
A person is defined with her name, surname and age. After the input ends, in the console the user can see all people that are older than 18 years

### Exercise - 04
Find the bug: you have in front of you a small application for getting the volume of a Cylinder.

`````javascript
function Cylinder(cylHeight, cylRadius) {
    this.cylHeight = cylHeight;
    this.cylRadius = cylRadius;
}

Cylinder.prototype.Volume = function () {
    return cylHeight * Math.PI * cylRadius * cylRadius;
};

let cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(2));
`````

### Exercise - 05
Create a dice rolling app. 

Steps:
- Create in html one div where you will print the result and one button which will trigger the dice toss
- Create an Dice objects with has a numberOfSides property
- create a method "roll" on the Dice object (prototype) 
- create a function for printing the number