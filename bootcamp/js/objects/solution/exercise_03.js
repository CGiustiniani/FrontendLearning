//Task

//Make an app where the user enters data about people till he wants to. 
//A person is defined with her name, surname and age. 
//After the input ends, in the console the user can see all people that are older than 18 years

//Write you code below
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