//Task

//Find the bug: you have in front of you a small application for getting the volume of a Cylinder.

//Modify the code below
function Cylinder(cylHeight, cylRadius) {
    this.cylHeight = cylHeight;
    this.cylRadius = cylRadius;
}

Cylinder.prototype.Volume = function () {
    return cylHeight * Math.PI * cylRadius * cylRadius;
};

let cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(2));