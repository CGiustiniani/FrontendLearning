# HTML and accessibility

Using the correct HTML elements for their intended purpose as much as possible is necessary. You might wonder why this
is so important. After all, you can use a combination of CSS and JavaScript to make just about any HTML element behave
in whatever way you want.

Example:

```html

<div>Play me!</div>

<button>Play me!</button>
```

Not only HTML `<button>` has some suitable styling applied by default, they also have built-in keyboard accessibility —
users can navigate between buttons using the Tab key and activate their selection using Return or Enter.

Semantic HTML doesn't take any longer to write than non-semantic (bad) markup if you do it consistently from the start
of your project. Even better, semantic markup has other benefits beyond accessibility:

- Easier to develop with
- Better on mobile
- Good for SEO

## Text content

One of the best accessibility aids a screen reader user can have is an excellent content structure with headings,
paragraphs, lists, etc.

```html
<h1>Heading</h1>

<p>This is the first section of the document.</p>

<p>Another paragraph.</p>

<ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ol>

<h2>Subheading 1</h2>

<p>This is the first subsection of the document.</p>

<h2>Subheading 2</h2>

<p>This is the second subsection of the document.</p>
```

The screen reader reads each header out as you progress through the content, notifying you what a heading is, what is a
paragraph, etc.

It stops after each element, letting you go at whatever pace is comfortable for you.

You can jump to the next/previous heading in many screen readers.

You can also bring up a list of all headings in many screen readers, allowing you to use them as a handy table of
contents to find specific content.

## Page layouts

In the old days, people used to create page layouts using HTML tables — using different table cells to contain the
header, footer, sidebar, main content column, etc. This is not a good idea because a screen reader will likely give out
confusing readouts, especially if the layout is complex and has many nested tables.

If you use modern structure layouts you'll see that the layout markup no longer gets in the way and confuses the content
readout. It is also much leaner and smaller in terms of code size, which means easier to maintain code, and less
bandwidth for the user to download.

## UI controls

Elements like buttons, links and form controls are elements that users can interact with. One key aspect of the
accessibility of UI controls is that by default, browsers allow them to be manipulated by the keyboard.

Try
using <a href="https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html">
this page</a> with Tab.

What you will see is how focused elements are given a highlighted default style in every browser.

You can then press Enter/Return to follow a focused link or press a button or start typing to enter text in a text
input. Every element has different controls.

### Adding the functionality to not-interaction element

