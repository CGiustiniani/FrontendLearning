# Async/await

## Async
We put the async keyword in front of a function declaration to turn it into an `async` function. An async function expects the possibility of the `await` keyword being used within it to invoke a block of asynchronous code.

We see here a usual function:

`````javascript
function helloBootcampers() { 
    return "Hello Bootcampers!";
};

helloBootcampers();
`````

It will return `Hello Bootcampers!`

We put the `async` keyword in front of a function declaration to turn it into an async function:

````javascript
async function helloBootcampers() { 
    return "Hello Bootcampers!";
};

helloBootcampers();
````

Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.

![Async example](https://raw.githubusercontent.com/CGiustiniani/Frontendlearning/feature/async-await/bootcamp/javascript/async-await/assets/async1.png "Async example")

You can also create an `async function expression`

````javascript
let helloBootcampers = async function() { 
    return "Hello Bootcampers!";
};

helloBootcampers();
````

And you can also use an arrow function

`````javascript
let helloBootcampers = async () => {
    return "Hello Bootcampers!";
}
`````

They all basically do the same thing from the result perspective.
To actually consume the result (returned value)

````javascript
async function helloBootcampers() { 
    return "Hello Bootcampers!";
};

helloBootcampers().then((value) => console.log(value));
````

or even shorter:
````javascript
async function helloBootcampers() { 
    return "Hello Bootcampers!";
};

helloBootcampers().then(console.log);
````

## Await

The `await` keyword is only valid inside of an async function. If used outside it will generate a `SyntaxError`. Awaiting on a promise, the `await` keyword pauses the execution of the surrounding `async` function until that promise is either fulfilled or rejected. `await` also unwraps the promise giving us access to its fulfilled value. There can be multiple `await` statements within a single `async` function.

### How do we use async-await?

In the below example, we declare a function that will return a promise that resolves to “Party time!” after two seconds have passed. We then declare an async function and await for the promise to be resolved before logging the message to the console.

`````javascript
function haveParty() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve('Party time!');
    }, 2000);
  });
}

async function message() {
  const message = await haveParty();
  console.log('Message:', message);
}

message(); 
`````

We can see the power of async when there are multiple steps involved:

`````javascript
function player() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Luka Modrić');
        }, 200);
    });
}

function team() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('scored for Croatia');
        }, 500);
    });
}

function result() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('2 goals');
        }, 300);
    });
}

async function liveScore() {
    const who = await player();
    const squad = await team();
    const score = await result();
    console.log(`${ who } ${ squad } ${ score }`);
}

liveScore();
`````

With the above example, each step is carried out sequentially, with each additional function waiting for the one before to resolve or reject before continuing. After one second, we log “Luka Modrić scored for Croatia 2 goals” to the console.

If we want the steps to happen in parallel, we use the `Promise.all() method. This method returns an array of the resolved values once all of the passed-in promises have been resolved. Remember that using this method means that if any of the input promises reject, then it will immediately reject.

As the bellow all run in parallel, we output to the console after just 500ms — the longest duration of one of the passed-in promises.

`````javascript
function player() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('Luka Modrić');
        }, 200);
    });
}

function team() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('scored for Croatia');
        }, 500);
    });
}

function result() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve('2 goals');
        }, 300);
    });
}

async function liveScore() {
    const who = await player();
    const squad = await team();
    const score = await result();
    const stats = await Promise.all([player(), team(), result()]);
    console.log(stats); 
    console.log(`${ who } ${ squad } ${ score }`); 
}

