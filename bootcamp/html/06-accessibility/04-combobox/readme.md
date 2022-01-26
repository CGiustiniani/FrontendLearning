# Combobox

A combobox is a commonly used graphical user interface widget. Traditionally, it is a combination of a drop-down list or
list box and a single-line editable textbox, allowing the user to either type a value directly or select a value from
the list.

See the official documentation of combobox [here](https://www.w3.org/TR/wai-aria-1.1/#combobox).

In this example, user can specify the name of a fruit or vegetable by either typing a value in the box or choosing from
the list. The list becomes available after the textbox contains a character that matches the beginning of the name of
one of the items in the list of suggested values.

Notes about our combobox example:

1. When the listbox popup is displayed, it contains suggested values that complete or logically correspond to the
   characters typed in the textbox. In this implementation, the values in the listbox have names that start with the
   characters typed in the textbox.
2. Users may set the value of the combobox by choosing a value from the list of suggested values.
3. If the user does not choose a value from the listbox before moving focus outside the combobox, the value that the
   user typed, if any, becomes the value of the combobox.

## Requirements

- element with role `combobox` *must* contain a text input element with role `textbox` that has the `aria-multiline` set
  to `false`
- if a combobox provides autocompletion, the textbox element *must* have `aria-autocomplete` to the value that describes
  the behavior
- default state of a combobox is collapsed, and therefore initially the combobox has to have `aria-expanded` set
  to `false`. When it is expanded, this value have to be `true`.
- textbox must set the `aria-controls` attribute that refers to the combobox popup/list element, which will be
  dynamically displayed
- combobox must have the value for `aria-haspopup` attribute with the type of the popup (listbox)
- combobox must have the value for `aria-owns` attribute with the ID of the listbox, to indicate the relationship
  between DOM elements
- keyboard mechanism should be implemented to move the focus between textbox element and the listbox.
    - e.g. _Down Arrow_ should move the focus from the text input to the first focusable list item

## HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>Accessible Combobox</title>

  <link rel="stylesheet" href="style.css" />
</head>
<body>
<h1>Accessible Combobox</h1>

<form action="action" method="GET" autocomplete="off">
  <label for="comboboxInput" class="combobox-label">
    Type one fruit or vegetable:
  </label>
  <div class="combobox-wrapper">
    <div
            id="combobox"
            role="combobox"
            aria-expanded="false"
            aria-owns="comboboxListbox"
            aria-haspopup="listbox"
            aria-activedescendant
    >
      <input
              id="comboboxInput"
              name="favouriteFruit"
              type="text"
              aria-autocomplete="list"
              aria-controls="comboboxListbox"
      />
    </div>
    <ul id="comboboxListbox" class="combobox-listbox hidden" role="listbox">
      <li class="result" role="option" aria-selected="false">Apple</li>
      <li class="result" role="option" aria-selected="false">Banana</li>
      <li class="result" role="option" aria-selected="false">Carrot</li>
      <li class="result" role="option" aria-selected="false">Celery</li>
      <li class="result" role="option" aria-selected="false">Orange</li>
      <li class="result" role="option" aria-selected="false">Tomato</li>
      <li class="result" role="option" aria-selected="false">Squash</li>
    </ul>
  </div>

  <div>
    <button class="submit-btn" type="submit">Submit</button>
  </div>
</form>

<script src="script.js"></script>
</body>
</html>

```

### ARIA attributes

#### Combobox container

- `role="combobox"` on 2nd `div` - Identifies the element as a combobox
- `aria-expanded="false"` - Indicates that the popup element is not displayed. Value is `true` if the popup element is
  displayed
- `aria-owns="combobox-listbox"` - Refers to the element that serves as the listbox popup (`id` of `ul` element). Tells
  browsers to arrange the screen reader reading order so the listbox, when it is visible, immediately follows the other
  elements inside the combobox, regardless of where the listbox element is in the DOM.
- `aria-haspopup="listbox"` - Indicates that the combobox can popup a `listbox` to suggest values. This is the default
  value for elements with the `combobox` role.

#### Text input

- `aria-autocomplete="list"` - Indicates that the autocomplete behavior of the text input is to suggest a list of
  possible values in a popup and that the suggestions are related to the string that is present in the textbox.
- `aria-controls="combobox-listbox"` - Identifies the popup element that lists suggested values (`id` of `ul` element).
- `aria-activedescendant="ID_OF_ACTIVE_ELEMENT"` - When an option in the listbox is visually indicated as having
  keyboard focus, refers to that option. When navigation keys are pressed, the JavaScript changes the value. Enables
  assistive technologies to know which element the application regards as focused while DOM focus remains on the `input`
  element.

#### List

- `role="listbox"` - Identifies the `ul` element as a `listbox`.
- `aria-labelledby="combobox-label"` - Provides a label for the `listbox` element of the combobox.
- `role="option"` (on `li` element) - Identifies the element as a `listbox option`. The text content of the element
  provides the accessible name of the `option`.
- `aria-selected="true"` (on `li` element) - Specified on an option in the listbox when it is visually highlighted as
  selected.

## CSS

```css
* {
  box-sizing: border-box;
}

.combobox-label {
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
}

.combobox-wrapper {
  display: inline-block;
  font-size: 1rem;
  position: relative;
}

.combobox-wrapper input {
  font-size: inherit;
  line-height: 1.5em;
  border: 1px solid #aaa;
  border-radius: 3px;
  width: 200px;
}

.combobox-listbox {
  list-style-type: none;
  padding: 0;
  margin: 0;

  background: white;
  border: 1px solid #aaa;

  position: absolute;
  width: 100%;
  top: 100%;
}

.combobox-listbox .result {
  padding: .25rem;
}

.combobox-listbox .result:hover {
  background: rgb(139, 189, 225);
  cursor: pointer;
}

.combobox-listbox .result.highlighted {
  background: rgb(139, 189, 225);
}

.submit-btn {
  margin-top: 2rem;
}

.hidden {
  display: none;
}
```

## Javascript

```javascript
// get the elements
const combobox = document.querySelector('#combobox');
const textInput = document.querySelector('#comboboxInput');
const listbox = document.querySelector('#comboboxListbox');

const KEYCODES = {
  Tab: 9,
  Enter: 13,
  Escape: 27,
  Space: 32,
  ArrowUp: 38,
  ArrowDown: 40,
};

// functions
const showListbox = () => {
  listbox.classList.remove('hidden');
  combobox.setAttribute('aria-expanded', 'true');
};

const hideListbox = () => {
  const items = listbox.querySelectorAll('.result');

  listbox.classList.add('hidden');
  combobox.setAttribute('aria-expanded', 'false');

  items.forEach((item) => {
    item.classList.remove('highlighted');
  });
};

const checkToHide = (event) => {
  if (event.target === textInput || combobox.contains(event.target)) {
    return;
  }

  hideListbox();
};

const selectItem = (item) => {
  textInput.value = item.innerText;
  textInput.setAttribute('aria-activedescendant', '');
  hideListbox();
};

const clickItem = (event) => {
  if (event.target && event.target.nodeName === 'LI') {
    // real item clicked
    selectItem(event.target);
  }
};

// prevent search on control keys (enter, arrows, etc)
const checkKey = (event) => {
  const key = event.which || event.keyCode;

  switch (key) {
    case KEYCODES.ArrowDown:
    case KEYCODES.ArrowUp:
    case KEYCODES.Escape:
    case KEYCODES.Enter:
      event.preventDefault();
    default:
      searchResults();
  }
};

const searchResults = () => {
  const searchString = textInput.value.toLowerCase();
  const items = listbox.querySelectorAll('.result');

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // check if the item starts with entered search string
    if (item.textContent.toLowerCase().startsWith(searchString)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  }
};

const handleKeyboardControls = (event) => {
  const key = event.which || event.keyCode;
  const items = Array.from(listbox.querySelectorAll('.result:not(.hidden)'));
  const resultsCount = items.length;

  // find the current index. if not found, it returns -1
  let currentIndex = items.findIndex((item) =>
          item.classList.contains('highlighted')
  );

  switch (key) {
          // close listbox in case of Escape or Tab key
    case KEYCODES.Escape:
    case KEYCODES.Tab:
      hideListbox();
      return;
    case KEYCODES.ArrowDown:
      // calculate the next item to highlight
      if (currentIndex === -1 || currentIndex >= resultsCount - 1) {
        currentIndex = 0;
      } else {
        currentIndex++;
      }
      break;
    case KEYCODES.ArrowUp:
      // calculate the next item to highlight
      if (currentIndex <= 0) {
        currentIndex = resultsCount - 1;
      } else {
        currentIndex--;
      }
      break;
    case KEYCODES.Enter:
      event.preventDefault();
      // select the highlighted item
      const activeItem = items.find((item) =>
              item.classList.contains('highlighted')
      );
      selectItem(activeItem);
      return;
    default:
      // do not do anything for other keys, for keyup event to handle it
      return;
  }

  event.preventDefault();

  // remove highlighted if existed before
  items.forEach((item) => {
    item.classList.remove('highlighted');
  });
  // highlight the current index
  items[currentIndex].classList.add('highlighted');
  // set the active-descendant
  textInput.setAttribute('aria-activedescendant', items[currentIndex].getAttribute('id'));
};

// bind events
document.addEventListener('DOMContentLoaded', () => {
  textInput.addEventListener('focus', showListbox);
  document.body.addEventListener('click', checkToHide);
  listbox.addEventListener('click', clickItem);
  textInput.addEventListener('keyup', checkKey);
  textInput.addEventListener('keydown', handleKeyboardControls);
});


```

## Keyboard support

The example supports keyboard usage.

When focus is on `input`:

- Down Arrow - If the listbox is displayed moves focus to the first suggested value
- Up Arrow - If the listbox is displayed, moves focus to the last suggested value
- Escape - Clears the textbox. If the listbox is displayed, closes it

When visual focus is in the listbox, DOM focus remains on the textbox and the value of `aria-activedescendant` on the
textbox is set to a value that refers to the listbox option that is visually indicated as focused.

- Enter - Sets the textbox value to the content of the focused option in the listbox. Closes the listbox. Sets focus on
  the textbox.
- Escape - Closes the listbox. Sets focus on the textbox. Clears the textbox.
- Down Arrow - Moves focus to the next option. If focus is on the last option, moves focus to the first option.
- Up Arrow - Moves focus to the previous option. If focus is on the first option, moves focus to the last option.
- Right Arrow - Moves focus to the textbox and moves the editing cursor one character to the right.
- Left Arrow - Moves focus to the textbox and moves the editing cursor one character to the left.
- Home - Moves focus to the textbox and places the editing cursor at the beginning of the field.
- End - Moves focus to the textbox and places the editing cursor at the end of the field.
- Printable Characters - Moves focus to the textbox. Types the character in the textbox.

## References

- [w3](https://www.w3.org/TR/wai-aria-1.1/#combobox)
- [w3 example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html)

## Pagination

[prev](../03-HTML-and-accessibility/readme.md)
[next](../05-a11y-testing/readme.md)