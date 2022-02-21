# Form validation

Validation is a process of verifying whether all required form controls are filled out in a correct format. This
validation can be done on client side, and is called _client side validation_.

Client side validation is really handy, and increases the user experience. However, it **should not be considered** as
the only security measure as it is simply too easy to bypass. That's why the server side validation should also be
implemented, but is not part of this lesson.

Examples of validation are:

- _"This field is required"_ - the field is mandatory to be filled in
- _"Please enter your phone number in the format xxx-xxxxxx"_ - specific data format is required
- _"Please enter a valid email address"_ - specific data format is required
- _"Your password needs to be between 8 and 30 characters long, and contain one uppercase letter, one symbol and a
  number"_ - very specific data format is required

Valid data format is really helpful for the application, as we can ensure it will also be saved in correct way to
database.

Types of client side validation:

- **Built-in form validation** - uses HTML 5 form validation features which does not require much JavaScript. It has a
  better performance than JavaScript, but it is not as customizable as JavaScript validation.
- **JavaScript validation** - here the validation is coded via JavaScript. It is completely customizable, but it has to
  be coded from scratch.

## HTML 5 validation

With HTML 5, a lot of form controls got the ability to validate most of the data, without the need of Javascript.

Let's see some examples:

- `required` - specifies if the form control is mandatory to be filled out
- `minlength` and `maxlength` - specifies the minimum and maximum length of text data
- `min` and `max` - specifies the minimum and maximum value of numeric data
- `type` - specifies if the data has to be a number, an email address, or something else
- `pattern` - specifies
  a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as data
  pattern

If the data entered to the field is correct, the form control is considered as valid, otherwise it's considered invalid.

When the form control is valid:

- it will match the `:valid` CSS pseudo-class
- if the user tries to submit the data, browser will submit it (if there's no other control that prevents it)

When the form control is invalid:

- it will match the `:invalid` CSS pseudo-class
- if the user tries to submit the data, browser will block the form and display an error message

### Required

This is the simplest HTML 5 validation feature. It can be easily set up by setting the `required` attribute on the form
control.

When this is set, the control matches the `:required` pseudo-class, which can be used for styling.

Example:

```html

<form>
    <label for="name">Name *</label>
    <input type="text" id="name" name="user_name" required>

    <button type="submit">Submit</button>
</form>

<style>
    input:valid {
        border: 2px solid green;
    }

    input:invalid {
        border: 2px solid red;
    }

    input:invalid:required {
        background-color: lightpink;
    }
</style>
```

There are some usage notes which we should consider for making the form controls required. First of all, we should also
indicate when the form field is required (also required for accessibility). Additionally, we should only required users
to input the data which we really need.

### Length restriction

We can define the minimum and maximum length of text input to the field by providing `minlength` and `maxlength`
attributes.

Example:

```html

<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name" minlength="5" maxlength="15">

    <button type="submit">Submit</button>
</form>
```

Please note that the field is valid in the initial state, as we did not set it as required.

Additionally, most browsers will **not allow** the user to type in a longer value than expected.

### Value restriction

Similar as for the text length, we can set the restriction on numeric value with `min` and `max` attributes.

Example:

```html

<form>
    <label for="amount">Amount:</label>
    <input type="number" id="amount" name="amount" min="5" max="15">

    <button type="submit">Submit</button>
</form>
```

Please note that the field is valid in the initial state, as we did not set it as required.

Additionally, browsers will **not allow** the user to increment/decrement the values using buttons outside of defined
range. However, user can type in any value, and this will be validated.

### Regular expression

Very useful validation technique is with the `pattern` attribute, which expects
a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as its value.

Regular expressions are not part of this session, but we'll briefly mention it, as it can be quite handy for the form
validations.

Regular expression is a pattern that can be used to match character combinations in text strings. Some examples:

- `a` - matches one caracter that is `a` (not any other character)
- `abc` - matched `a`, followed by `b`, and then `c`
- `ab?c` - matches `a`, optionally followed by a single `b`, and then `c`
- `ab*c` - matches `a`, optionally followed by any number of `b`, and then `c`
- `a|b` - matches one character that is either `a` or `b`
- `abc|xyz` - matches either exactly `abc` or `xyz`
- `[a-z]` - matches any of characters between `a` and `z` in alphabet

Link to the handy tool for verifying regex: https://regexr.com/.

Example:

```html

<form>
    <label for="choice">Would you prefer a banana or a cherry?:</label>
    <input type="text" id="choice" name="choice" required pattern="[Bb]anana|[Cc]herry">

    <button type="submit">Submit</button>
</form>
```

### Type restriction

As already mentioned, the `type` attribute also defines the validation in certain cases. Most used use-case is, of
course, with emails.

Example:
```html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Submit</button>
</form>
```

It also works with the `multiple` attribute, to enter multiple email addresses:
```html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" multiple required>

    <button type="submit">Submit</button>
</form>
```

## Exercises:
1. [validation](exercises/01-validation.md)

## References

- [mdn](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

## Pagination

[prev](../03-form-controls/readme.md)
