# CSS grid

CSS Grid Layout is a two-dimensional layout system for the web.
While flexbox is designed for one-dimensional layout, Grid Layout is designed for two dimensions — lining things up in rows and columns.

Typical layout for most websites:
![medium](https://miro.medium.com/max/1400/1*0wCXMhCoUZh04Vr85I86SA.png)

## Grid Lines

Lines can be horizontal or vertical.
They are referred to by number and can be named.

![css-tricks](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg)
<sub>The highlighted is Column Line **3**.</sub>

## Grid Track

A Grid Track is the space between two Grid Lines.
It can be horizontal or vertical (row/column).

![css-tricks](https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg)
<sub>The highlighted Grid Track is between Row Lines **2** and **3**.</sub>

## Grid Cell

Smallest unit in our grid.
It’s the space between four Grid Lines.

![css-tricks](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-cell.svg)

<sub>The highlighted Grid Cell is between row lines **1** and **2**, and column lines **2** and **3**.</sub>

## Grid Area

An area of the Grid bound by 4 Grid Lines.
It can contain many Grid Cells.

![css-tricks](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg)

<sub>The highlighted Grid Area is between row lines **1** and **3**, column lines **1** and **3**.</sub>

&nbsp;&nbsp;

# Grid Example 01 Guidelines

## 1. Creating our 1st grid

Create an HTML document with following structure:

```html
<div class="container">
  <div class="box box-1">Box 1</div>
  <div class="box box-2">Box 2</div>
  <div class="box box-3">Box 3</div>
</div>
```

&nbsp;
Create following basic CSS styles:

```css
.container {
  border: 5px solid lightcoral;
  display: grid;
}
```

&nbsp;
Grid by itself does nothing to change the layout, the items/elements appear as normal as before the grid and after we applied it.

We can already see the grid in the dev tools ("Grid" label next to the element in inspector).
Layout tab (next to computed/styles...) - show some of the options that we can tackle around CSS grids.

&nbsp;

## 2. Next; we need to define how many columns and/or rows we want our grid to have

We can define how many rows or columns we want with following properties:

```css
.container {
  grid-template-rows: 100px 100px 100px;
  grid-template-columns: 100px 100px;
}
```

In this code above, we set 3 rows, with width of 100px, each.
Also we set 2 columns, with width of 100px, each.

We can also define auto rows, so if we do not know how much our rows are going to be (in height), we can define grid-auto-rows: 100px, making all our undefined rows to 100px of height. -Keep in mind here, if the content is larger than 100px, it will overflow, so we should bulletproof it with `minmax` function; `minmax(100px, auto)`. Here we say that the row should spread in height per content, but minimum size should be `100px`;

**Here is where we come to implicit and explicit types of grid.**
**The explicit grid** is the one that you create using grid-template-columns or grid-template-rows.
**The implicit grid** is created when content is placed outside of that grid — such as into our rows.

By default, tracks created in the implicit grid are auto sized, which in general means that they are large enough to fit their content. If you wish to give implicit grid tracks a size you can use the `grid-auto-rows` and `grid-auto-columns` properties. If you add `grid-auto-rows` with a value of `100px` to your CSS, you will see that those created rows are now `100px` tall.

In our example above, we are repeating each time the same value for columns or rows. Instead of writing it multiple times, we can use a `repeat` function like so: `repeat(3, 100px)`.

```css
.container {
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(2, 100px);
}
```

Here we say, set 3 rows with height of 100px.
Also, 2 columns with width of 100px;

There is a shorthand for both properties: `grid-template`, so with it, we can define both values in one property.

```css
.container {
  grid-template: repeat(3, 100px) / repeat(2, 100px);
}
```

First we specify rows, and then followed by a slash, columns.

## 3. Alignment

To align items in our grid, we have two properties: `justify-items` and `align-items`.
The default value of both is `stretch`, making our boxes stretch the entire grid cell.

Let's center our boxes over horizontal axis.

```css
.container {
  justify-items: center;
}
```

We gonna align our boxes over vertical axis.

```css
.container {
  align-items: center;
}
```

Now, if we look at our grid now, we can see that it's aligned to the left side of our container.
We have two properties for aligning the grid against it's container:

- `justify-content` -> horizontal alignment
- `align-content` -> vertical alignment

```css
.container {
  justify-content: center;
  align-content: center;
}
```

`align-content` is not visible in our example, because container has grown enough to fit our grid.

We need to add some height to our container, so grid is smaller and therefore will be possible to align itself accordingly.

```css
.container {
  height: 70vh;
}
```

So when it comes to aligning properties for the grid, whenever we have `items`, it refers to item(s) in the grid, and whenever we have `content`, it refers to entire grid (or content of the grid).

### We can also align items individually

With `align-self` we can set our grid item alignment and override the parent settings.
Similarly `justify-self` will be applied in the same way to the element.

&nbsp;
Now to keep things simple, let's remove content alignment.

&nbsp;

## 4. We want to get rid of these absolute values in our `grid-template`

Say we want our 1st column to take 30% of the space, and 2nd column 70% of the space.

```css
.container {
  grid-template: repeat(3, 100px) / 30% 70%;
}
```

Great, our columns are now spread to occupy entire grid space.

Percentages are a bit tricky when it comes to working with grids.
Because if we would to have another column, with say absolute length, our grid will grow larger than it's container.

```css
.container {
  grid-template: repeat(3, 100px) / 100px 30% 70%;
}
```

Because percentage is based on the width of the container.

What we need here is the percentage of the available free space.
So after we allocate 100px for 1st column, we have some free space left of the container. **We want 30% of free space, not 30% of the width of the container**.

This is where another unit comes in. Fraction `fr`.
The fr unit distributes available space, not all space (quite similar to flex-grow property in flexbox).

> &nbsp;
> As a best practice, use fractions when setting sizes of rows and columns in grids.
> &nbsp;

```css
.container {
  grid-template: repeat(3, 100px) / 30fr 70fr;
}
```

&nbsp;

## 5. Let's improve our grid a bit

For our rows, we gonna have 3 rows, our 1st row will be 100px, 2nd row for sidebar and main content to grow and fill entire space (auto), footer 100px, same as our 1st row.

```css
.container {
  grid-template: 100px auto 100px / 30fr 70fr;
}
```

We need to add few more boxes (so we have 3 rows occupied a bit), and also we need to add some height to our container (in case it's not there already):

```css
.container {
  height: 90vh;
}
```

If we resize (by height), we will see how our 1st and last row are not resized, but 2nd one is resized.

&nbsp;

## 6. Gap

We should apply some gap between our grid sections.
To apply gap we use: `row-gap`, `column-gap` or shorthand `gap`.

```css
.container {
  row-gap: 10px;
}
```

Now we have 10px gap between our rows.

Similarly, we apply column gap.

```css
.container {
  column-gap: 10px;
}
```

**For shorthand;** 1st value is row-gap, and 2nd is column-gap: `gap: 10px 20px`.
If the value is the same, we can only pass single value: `gap: 10px`.

> &nbsp;
> Note: The \*gap properties used to be prefixed by grid-, but this has been changed in the spec, as the intention is to make them usable in multiple layout methods. The prefixed versions will be maintained as an alias so will be safe to use for some time. To be on the safe side, you could double up and add both properties to make your code more bulletproof.
> &nbsp;

&nbsp;

## 7. Placing items

Let's say, we want 1st item to move from 1st column to 2nd column.

```css
.box-1 {
  grid-column: 2;
}
```

The 1st item moved to 2nd column, and we have an empty cell on 1st position.
Other items are automatically placed from top left to bottom right.

Let's move it back to 1st cell (undo previous addition).
By default, each item takes 1 cell. However if we want an item to take more than 1 cell, we type a forward slash and specify end line number.

Let's display line numbers in layout / dev tools.

Let's make our 1st box take entire 1st row.
Since grid line 3. is our last column, that is what we need to specify after a slash.

```css
.box-1 {
  grid-column: 1 / 3;
}
```

We can also use negative (-1), to reach it.

```css
.box-1 {
  grid-column: 1 / -1;
}
```

Alternatively we can also specify how many cells this item is going to take by span. Like `span 2` cells.

```css
.box-1 {
  grid-column: 1 / span 2;
}
```

All methods are valid.

&nbsp;

### We can also move this box to another row(s).

Lets move our 1st box to 2nd row.

```css
.box-1 {
  grid-row: 2;
}
```

1st box is now in 2nd row, and other boxes are automatically places top left to bottom right.

Similarly like with columns, we can span or define grid line numbers to take multiple rows.

&nbsp;
Let's reset this grid styles for our box1.

&nbsp;

### Then we also have `grid-area` property.

It's syntax is a bit strange.

`grid-area: 1 / 1 / 1 / 3;`
It accepts following syntax: row / column / row / column
First two numbers represent start, and 2nd two numbers the end.

**But `grid-row` and `grid-column` are much more readable and understandable.**

&nbsp;

## 8. Placing items in named areas

We can set `grid-template-areas` on our container, to define the areas.
On individual items, we set `grid-area` for a particular area.

Let's work it out on our example:

```css
.container {
  /* double quotes represent each row */
  grid-template-areas:
    'header     header'
    'sidebar    main'
    'footer     footer';
}
```

Now we specify on our boxes (individually) which area to occupy.

```css
.box-1 {
  grid-area: header;
}
.box-4 {
  grid-area: footer;
}
```

If we want an empty cell in our areas, we specify a period.

```css
.container {
  /* double quotes represent each row */
  grid-template-areas:
    'header     header'
    'sidebar    main'
    '.          footer';
}
```

> &nbsp;
> We can see area names in dev tools, just turn them on in layouts tab.
> &nbsp;

## References

[medium](https://medium.com/hackernoon/learn-basic-html-be230361457)
[css-tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
