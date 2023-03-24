## Document

The `Document` interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. The DOM tree includes elements such as `<body>` and `<table>`, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

## Window

The `Window` interface represents a window containing a DOM document; the `document` property points to the DOM document loaded in that window. A window for a given document can be obtained using the `document.defaultView` property.

A global variable, `window`, representing the window in which the script is running, is exposed to JavaScript code.

## Accessing the DOM

When you create a script–whether it's inline in a `<script>` element or included in the web page by means of a script loading instruction–you can immediately begin using the API for the `document` or `window` elements to manipulate the document itself or to get at the children of that document, which are the various elements in the web page.

**NOTE:** Provide html template for next exercises. (./assets/blank.html).

This following JavaScript will display an alert when the document is loaded (and when the whole DOM is available for use):

```html
<body onload="window.alert('Welcome to my home page!');">
```

This following JavaScript will display an prompt when the document is loaded.

```html
<body onload="window.prompt('What\'s your name?');">
```

This function creates a new H1 element, adds text to that element, and then adds the `H1` to the tree for this document.

```html
<html>
  <head>
    <script>
       // run this function when the document is loaded
       window.onload = function() {

         // create a couple of elements in an otherwise empty HTML page
         const heading = document.createElement("h1");
         const heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
    </script>
  </head>
  <body>
  </body>
</html>
```

## Fundamental data types

The following table briefly describes important data types.
<table>
<thead>
<tr>
<th>Data type (Interface)</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Document</td>
<td>When a member returns an object of type document, this object is the root document object itself.</td>
</tr>
<tr>
<td>Node</td>
<td>Every object located within a document is a node of some kind. In an HTML document, an object can be an element node but also a text node or attribute node.</td>
</tr>
<tr>
<td>Element</td>
<td>The element type is based on node. It refers to an element or a node of type element returned by a member of the DOM API. Rather than saying, for example, that the document.createElement() method returns an object reference to a node, we just say that this method returns the element that has just been created in the DOM. element objects implement the DOM Element interface and also the more basic Node interface, both of which are included together in this reference. In an HTML document, elements are further enhanced by the HTML DOM API's HTMLElement interface as well as other interfaces describing capabilities of specific kinds of elements.</td>
</tr>
<tr>
<td>NodeList</td>
<td>A nodeList is an array of elements, like the kind that is returned by the method document.querySelectorAll(). Items in a nodeList are accessed by index in either of two ways:
<ul>
<li>list.item(1)</li>
<li>list[1]</li>
</ul>
These two are equivalent. In the first, item() is the single method on the nodeList object. The latter uses the typical array syntax to fetch the second item in the list.</td>
</tr>
<tr>
<td>Attribute</td>
<td>When an attribute is returned by a member (e.g., by the createAttribute() method), it is an object reference that exposes a special (albeit small) interface for attributes. Attributes are nodes in the DOM just like elements are, though you may rarely use them as such.</td>
</tr>
</tbody>
</table>

## DOM interfaces

Many objects borrow from several different interfaces. The table object, for example, implements a specialized `HTMLTableElement` interface, which includes such methods as `createCaption` and `insertRow`. But since it's also an HTML element, `table` implements the `Element` interface.

The `document` and `window` objects are the objects whose interfaces you generally use most often in DOM programming. In simple terms, the `window` object represents something like the browser, and the `document` object is the root of the document itself. `Element` inherits from the generic `Node` interface, and together these two interfaces provide many of the methods and properties you use on individual elements. These elements may also have specific interfaces for dealing with the kind of data those elements hold, as in the `table` object example.

The following is a brief list of common APIs in web and XML page scripting using the DOM.

- `document.querySelector(selector)`
- `document.querySelectorAll(name)`
- `document.createElement(name)`
- `parentNode.appendChild(node)`
- `element.innerHTML`
- `element.style.left`
- `element.setAttribute()`
- `element.getAttribute()`
- `element.addEventListener()`
- `window.content`
- `GlobalEventHandlers/onload`
- `window.scrollTo()`

## Exercise

Go to https://www.ecx.io/en/

1. Query all h2 elements<br/>
   1.1. Get second item from the node list<br/>
   1.2. Change its font size to 80px
2. Get window inner height<br/>
    2.1. What's the difference between inner and outer height?
3. Get all elements with the class name 'container'<br/>
    3.1. Get first element from the list and list all of it's classes


