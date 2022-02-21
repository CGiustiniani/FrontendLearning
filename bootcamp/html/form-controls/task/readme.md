# Form Controls

We've already covered some elements briefly, including the `<form>`, `<label>`, `<fieldset>`, `<legend>` and
simple `<input>` and `<textarea>`.

## Text input fields

We've already briefly covered simple use-cases of a basic text input fields. As they are the most basic form components,
they are a very convenient way to let the users enter their data.

Before going into different types, there are some common behaviours that all text controls share:

- all of them can be marked as `readonly` (the user cannot modify the value, but it will still be submitted)
  or `disabled` (the user cannot modify the value, and it will not be submitted)
- all of them can have a `placeholder`
- all of them can be constrained with `maxlength`
- all of them can benefit the spell checking via the `spellcheck` attribute

### Simple text field

Most basic example, which we've already seen. Allows the user to enter a single-line text content.

Example:

```html
<input type="text" id="name" name="user_name">
```

### Password field

The `password` type does not add any special constraints to the field or text, but it does obscure the value that is
entered to the field, that it cannot be read by others.

Example:

```html
<input type="password" id="pwd" name="user_pwd">
```

### Hidden content

This is an original type of input which can be used to create a form control which is not actually visible to the user,
but is still sent to the server with the entire form. Example usage for this might be to submit a timestamp when the
order is placed.

As it is hidden, the user cannot see it, or edit the value. It will additionally never receive focus, and the screen
reader will not notice it either.

Example:

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410">
```

Worth mentioning is, that here the `value` attribute is required to be set. As the value of this input cannot be changed
by the user, before submitting it has to contain the value. It can either be set initially on page load, or dynamically
via JavaScript.

### Different HTML 5 types

Besides the already covered types which were there in original HTML specification, with HTML 5, some new types were
added, to improve the usability of forms.

Most of those elements also have effect in how the browser handles them, specifically on mobile, where different input
type opens a different type of keyboard (e.g. for emails it has a `@` key).

#### Email

This was also already covered in the original form example, and can be used for entering valid email addresses.

Example:

```html
<input type="email" id="email" name="user_email">
```

Additionally, we can allow the user to enter more than one email address, by providing the `multiple` attribute. Email
addresses then have to be separated by comma, as usual in email clients.

Example:

```html
<input type="email" id="email" name="user_email" multiple>
```

#### Search

Search fields are intended to create search boxes on pages. This kind of input often should have a trigger with which we
can clear the value, and this is actually what this type of input provides.

Example:

```html
<input type="search" id="search" name="search">
```

#### Phone number

Similar as for emails, there is also a possibility to specify a telephone type on input field. While focused on mobile
phone, keypad keyboard will be displayed.

Additionally, there is no restriction to enter only numbers, due to different phone number formats around the world.
Theoretically, it could also include letters.

Example:

```html
<input type="tel" id="tel" name="tel">
```

#### URL

A special type of input for entering URLs. It will also allow a validation for a valid URL, similar to the email field.

Example:

```html
<input type="url" id="url" name="url">
```

#### Numeric

A specific type of input which allows only numbers to be entered. It also usually provides two buttons to increase or
decrease the value. On the other hand side, on mobile devices, it will open a numeric keyboard.

Example:

```html
<input type="number" id="age" name="age">
```

There are also some attributes which allow some fine-tuning of the form control:

- `min` - constrains the minimum value
- `max` - constrains the maximum value
- `step` - defines steps that are allowed. By default, it has a value of `1` which means it allows only integer numbers.
  If we want to allow float number, we can either set it to `any` or to specific float value, like `0.01`

Example:

```html
<input type="number" name="age" id="age" min="18" max="70">

<input type="number" name="amount" id="amount" min="0" max="1000" step="0.01">
```

#### Range

There is also another way to pick a number, by using a _slider_. Most common use case for this is in the filters for the
price range on shopping websites.

From the usage perspective, they are less accurate than inputs, and therefore should be used in cases when the precise
value is **not** necessarily important.

Additionally, it is also important to configure the slider properly, which means we should set the `min`, `max`
and `step` attributes.

Example:

```html
<label for="price">Choose a maximum price: </label>
<input type="range" name="price" id="price" min="50000" max="250000" step="1000" value="125000">
```

With this, we encounter a problem. Unfortunately, sliders do not offer any visual feedback of the currently selected
value. Therefore, it is a good practice to add the `<output>` element next to the slider field, and display the
currently selected value.

Using `<output>` is a perfect use case for it, as it allows the `for` attribute (same as labels), to bind it directly to
a specific form control.

Example:

```html
<label for="price">Choose a maximum price: </label>
<input type="range" name="price" id="price" min="50000" max="250000" step="1000" value="125000">
<output for="price" id="priceOutput"></output>
```

But, it does not work as we expect it. There is no default implementation of showing the value, we have to do it
manually via JavaScript.

Here's how we can do it:

```javascript
const price = document.getElementById('price');
const output = document.getElementById('priceOutput');

