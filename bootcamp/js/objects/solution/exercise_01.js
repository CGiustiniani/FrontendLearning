//Task

//Build a object with a prototype function for generating a full name from the person. The user enters the users name and surname.

//Write your code below
function Person(ime, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
}

function start() {
    let p = new Person();
    p.name = prompt("Enter person name:", "");
    p.surname = prompt("Enter person surname:", "");
    alert("Entered person: " + p.fullName());
}

start();