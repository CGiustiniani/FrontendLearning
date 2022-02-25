# Object

JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

It is used to store various keyed collections and more complex entities. 

Objects can be initialized using `new Object()`, `Object.create()`, or using the literal notation (initializer notation). An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces `({}).

Objects can be created in two ways:
Using object initializers

- Using object initializers is sometimes referred to as creating objects with literal notation 
- Objects made from object literal expressions are instances of Object 
- Identical object initializers create distinct objects that will not compare to each other as equal 

````javascript
let person = {
    name: 'Luka',
    surname: 'Modrić',
    year: 1985,
    address: {
        street: 'Ilica',
        city: 'Zagreb'
    },
    getYears: function() {
      return this.year;  
    }
}
````

Using a constructor function
- To define an object type, create a function
for the object type that specifies its name,
properties, and methods
- Notice the use of this to assign values to
the object's properties based on the values
passed to the function
- The construct function is called by the new
operator

````javascript
function Person(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
}

var person = new person('Luka', 'Modrić', 1985);
````

Using object factory function

````javascript
function createPerson(name, surname, year) {
    this.name = name,
    this.surname = surname,
    this.year = year
}

var person = createPerson('Luka', 'Modrić', 1985);
````

A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.

````javascript
function person(firstName, lastName, age) {
  const person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}
````

If you look at the above code inside the function, it creates a new object and attached passed arguments to that object as properties to that and return the new object. That is a simple factory function in JavaScript.

###Example of factory function use case

The following code creates a pet object named dog:

````javascript
let dog = {
    name: 'Goofy',
    breed: 'Pekingese',
    age: 12,
    getFullData() {
        return this.name + ' is a' + this.breed + ' and he is' + this.age;
    }
};

console.log(dog.getFullData());
````

The following code creates a pet object named cat:
````javascript
let cat = {
    name: 'Marie',
    breed: 'Angora',
    age: 9,
    getFullData() {
        return this.name + ' is a' + this.breed + ' and he/she is' + this.age;
    }
};

console.log(cat.getFullData());
````

The cat object has the same properties and method as the dog object. 

The more objects you wanto to create, the more code duplicate you are going to generate.

To avoid the duplication, you can develop a function that creates the animal object.

````javascript
function animal(name, breed, kind, age) {
    return {
        name: name,
        breed: breed,
        kind: kind,
        age: age,
        getFullData() {
            return this.name + ' is a' + this.kind + ' (' + this.breed + ') and he/she is' + this.age;
        }
    }
}
````

As opposed to the constructor functions they differ only from its use case and a convention. Other than that factory functions and constructor functions are similar.

The convention of defining a constructor function is to use capitalize function name to denote that this is a constructor function, the use case of this function is that creating similar types of objects with the new keyword, then later we can do instance checks using the instanceof keyword in JavaScript.

That is where we can clearly see the difference between factory and constructor functions. Following code shows how to define a constructor function. Will dig into more details soon.

Constructor Functions force callers to use the new keyword operator. Factories on the other side - don’t. 

````javascript
function Animal(name, breed, kind, age) {
  this.name = name;
  this.breed = breed;
  this.kind = kind;
  this.age = age;
}

const animal = new Animal('Dodo', 'doda-bird', 'bird', '125')
````

### Prototype
JavaScript is often described as a prototype-based language— to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.

````javascript
function Animal(name, breed, kind, age) {
  this.name = name;
  this.breed = breed;
  this.kind = kind;
  this.age = age;
}

const animal = new Animal('Snoopy', 'beagle', 'dog', '4')

// try to type animal. and see what appears
````

If you type animal into your JavaScript console, you should see the browser try to auto-complete this with the member names available on this object.

In this list, you will see the members defined on animal constructor — Animal() — name, breed, kind and age. You will however also see some other members —toString, valueOf, etc — these are defined on animal prototype object's prototype object, which is Object.prototype.

What happens if you call a method on animal, which is actually defined on Object.prototype? 

````javascript
animal.valueOf();
````

## What is really this?

One of the most confusing things in Javascript is this: this

The this keyword behaves differently in JavaScript compared to most of the other programming languages. 

In JavaScript the value of this not refer to the function in which it is used or it’s scope but is determined mostly by the invocation context of function (context.function()) and where it is called.

Let’s have a look in four main case examples

### Case 1: Defaut binding
The a variable was defined in the window context so the output of the someFunction() call will be 5 because this will refer to window context which it’s the default context.

````javascript
var a = 5;

function someFunction() {
    console.log(this) // Window
    console.log(this.a) // 5
}

someFunction();
````

### Case 2: Implicit binding
In this case, The object that is standing before the dot is what this keyword will be bound to.


````javascript
var obj = {
	a: 4,
	someFunction: function () {
	    console.log(this.a)
    }
};

obj.someFunction();  // 4 
````

### Case 3: Explicit binding

````javascript
function helloEarthling() {
	console.log(this.name);
}

var arg = 'unused dummy argument'

var person = {
	name: 'Marco'
}

helloEarthling.call(person, arg); // Marco
````

````javascript
function helloEarthling() {
	console.log(this.name);
}

var arg = 'unused dummy argument'

var person = {
	name: 'Marco'
}

helloEarthling.apply(person, [arg]); // Marco
````

````javascript
function helloEarthling() {
	console.log(this.name);
}

var person = {
	name: 'Marco'
}

var helloEarthlingCopy = helloEarthling.bind(person); // Marco

helloEarthlingCopy();
````

In this case, you can force a function call to use a particular object for this binding, without putting a property function reference on the object. so we explicitly say to a function what object it should use for this — using functions such as call, apply and bind

The apply function is similar to call with the difference that the function arguments are passed as an array.

The bind function creates a new function that will act as the original function but with this predefined.

### New Binding

````javascript
function Person() {        
    /*
       1- create a new object using the object literal 
       var this = {};
    */

    // 2- add properties and methods 
    this.name = 'Donald Duck';
    this.say = function () {
    return "I am " + this.name; 
    };
    
    // 3- return this;
}

var name = 'Ahmed';
var result = new Person();
console.log(result.name);  // Donald Duck
````

The function that is called with new operator when the code new Person(…) is executed, the following things happen:

1- An empty object is created and referenced by this variable, inheriting the prototype of the function.

2- Properties and methods are added to the object referenced by this.

3- The newly created object referenced by this is returned at the end 


## Enumeration of properties of an object

Enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Properties defined via Object.defineProperty and such default enumerable to false.
Enumerable properties show up in for...in loops unless the property's key is a Symbol. Ownership of properties is determined by whether the property belongs to the object directly and not to its prototype chain. Properties of an object can also be retrieved in total.

### for...in
This method traverses all enumerable properties of an object and its prototype chain.
A for...in loop only iterates over enumerable, non-Symbol properties. 
The loop will iterate over all enumerable properties of the object itself and those the object inherits from its prototype chain (properties of nearer prototypes take precedence over those of prototypes further away from the object in its prototype chain).


````javascript
let person = {
    name: 'Pete',
    surname: 'Sampras',
    borned: 1971
}

for (let key in person) {
    console.log(key, person[key]);
}

````

### Object.keys

This method returns an array with all the own (NOT in the prototype chain) enumerable property names (keys) of an object

Parameters
The object of which the enumerable's own properties are to be returned.

Return value
An array of strings that represent all the enumerable properties of the given object.


`````javascript
let person = {
    name: 'Roger',
    surname: 'Federer',
    borned: 1981
}

console.log(Object.keys(person))
`````

### Object.getOwnPropertyNames()
Object.getOwnPropertyNames() returns an array whose elements are strings corresponding to the enumerable and non-enumerable properties found directly in a given object obj. 
The ordering of the enumerable properties in the array is consistent with the ordering exposed by a for...in loop (or by Object.keys()) over the properties of the object. 
According to ES6, the integer keys of the object (both enumerable and non-enumerable) are added in ascending order to the array first, followed by the string keys in the order of insertion.

### Object.keys
````javascript
let person = {
  name: 'Donatello'
};

person.age = '57';

person['country'] = 'Croatia';

Object.defineProperty(person, 'salary',{
    value: '100,000 euro',
    enumerable: false
})

console.log(Object.keys(person));
````

### Object.getOwnPropertyNames()
````javascript
let person = {
  name: 'Donatello'
};

person.age = '57';

person['country'] = 'Croatia';

Object.defineProperty(person, 'salary',{
    value: '100,000 euro',
    enumerable: false
})

console.log(Object.getOwnPropertyNames(person));
````