// initial value
output.textContent = price.value;

// on input change
price.addEventListener('input', () => {
    output.textContent = price.value;
});
```

## Checkable items

In this section we're going to cover so called checkable items. Those items are the ones whose state changes when
clicking on them, or their associated labels.

Worth adding, these controls also behave different when the form is submitted. For most of the form controls, when the
form is submitted, the `name` and `value` (even if empty) of all of them will be sent. For the checkable items, this is
not the case. Unless they are checked, nothing will be sent, not even their name.

Although already mentioned, it is in general a good practice to include each list of related checkable items in an
own `<fieldset>` with it's own `<legend>`. Then associated label for each item should be placed after the checkable
item.

### Checkbox

Checkbox can be created by setting the _type_ attribute of `<input>` to `checkbox`.

Example:

```html
<input type="checkbox" id="subscription" name="subscribe" value="yes" checked>
```

As you can see, there is a possibility to mark the checkbox as pre-selected, by setting the `checked` attribute.

If there are multiple checkboxes which are related, they should have the same `name` attribute. Submitting this kind of
checkbox will submit all selected values as a comma separated list.

Example:

```html

<fieldset>
    <legend>Choose all the vegetables you like to eat</legend>
    <ul>
        <li>
            <label for="carrots">Carrots</label>
            <input type="checkbox" id="carrots" name="vegetable" value="carrots" checked>
        </li>
        <li>
            <label for="peas">Peas</label>
            <input type="checkbox" id="peas" name="vegetable" value="peas">
        </li>
        <li>
            <label for="cabbage">Cabbage</label>
            <input type="checkbox" id="cabbage" name="vegetable" value="cabbage">
        </li>
    </ul>
</fieldset>
```

### Radio button

Radio button can be created by setting the _type_ attribute of `<input>` to `checkbox`.

Example:

```html
<input type="radio" name="color" id="color1" value="red">
```

Of course, a single radio button does not make much sense, as it cannot be deselected (as checkbox). Therefore, usage of
radio buttons is always considered with multiple items. If multiple radio buttons share the same `name` attribute, they
will be considered to be in the same group. With this, only one radio button of this group can be checked at time. That
means, if one option is checked, all others are automatically unchecked.

Example:

```html

<fieldset>
    <legend>What is your favorite meal?</legend>
    <ul>
        <li>
            <label for="soup">Soup</label>
            <input type="radio" id="soup" name="meal" value="soup" checked>
        </li>
        <li>
            <label for="curry">Curry</label>
            <input type="radio" id="curry" name="meal" value="curry">
        </li>
        <li>
            <label for="pizza">Pizza</label>
            <input type="radio" id="pizza" name="meal" value="pizza">
        </li>
    </ul>
