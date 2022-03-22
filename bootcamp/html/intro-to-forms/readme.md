## Forms and their structure

Web forms are one of the main points of interaction between the user and a web site. With forms, users can enter data
which is sent to web server for processing and storage, or used on the client-side to update the UI.

Web form consists of one or more form controls, plus some additional elements that help the structure of the form.
Controls can be text fields, dropdowns, buttons, checkboxes and many more.

Form controls can also enforce specific value formats, or value ranges which is part of the _form validation_, and
additionally are paired with text labels that describe their purpose to all users.

It is a good practice to keep the forms as short as possible, and only ask for the data that is absolutely needed.

## The `<form>` element

`<form>` element is a wrapper for the form, and every form needs to start with it.

This element has some specific attributes for form-handling purposes, where all of them are optional. It is a standard
practice to always set at least `action` and `method` attributes:

- `action` - defines the location where the form's collected data should be sent, when submitted,
- `method` - defines which HTTP method to send the data with

Let's try to construct a simple form, like on the following image:
![mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form/form-sketch-low.jpg)

The form is not complex, it should consist of three text fields, each with corresponding label:

- name should be a single-line text field, `input/text`
- e-mail should be an email field, `input/email`
- message should be a multi-line text field, `textarea`

This can be a complete HTML for our form:

```html

<form action="my-action-page" method="post">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="user_name">
    </div>

    <div>
        <label for="email">E-mail:</label>
        <input type="text" id="email" name="user_email">
    </div>

    <div>
        <label for="message">Message:</label>
        <textarea id="message" name="user_message"></textarea>
    </div>
</form>
```

Please note that we've used a `<label>` element for all fields, with which we are explicitly including a label for form
controls. `<label>` has a `for` attribute, which is connected to the `id` attribute of a corresponding form control.

Further notes on the code:

- we've used two different types of `input` form control, `text` and `email`. `text` is a default type and represents a
  basic single-line text field that accepts any kind of text input. `email` defines a single-line text field that only
  accepts well-formed email addresses.
- for the last field, we've used `textarea` form control, which is not an empty element, and therefore requires a
  closing tag. This also influences how a default value can be defined:
  ```html
  <input type="text" value="This is a default value">
  
  <textarea>
    This is a default value
  </textarea>
  ```

### Submit button

To complete the markup for our form, we have to add a button to submit the form. This can be done by using
the `<button>` element:

```html
  ...
<div>
    <button type="submit">Send your message</button>
</div>
```

The button can have following types:

- `submit` - on click, it sends the form's data to the location defined by `action` attribute
- `reset` - on click, reset all form controls to their default value. From UX perspective, this is considered as bad
  practice, so it's not actually used that often
- `button` - on click, does nothing :). Functionality can be defined with JavaScript

### Sending the data

As we saw, the form element defines where and how the data is sent via `action` and `method` attributes.

Additionally, we are providing a `name` attribute to each form control. This name is important, as with this, we tell
the browser the name of each piece of data.

Try out the example, and check which data is submitted via the Developer Tools.

#### GET method
With this method, the data of the form is appended to the URL as series of key/value parameters.

Example:
```html
GET https://example.com?name=John&age=20
```

#### POST method
With this method, the data of the form is added to the request body instead of URL.

Example:
```html
POST https://example.com

Content-Type: application/x-www-form-urlencoded

name=John&age=20
```

## Form structure

Flexibility of forms is making them one of the most complex structures in HTML. You can basically build any kind of form
using form controls and attributes. However, using the correct structure when building an HTML form will help ensure
that the form is both usable and accessible.

**Important note:** it is strictly forbidden to nest a form inside another form. When nested, they can behave in
unpredictable manner.

### Fieldset and legend

`<fieldset>` element is a very convenient way to create groups of widgets that share the same purpose, for both styling
and semantic purposes. Fieldset can be labeled including a `<legend>` element just after the `<fieldset>` is opened.

Some screen readers will read the legend's content before speaking the label of each control.

Example:

```html

<form>
    <fieldset>
        <legend>Shoe color</legend>
        <div>
            <input type="radio" name="color" id="color1" value="red">
            <label for="color1">Red</label>
        </div>
        <div>
            <input type="radio" name="color" id="color2" value="blue">
            <label for="color2">Blue</label>
        </div>
    </fieldset>
</form>
```

When reading out the form, a screen reader will speak `Shoe color red` for the first, and `Shoe color blue` for the
second option.

Using fieldset on radio buttons is only one example, it is generally good approach to section a form into multiple
fieldsets, based on the logical connection of form controls.

### Labels

We've already covered some of the label related topics, but we know that with `<label>` element we are defining a label
for the form control. When building accessible forms, this is one of the most important elements, as screen readers will
speak the label with any related instructions.

Besides the approach with `for` attribute, there is also another way how to associate a form control with a label - by
nesting the form control within the `<label>` element. This is called _implicit association_.

Example:

```html
<label for="name">
    <input type="text" id="name" name="user_name">
</label>
```

Please have in mind, that even in such situations, it is considered as best practice to keep the `for` attribute, to
ensure that all assistive technologies understand the relationship.

#### Usage notes

- In case you did not notice yet, the correctly associated labels are clickable, and depending on the type of the form
  control, clicking a label either focuses it (in case of text controls) or selects it (in case of radio buttons and
  checkboxes).

- Additionally, it is allowed to have multiple labels for one form control. However, this is considered as bad practice
  as assistive technologies can have trouble handling them.

### General structure

Besides the form-specific HTML elements, it is important to know that form markup is just HTML, and therefore all the
power of HTML can be used to structure a web form.

In the examples, you may have noticed that `<div>` elements were used for structure purposes, but `<li>` element
inside `<ul>`, or `<p>` are also often used for structuring purposes.

Additionally, it is also common practice to use the HTML headings and/or `<section>`s to separate sections of complex
forms.

## References

- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

## Pagination

[prev](../01-anchor-vs-button/readme.md)
[next](../03-form-controls/readme.md)