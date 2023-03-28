# Intro to DOM

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. 

The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

<br/>

![DOM hierarchy in an HTML document](https://raw.githubusercontent.com/CGiustiniani/Frontendlearning/feature/js-dom/bootcamp/javascript/js-dom/intro/assets/dom-model.png "CSS Syntax Declaration")
<br>
*Source: [Wikipedia](https://en.wikipedia.org/wiki/Document_Object_Model)*

---
<br>
The [W3C DOM](https://www.w3.org/DOM/) and [WHATWG DOM](https://dom.spec.whatwg.org/) standards are implemented in most modern browsers. Many browsers extend the standard, so care must be exercised when using them on the web where documents may be accessed by various browsers with different DOMs.

For example, the standard DOM specifies that the `querySelectorAll` method in the code below must return a list of all the `<p>` elements in the document:

```javascript
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);
```

## DOM and JavaScript

The short example above is written in JavaScript, but it uses the DOM to access the document and its elements. The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, XML documents, and their component parts (e.g. elements). Every element in a document—the document as a whole, the head, tables within the document, table headers, text within the table cells—is part of the document object model for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Implementations of the DOM can be built for any language.
