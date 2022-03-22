When it comes to interactivity on the web, it all boils down to two elements. Anchor and button.

## Anchor

Anchor ``<a>`` created a hyperlink to web pages, files, email addresses, or anything else reachable via URL. Content
inside it should indicate its destination.

### Usage notes

- if the ``href`` attribute is present, pressing ``Enter`` key, while focused, will activate it
- to screen readers, when an anchor tag is clicked, it is expected that the user will be navigated to another page or
  section

## Button

Button ``<button>`` element represents a clickable button, used to submit forms, or anywhere in a document for
accessible, standard button functionality.

### Usage notes

- pressing ``Space`` or ``Enter`` keys, while focused, will activate it
- there are 3 types of button (attribute)
    - ``submit`` - (default) submits the form data to server
    - ``reset`` - resets all the form controls to their initial values
    - ``button`` - does nothing when pressed, used when triggers are added via JavaScript
- screen readers will in most of the cases announce that element is a button (and clickable) 

## So, what's the problem?

The actual problem and confusion lies in hands of developers :).

In the significant amount of cases, wrong elements were used for wrong purposes, and their behaviour modified via JavaScript.

Take a look at the following example:
```html
<a href="#" role="button" onclick="openNavigation();">Open navigation</a>
```

The above code will "work", in most cases and for most users. However, this is a mis-usage of the anchor element:

- anchor should have a meaningful ``href`` attribute provided
- although the ``role`` was set to button, there are several things still missing in order for it to work like a button:
  - the most important would be that ``Space`` key should activate it, instead of ``Enter``
  - [see more details for reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#Possible_effects_on_user_agents_and_assistive_technology)

## The link or button dilemma
In the following image we can see the dilemma that developers often have when deciding which element should they use
![smashing magazine](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/d216e33b-519d-4db4-8089-f9c466c498ee/button-link.png)

There are two things here:
- "Read more..." is most probably leading the user to an article on another page, although it looks completely like a button.
- "X Close" is most probably going to close the popup dialog, although it looks completely like a link.

But, in the end, it's really simple. We cannot just guess the element visually, we need to know what the element should do.
![smashing magazine](https://res.cloudinary.com/indysigner/image/fetch/f_auto,q_auto/w_2000/https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e8d91f21-222b-40d0-b4e2-a884b0a88563/flow-chart.png)

## References

[bits of code](https://bitsofco.de/anchors-vs-buttons/)
[css tricks](https://css-tricks.com/use-button-element/)
[smashing magazine](https://www.smashingmagazine.com/2019/02/buttons-interfaces/)