If you need to make some element focusable (which doesn't have built in focus mechanic) you need to add
attribute `tabindex`. Default value for focusable elements is `tabindex="0"`, if you add value that is bigger then 0,
that element will be focused before elements that have lower value of `tabindex`.

However, to add a complete behaviour, most probably you'll need to add some additional JS to implement a default
behaviour of handling the _Enter_ key.

Example:

```html

<div tabindex="0" id="fakeButton">Click me!</div>
```

For this, we need the JS handler to handle the _Enter_ key:

```javascript
document.onkeydown = function (e) {
    if (e.keyCode === 13) { // The Enter/Return key
        document.activeElement.click();
    }
}
```

## Text alternatives

Whereas textual content is inherently accessible, the same cannot necessarily be said for multimedia content — image and
video content cannot be seen by visually-impaired people, and audio content cannot be heard by hearing-impaired people.

```html
<img src="my-image.jpg">

<img src="my-image.jpg" alt="Alternative text of my image">

<img src="my-image.jpg" alt="Alternative text of my image" title="Title of my image">
```

The first image, when viewed by a screen reader, doesn't really offer the user much help — VoiceOver for example reads
out "my-image.jpg, image". It reads out the filename to try to provide some help. It is not good approach of course,
since user doesn't know what my image is or it can happen that provided image has machine-geneerated file name.

When a screen reader encounters the second image, it reads out the full alt attribute. provide `alt` attributes wherever
possible. Note that the contents of the `al`t attribute should always provide a direct representation of the image and
what it conveys visually.

When a screen reader encounters the third image, most screen readers will read out the alt text, the title attribute,
and the filename. In addition, browsers display title text as tooltips when moused over.

One thing to consider is whether your images have meaning inside your content, or whether they are purely for visual
decoration, and thus have no meaning. If they are decorative, it is better to write an empty text as a value for `alt`
attribute or to just include them in the page as CSS background images.

# ARIA

ARIA stands for Accessible Rich Internet Applications. This is a set of HTML attributes that make web content accessible
to people with disabilities. For example, with ARIA attributes user is able to use the page only with keyboard or the
content of the page can be read to the user with assistive technologies.

Many native HTML elements have built-in keyboard accessibility, role and state, so it is always preferred to use correct
HTML semantic elements over using ARIA attributes. If ARIA is used, it is developer's responsibility to mimic correct
behaviour with those attributes.

Usually ARIA attributes are used in combination with Javascript for custom widgets. There are many client-side widgets
which are trying to mimic the behaviour of desktop interfaces. Those widgets are available in almost every big
Javascript library (e.g. sliders, dropdowns etc.). Since this kind of widgets are mostly wrapped inside `div` elements
there is no semantic meaning in the markup which would be usable to assistive technologies. What also needs to be
considered is dynamic content on the widgets. Dynamic content modifies the DOM, and some assistive technologies can't
know about that. That kind of content needs to be read for users who are unable to view the screen.

It can be said that ARIA attributes are designed to fill the gap between standard HTML tags and dynamic parts of web
apps. They add extra information about the element/widget to a browser's accessibility API, and does not affect a page's
DOM.

Example of ARIA attribute:

```html

<button aria-label="Close modal">
    <span class="icon icon-close"></span>
</button>
```

What is important to mention about ARIA is support. ARIA is heavily dependent on operating system and browser on which
is being used (type, version etc.). That means that behaviour on some browsers can differentiate, so when you are
working with ARIA you should be careful with support and test as much as you can on all major browsers with assistive
technologies.

## Types

There are three different types of ARIA attributes:

* **Roles** - used for declaring semantic role for an element (e.g. tab, tablist, banner etc.)
* **States** - used to describe the current interaction state of an element (e.g. active, disabled etc.)
* **Properties** - used to describe characteristics of these widgets (e.g. draggable, have required element etc.)

Attributes are interpreted by the browser and translated to the operating system's native accessibility APIs. So if
there is an element with `role="tablist"`, it will be controlled in the same way as a native tabs are controlled on the
operating system.

## When to use it?

1. Signposts/Landmarks - ARIA's `role` attribute values can act as landmarks that either replicate the semantics of
   HTML5 elements (e.g. `<footer>`), or go beyond HTML5 semantics to provide signposts to different functional areas,
   e.g `search`, `tabgroup`, `tab`, `listbox`, etc.
2. Dynamic content updates - Screenreaders tend to have difficulty with reporting constantly changing content. With ARIA
   we can use `aria-live` to inform screenreader users when an area of content is updated.
3. Enhancing keyboard accessibility - There are built-in HTML elements that have native keyboard accessibility; when
   other elements are used along with JavaScript to simulate similar interactions, keyboard accessibility and
   screenreader reporting suffers as a result. Where this is unavoidable, WAI-ARIA provides a means to allow other
   elements to receive focus (using `tabindex`).
4. Accessibility of non-semantic controls - When a series of nested `<div>s` along with CSS/JavaScript is used to create
   a complex UI-feature, or a native control is greatly enhanced/changed via JavaScript, accessibility can suffer —
   screenreader users will find it difficult to work out what the feature does if there are no semantics or other clues.
   In these situations, ARIA can help to provide what's missing with a combination of roles like `button`, `listbox`,
   or `tabgroup`, and properties like `aria-required` or `aria-posinset` to provide further clues as to functionality.

## ARIA rules

**If you can use a native HTML element or attribute with the semantics and behavior you require already built in,
instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.**

**Don't change native element's semantics if you don't really need to.**

E.g. Developer wants a heading that is a tab. So instead of doing this:

```html
<h2 role="tab">Heading</h2>
```

Do this:

```html

<div role="tab">
    <h2>Heading</h2>
</div>
```

⚠️ **NOTE** </br>
If a non-interactive element is used as the basis for an interactive element, developers have to add the semantics using
ARIA and the appropriate interaction behavior using scripting. In the case of a button, for example, it is much better
and easier to just use a native HTML button.

**All interactive ARIA controls must be usable with the keyboard.** If you create a widget that a user can click or tap
or drag or drop or slide or scroll, a user must also be able to navigate to the widget and perform an equivalent action
using the keyboard.

Do not use `role="presentation"` or `aria-hidden="true"` on a **focusable** element. Using either of these on a
focusable element will result in some users focusing on 'nothing'.

**All interactive elements must have an accessible name.**

**DON'T DO:**

```html
user name <input type="text">
```

**DO:**

```html
<!-- if label only needs to be read by screen reader -->
<input type="text" aria-label="User Name">

or

<!-- if label needs to be visible and read by screen reader -->
<span id="label-1">User name</span>
<input type="text" aria-labelledby="label-1">
```

**You should only use ARIA when you need to!**

## ARIA role

With the `role` attribute we can adjust the context and meaning of the element.

Some examples of roles that we can specify are _combobox_, _slider_, _tab panel_ and many more. Here you can find the
list of [all possible roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)

If possible, we should always use semantic elements instead of adjusting the role and behavior of elements.

Exercise:

- [1](exercises/02-role.md)

Live Example for roles

- [no roles](https://mdn.github.io/learning-area/accessibility/aria/website-no-roles)
- [roles](https://mdn.github.io/learning-area/accessibility/aria/website-aria-roles/)

## Dynamic content updates

Content which is initially present in DOM can be easily accessed using a screenreader. Therefore, the static websites
are easy to make accessible for people with visual impairments.

The problem is that most of the modern websites are not just static text, they also tend to have a lot of dynamically
added/updated content. These are referred to as _live regions_.

Let's see the following example:

```html

<section>
    <h1>Random quote</h1>
    <blockquote>
        <p></p>
    </blockquote>
</section>
```

Additionally, there is a JS script which loads random quotes and renders it in the interval of 10 seconds:

```javascript
let intervalID = window.setInterval(showQuote, 10000);
```

This is working correct, but from accessibility point of view is not good, because the content update will not be
detected by screenreaders.

Fortunately, ARIA provides a useful mechanism to provide the alerts for content change using the `aria-live` property.
Applying this attribute to an element causes screenreaders to read out the content that is updated. How urgently the
content should be read out, depends on the value:

- `off` - default. Updated will not be announced
- `polite` - updates will be announced only if the user is idle
- `assertive` - updates should be announced to the user as soon as possible

Simply adding `aria-live` to the section will cause screenreader to read out the content when it's updated:

```html

<section aria-live="assertive">
```

By default, only the parts of element which were updated will be read out, but we can also specify if we want to read
our the entire element contents, as this would be easier for user to understand the change. We can achieve this by
setting the `aria-atomic` attribute.

```html

<section aria-live="assertive" aria-atomic="true">
```

Examples:

- [no aria-live](https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html)
- [aria-live](https://mdn.github.io/learning-area/accessibility/aria/aria-live.html)

## Enhancing keyboard accessibility

We already know that some elements like buttons or anchor can be focused using the keyboard, and some activated using
Enter/Space key.

Sometimes, you will have to write code that either uses non-semantic element as buttons, or uses focusable controls, but
not for quite right purpose. Fortunately, we can extend the default behavior of elements to make them focusable, by
setting the `tabindex` attribute.

- `tabindex="0"` - this value allows elements that are not usually focusable, to become focusable. This is the most
  usable value of tabindex.
- `tabindex="-1"` - this allows elements that are not usually focusable, to receive focus programatically, e.g. via
  JavaScript.

Exercise - button

- [1](exercises/01-buttons.md)

## Complex widgets

In the following example, we'll take a look to the tabs controls.

```html

<ul role="tablist">
    <li class="active" role="tab" aria-selected="true" aria-setsize="3" aria-posinset="1" tabindex="0">Tab 1</li>
    <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="2" tabindex="0">Tab 2</li>
    <li role="tab" aria-selected="false" aria-setsize="3" aria-posinset="3" tabindex="0">Tab 3</li>
</ul>
<div class="panels">
    <article class="active-panel" role="tabpanel" aria-hidden="false">
        ...
    </article>
    <article role="tabpanel" aria-hidden="true">
        ...
    </article>
    <article role="tabpanel" aria-hidden="true">
        ...
    </article>
</div>
```

Things to mention:

- roles `tablist`, `tab`, `tabpanel` - they identify the important areas of tabbed interface
- `aria-selected` - defines which tab is currently selected. As different tabs are selected by user, the value of these
  attributes should be updated via JS
- `aria-hidden` - hides an element from being read out by a screenreader. As different tabs are selected by user, tha
  value of these attributes is updated via JS
- `tabindex="0"` - list item can receive focus
- `aria-setsize` - this property allows us to specify that an element is part of a series and how many items the series
  has.
- `aria-posinset` - specify the position in series. Together with the size, it gives the screenreader possibility to
  tell the user that he is on item "1 of 3".

Live example:

- [no aria](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html)
- [aria](https://mdn.github.io/learning-area/accessibility/aria/aria-tabbed-info-box.html)

## References:

- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [w3](https://www.w3.org/TR/wai-aria-1.1)

## Pagination

[prev](../02-screen-readers/readme.md)
[next](../04-combobox/readme.md)