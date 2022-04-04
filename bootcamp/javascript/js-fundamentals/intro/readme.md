# Definition
JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

# ECMAScript

ECMA-262 is a standard that represents a scripting language specification called ECMAScript. It is the specification defined in ECMA-262 for creating a general-purpose scripting language. In simple terms, it is a standardization for creating a scripting language. It was introduced by ECMA International and is basically an implementation with which we learn how to create a scripting language.

**Javascript**

A general purpose scripting language that conforms to the ECMAScript specification.

## ECMAScript releases
- The first edition of ECMA-262 was adopted by the Ecma General Assembly in June 1997.
- ECMAScript had a few releases and in 1999 they released ECMAScript 3.
- ECMAScript released its 5th Edition in 2009.
- ECMAScript 5.1 (June 2011).
- ECMAScript 6 (June 2015).
- The latest version released in June 2019 named ECMAScript 2019 (ES2019) or you can say ES10.

## JavaScript running order
When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom.

**Note**<br>
This is a very common error — you need to be careful that the objects referenced in your code exist before you try to do stuff to them.

## APIs
The functionality built on top of the client-side JavaScript language is So-called Application Programming Interfaces (APIs).

APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.

They generally fall into two categories:
- **Browser APIs** are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

    - The **DOM (Document Object Model) API** allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc.
    - The **Geolocation API** retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
    - The **Canvas** and **WebGL APIs** allow you to create animated 2D and 3D graphics.
    - **Audio and Video APIs** like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer.


- **Third party APIs** are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. For example:
    - The **Twitter API** allows you to do things like displaying your latest tweets on your website.
    - The **Google Maps API** and **OpenStreetMap API** allows you to embed custom maps into your website, and other such functionality.

## Comments
A single line comment is written after a double forward slash (//), e.g.
```javascript
// I am a comment
```

A multi-line comment is written between the strings /* and */, e.g.
```javascript
/*
  I am also
  a comment
*/
```

## Errors
- **Syntax errors:** These are spelling errors in your code that actually cause the program not to run at all, or stop working part way through — you will usually be provided with some error messages too. These are usually okay to fix, as long as you are familiar with the right tools and know what the error messages mean!
- **Logic errors:** These are errors where the syntax is actually correct, but the code is not what you intended it to be, meaning that program runs successfully but gives incorrect results. These are often harder to fix than syntax errors, as there usually isn't an error message to direct you to the source of the error.

## Strict mode

JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.

Strict mode makes several changes to normal JavaScript semantics:
- Eliminates some JavaScript silent errors by changing them to throw errors.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
- Prohibits some syntax likely to be defined in future versions of ECMAScript.

```javascript
'use strict';
var v = "Hi! I'm a strict mode script!";
```
