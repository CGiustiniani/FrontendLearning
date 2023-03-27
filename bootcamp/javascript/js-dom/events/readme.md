# Events

Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

Events are fired inside the browser window, and tend to be attached to a specific item that resides in it — this might be a single element, set of elements, the HTML document loaded in the current tab, or the entire browser window.

Each available event has an **event handler**, which is a block of code that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are **registering an event handler**.

**Example**

```html
<button>Change color</button>
```

```javascript
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
```

We store a reference to the button inside a constant called `btn`, using the `Document.querySelector()` function. We also define a function that returns a random number. The third part of the code is the event handler. The `btn` constant points to a `<button>` element, and this type of object has a number of events that can fire on it, and therefore, event handlers available. We are listening for the `click` event firing, by setting the `onclick` event handler property to equal an anonymous function containing code that generates a random RGB color and sets the `<body>` `background-color` equal to it.

**Inline event handlers — don't use these**

```javascript
<button onclick="bgChange()">Press me</button>
```

You can find HTML attribute equivalents for many of the event handler properties; however, you shouldn't use these — they are considered bad practice. It might seem easy to use an event handler attribute if you are doing something really quick, but they quickly become unmanageable and inefficient.

For a start, it is not a good idea to mix up your HTML and your JavaScript, as it becomes hard to parse — keeping your JavaScript separate is best practice; if it is in a separate file you can apply it to multiple HTML documents.

## Adding and removing event handlers

The modern mechanism for adding event handlers is the `addEventListener()` method. Using it, we could rewrite our random color example to look like this:

```javascript
const btn = document.querySelector('button');

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
```

Inside the `addEventListener()` function, we specify two parameters: the name of the event we want to register this handler for, and the code that comprises the handler function we want to run in response to it.

This mechanism has some advantages over the older mechanisms discussed here. First, there is a counterpart function, `removeEventListener()`, which removes a previously added event handler. For example, this would remove the event handler set in the code block above:

```javascript
btn.removeEventListener('click', bgChange);
```

The second advantage that `addEventListener()` has over the older mechanisms is that it allows you to register multiple handlers for the same listener. The following two handlers wouldn't both be applied:

```javascript
myElement.onclick = functionA;
myElement.onclick = functionB;
```

The second line overwrites the value of `onclick` set by the first line. What would work, however, is the following:

```javascript
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
```

Both functions would now run when the element is selected.

## Event objects

Inside an event handler function you can specify parameter name such as `event`, `evt` or `e` (you can use any name you like for the event object). This is called the **event object**, and it is automatically passed to event handlers to provide extra features and information.

```javascript
function bgChange(e) {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol;
  console.log(e);
}

btn.addEventListener('click', bgChange);
```

The `target` property of the event object is always a reference to the element the event occurred upon.

### Exercises
1. [Adding event](exercises/01-events.md)

## Preventing default behavior

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. The most common example is that of a web form, for example, a custom registration form. When you fill in the details and select the submit button, the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a "success message" page of some kind (or the same page, if another is not specified.)

The `Event` interface's `preventDefault()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

### Example

1. [Prevent default checkbox](examples/prevent-default.html)

## Event bubbling and capture

Event bubbling and capture are two mechanisms that describe what happens when two handlers of the same event type are activated on one element.

The standard DOM Events describes 3 phases of event propagation:

1. Capturing phase – the event goes down to the element.
2. Target phase – the event reached the target element.
3. Bubbling phase – the event bubbles up from the element.

![Event dispatch in a DOM tree](https://raw.githubusercontent.com/CGiustiniani/Frontendlearning/js-dom/bootcamp/bootcamp/javascript/js-dom/events/assets/eventflow.svg "Graphical representation of an event dispatched in a DOM tree using the DOM event flow")
<br>
*Source: [W3](https://www.w3.org/TR/DOM-Level-3-Events/)*

For a click on `<td>` the event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.

### Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

**Example**

1. [Bubbling](examples/bubbling.html)

The most deeply nested element that caused the event is called a target element, accessible as event.target.
- `event.target` – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
- `this` or `event.currentTarget` – is the “current” element, the one that has a currently running handler on it

**Stopping bubbling**

A bubbling event goes from the target element straight up. Normally it goes upwards till `<html>`, and then to `document` object, and some events even reach `window`, calling all handlers on the path.

But any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is `event.stopPropagation()`.

**NOTE: Don’t stop bubbling without a need!**

Bubbling is convenient. Don’t stop it without a real need: obvious and architecturally well thought out.

Sometimes `event.stopPropagation()` creates hidden pitfalls that later may become problems.

### Capturing

It is rarely used in real code, but sometimes can be useful. Normally it is invisible to us.

Handlers added using `on<event>-`property or using HTML attributes or using two-argument `addEventListener(event, handler)` don’t know anything about capturing, they only run on the 2nd and 3rd phases.

To catch an event on the capturing phase, we need to set the handler `capture` option to `true`:

```javascript
elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)
```

**Example**

1. [Capturing](examples/capturing.html)

### Event delegation

Bubbling also allows us to take advantage of **event delegation** — this concept relies on the fact that if you want some code to run when you select any one of a large number of child elements, you can set the event listener on their parent and have events that happen on them bubble up to their parent rather than having to set the event listener on every child individually.

**Example**

1. [Event delegation](examples/delegation.html)