</fieldset>
```

## File picker

File picker is one of the types of `<input>` that is there from very early HTML. With it, forms are able to send files
to server. This form control can be used to send one more more files.

Example:

```html
<input type="file" name="file" id="file" accept="image/*" multiple>
```

As you can see, we can specify the mime types that can be accepted in the `accept` attribute, and with `multiple`
attribute we can specify that multiple files can be added.

## Date and time pickers

Asking for a date/time in forms has been a nightmare for developers for a long time. For a good UX, it is important to
provide a calendar selection UI, and until HTML 5 this had to be implemented manually. With HTML 5, this is now a bit
easier.

There are different types of date/time selection that are supported.

### date

The most simple type is the `date`.

Example:

```html
<input type="date" name="myDate" id="myDate">
```

Have in mind that all types of date/time selection can be restricted with `min`, `max` and `step` attributes.

Example:

```html
<input type="date" name="myDate" id="myDate" min="2021-06-01" max="2021-12-31" step="7">
```

### datetime-local

With the `datetime-local` type we can allow the user to pick a date with time, in it's local timezone.

Example:

```html
<input type="datetime-local" name="datetime" id="datetime">
```

### month

With the `month` type we can allow the user to pick a month of the year.

Example:

```html
<input type="month" name="month" id="month">
```

### time

With the `time` type we can allow the user to pick a time value. The value will always be returned in 24-hour format,
while it might be displayed in 12-hour displayed, depending on the locale of the user.

Example:

```html
<input type="time" name="time" id="time">
```

### week

With the `week` type we can allow the user to pick a week of the year.

Example:

```html
<input type="week" name="week" id="week">
```

## Color picker

As with dates, it is always a bit difficult to handle colors as there are many ways to express them. In HTML, there is a
color picker, which always returns the 6 digit lowercase hexadecimal color code.

Example:

```html
<input type="color" name="color" id="color">
```

## Dropdowns

Dropdowns are a simple way to allow users to select values from many values, without taking up much space in the UI.

### Select

A most simple dropdown control is a `<select>` with one or more `<option>` elements.

Example:

```html
<select id="simple" name="simple">
    <option>Banana</option>
    <option selected>Cherry</option>
    <option>Lemon</option>
</select>
```

Like it can be seen, an option can be preselected, by setting the `selected` attribute on one of the options.

In the example above, selected value would be taken from the name of the option (e.g. `Cherry`). This is not feasible in
certain situations, and for this purpose, a `value` attribute can be specified on options, to have a possibility to have
one value, and potentially a different label for it.

Example:

```html
<select id="simple" name="simple">
    <option value="banana">Banana</option>
    <option value="cherry" selected>Cherry</option>
    <option value="lemon">Lemon</option>
</select>
```

#### Option groups

Besides a simple select, there is also a way to create a dropdown with groups of options, by nesting options inside
a `<optgroup>` element.

Example:

```html
<select id="groups" name="groups">
    <optgroup label="fruits">
        <option>Banana</option>
        <option selected>Cherry</option>
        <option>Lemon</option>
    </optgroup>
    <optgroup label="vegetables">
        <option>Carrot</option>
        <option>Eggplant</option>
        <option>Potato</option>
    </optgroup>
</select>
```

#### Multiple choice

It is also possible to allow multiple selections instead of single value, by setting the `multiple` attribute to
the `<select>` element.

Example:

```html
<select id="groups" name="groups" multiple>
    <optgroup label="fruits">
        <option>Banana</option>
        <option selected>Cherry</option>
        <option>Lemon</option>
    </optgroup>
    <optgroup label="vegetables">
        <option>Carrot</option>
        <option>Eggplant</option>
        <option>Potato</option>
    </optgroup>
</select>
```

Please note that the form control will not be rendered as a dropdown, but as some kind of list view, and multiple items
can be selected like in file explorer (`Cmd/Ctrl` + `click`).

### Autocomplete

In HTML, there is also a possibility to provide a suggested, automatically completed values as form control using
the `<datalist>` element, with child `<option>` elements. The `<datalist>` **must** have an `id` attribute. The list
then has to be bound to an `<input>` element, using the `list` attribute, which holds the actual identifier of the list.

Example:

```html
<label for="myFruit">What's your favorite fruit?</label>
<input type="text" name="myFruit" id="myFruit" list="mySuggestion">
<datalist id="mySuggestion">
    <option>Apple</option>
    <option>Banana</option>
    <option>Blackberry</option>
    <option>Blueberry</option>
    <option>Lemon</option>
    <option>Lychee</option>
    <option>Peach</option>
    <option>Pear</option>
</datalist>
```

## Common attributes

Many of the elements that we've covered so far have their own specific attributes. Additionally to those, there is also
a list of attributes which is common for all form elements:

- `autofocus` - attribute with which we can specify that this element should automatically have input focus when the
  page loads
- `disabled` - attribute which indicates that the user cannot interact with the element and the value will not be
  submitted with the form. Additionally, if added on `<fieldset>`, all form controls inside it will be disabled
- `form` - the identifier of the `<form>` element with which the form control is associated with, if it's used outside
  of the form
- `name` - the name of the element, submitted with the form data
- `value` - initial value of the element

## Exercises
1. [form controls](exercises/01-form-controls.md)

## References

- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types)
- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls)
- [mdn](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## Pagination

[prev](../02-intro-to-forms/readme.md)
[next](../04-validation/readme.md)