liveScore();
`````

## Error handling

A useful feature of async functions is that error handling is also done synchronously. We use `try catch` statements to handle our errors.

Let's see an example in a game of heads or tails

`````javascript
function headsOrTails() {
  return new Promise((resolve, reject) => {
    const value = Math.round(Math.random() * 1);
    value ? resolve('Yay, heads!!!') : reject('Bad luck, tails');
    console.log(value);
  });
}
async function outcome() {
  try {
    const outcome = await headsOrTails();
    console.log(outcome);
  } catch(error) {
    console.log(error);
  }
}
outcome();
`````

## What is the right approach?

### Asynchronous callbacks
Mostly found in old-style APIs, includes a function being passed into another function as a parameter, which is then invoked when an asynchronous operation has been completed, so that the callback can then do something with the result. This is the precursor to promises; it's not as efficient or flexible.

Traps:

- Nested callbacks can be cumbersome and hard to read (i.e. "callback hell").
- Failure callbacks need to be called once for each level of nesting, whereas with promises you can just use a single .catch() block to handle the errors for the entire chain.
- Async callbacks just aren't very graceful.
- Promise callbacks are always called in the strict order they are placed in the event queue; async callbacks aren't.
- Async callbacks lose full control of how the function will be executed when passed to a third-party library.

### Promises
Promises are a JavaScript feature that allows you to run asynchronous operations and wait until it is definitely complete before running another operation based on its result. Promises are the backbone of modern asynchronous JavaScript.

Trap:
Promise chains can be complex and hard to parse. If you nest a number of promises, you can end up with similar troubles to callback hell. Don't do this:

````javascript
remotedb.allDocs({
  include_docs: true,
  attachments: true
}).then(function (result) {
  let docs = result.rows;
  docs.forEach(function(element) {
    localdb.put(element.doc).then(function(response) {
      alert("Pulled doc with id " + element.doc._id + " and added to local db.");
    }).catch(function (err) {
      if (err.name == 'conflict') {
        localdb.get(element.doc._id).then(function (resp) {
          localdb.remove(resp._id, resp._rev).then(function (resp) {
// et cetera...
````

Do this:

````javascript
remotedb.allDocs(...).then(function (resultOfAllDocs) {
  return localdb.put(...);
}).then(function (resultOfPut) {
  return localdb.get(...);
}).then(function (resultOfGet) {
  return localdb.put(...);
}).catch(function (err) {
  console.log(err);
});
````

Or even better:
````javascript
remotedb.allDocs(...)
.then(resultOfAllDocs => {
  return localdb.put(...);
})
.then(resultOfPut => {
  return localdb.get(...);
})
.then(resultOfGet => {
  return localdb.put(...);
})
.catch(err => console.log(err));
````

### Promises.all()

A JavaScript feature that allows you to wait for multiple promises to complete before then running a further operation based on the results of all the other promises.

Trap:

If a `Promise.all()` rejects, then one or more of the promises you are feeding into it inside its array parameter must be rejecting, or might not be returning promises at all. You need to check each one to see what they returned. 


### Async/await

The cherry top built on top of promises that allows you to run asynchronous operations using syntax that's more like writing synchronous callback code.

Example with fetch:

````javascript
// Call the fetch() method to fetch the image, and store it in a variable
fetch('coffee.jpg')
    // Use a then() block to respond to the promise's successful completion
    // by taking the returned response and running blob() on it to transform it into a blob
    // blob() also returns a promise; when it successfully completes it returns
    // The blob object in the callback
    .then(response => {
        // The promise fetch() does NOT reject on HTTP errors,
        // so we need to check the boolean Response.ok and throw manually a new Error()
        // for the promise2 to be rejected (for example when a 404 occurs).
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.blob();
        }
    })
    .then(myBlob => {
        // Create an object URL that points to the blob object
        let objectURL = URL.createObjectURL(myBlob);
        // Create an <img> element to display the blob (it's an image)
        let image = document.createElement('img');
        // Set the src of the <img> to the object URL so the image displays it
        image.src = objectURL;
        // Append the <img> element to the DOM
        document.body.appendChild(image);
    })
    // If there is a problem, log a useful error message to the console
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
````

Same thing with async/await

`````javascript
async function myFetch() {
    let response = await fetch('coffee.jpg');

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    }
}

myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
`````

Trap:

You can't use the await operator inside a non-async function, or in the top level context of your code. This can sometimes result in an extra function wrapper needing to be created, which can be slightly frustrating in some circumstances. But it is worth it most of the time.

Browser support for async/await is not as good as that for promises (IE has issues...)
