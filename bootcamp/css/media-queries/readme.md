# Media Queries

### Introduction
A very simple explanation would be that a media query is a special CSS3 at-rule that applies a block of CSS properties only if a certain condition is true. They are used when we want to modify our website or application depending on our user's device general type (screen, print, ...) or specific parameters (viewport width, height, resolution, ...).

In a more broad explanation, we can say that media queries are used for the following actions:
- confitionally applying styles with the CSS `@media` and `@import` at-rules
- target specific media for the `<style>`, `<link>`, `<source>` or any other HTML elements with the `media=` attribute
- test monitor and media states using the `Window.matchMedia()` and `MediaQueryList.addListener()` JavaScript methods

When writing a media query, it is composed of an optional media type and any numner of media feature expressions. Additionally, multiple queries can be combined in various ways using logical operators. Also note that media queries are case-insensitive.

As mentioned above, the media query computes to true when the media type (if specified) matches the device on which a document is being displayed and all media feature expressions compute to true. Note that if we have queries involving unknown media types, they will always compute to false.

Let's look at a simple example:
```css
@media only screen and (min-width: 48rem) {
  .navigation__toggle {
    display: none;
  }

  .navigation__item {
    display: inline-block;
    padding: 0.5rem 0.75rem;
    transition: background-color 300ms ease-in-out;
  }

  .navigation__item:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
}
```

Here we are using media type and media feature rules to instruct the browser that only on screen devices that have a minimum viewport width of 48rem the navigation toggle button shouldn't be shown and that the navigation items should be rendered in a certain way and have a subtle hover animation.

In the upcoming sections we'll take a look at media types and features and how we can use them in real-life projects.


## Media types

As mentioned above, the media type is one set of rules that we can use while constructing our media queries. Originally, they were defined back in HTML4 for the `media` attribute on the `<link>` elements.

Over time, media types alone have proven insufficient as a way of narrowing down the user's device with different styling needs, so only a handful of them renmain in use today. We can use the following:
- `all` - matches all devices
- `print` - matches printers and devices intended to reproduce a printed display - can be emulated in the browser's "Print Preview" mode
- `screen` - matches all devices that aren't matched by print

The following media types are deprecated - user agents will recognize them as valid, but they will match nothing:
- `tty`
- `tv`
- `projection`
- `handheld`
- `braille`
- `embossed`
- `aural`
- `speech`

It is expected for all the media types to be deprecated in the future, as appropriate media features which capture important differences are defined.


## Media Features

The media features represent a more fine-grained test than media types - they test a single, specific feature of the user agent or display device. They resemble CSS properties - they consist of a feature name, a colon and a value to test for. Also, they can be written in boolean form as just the feature name or in rande form with a comparison operator.

Some of their most important characteristics are that they:
- are always wrapped in parentheses and combined with the `and` or `or` keywords
- may be given with `only` in their name (omitting the colon and the value) to evaluate the feature in a boolean context
- can be written in range context which uses standard mathematical comparison rather than a colon, or having their features prefixed with `min-` or `max-`
- accept only single values

The full list of media features that we can use in our media queries is very large and can be accessed [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features).


## Logical Operators

When composing a media query, we can use the logical operators `not`, `and` & `only`. Let's take a look at what they do:
- `and` - used for combining multiple media features together into a single media query, requiring each chained feature to return `true` in order for the query to be applied. We can also use it for joining media features with media queries
- `not` - used to negate the media query - it will return `true` if the query would otherwise return `false`. If used in comma-separated list of queries, it will only negate the specific query to which it is applied. Note that if the `not` operator is used, the media type must be specified
- `only` - this operator is used to apply a style only if an entire query matches and is useful for preventing older browsers from applying selected styles. To further illustrate this, let's look at an example:
`@media screen and (max-width: 768px) {`
Without the `only` operator, older browsers would interpret the query above as `screen`, ignoring the remainder of the query and applying the styling to all screens. Note that also when using `only`, we **must** specify the media type.

- `, (comma)` - used to combine multiple media queries into a single rule. Note that each query in a comma-separated list will be treated separately from others - if any of the queries result with `true`, the whole list will result with `true`. We can say that those lists behave like the logical `or` operator.


## Media Query Strategies

When using media queries on projects, there are two main strategies that we will encounter:
- Mobile-first based on `min-width`
- Desktop-first based on `max-width`

In recent years the mobile-first strategy is main go-to when setting up modern web project, since more than 60% of the audience accesses websites via mobile devices. Nevertheless, it is important to be aware of both strategies and where each one of them makes sense.

### Mobile-first

Mobile-first design is the process of planning and developing a website keeping in mind the mobile-users first - we can see it as a response to the classic desktop-first approach that is proving to be less effective when taking into account the growing audience that is primarily accessing websites via mobile devices.

The mobile-first strategy is part of the progressive advancement method in which we start with a basic, minimalist user interface and add more functionality to it as the viewport grows.

This strategy is based on the `min-width` media feature. Let's look at an example. We have the following markup for our footer:
```html
<footer class="footer">
  <ul class="footer__column">
    <li class="footer__item">
      <a href="/" class="footer__link">Home</a>
    </li>
    <li class="footer__item">
      <a href="/about" class="footer__link">About</a>
    </li>
    <li class="footer__item">
      <a href="/contact" class="footer__link">Contact</a>
    </li>
  </ul>

  <ul class="footer__column">
    <li class="footer__item">
      <a href="/clients" class="footer__link">Clients</a>
    </li>
    <li class="footer__item">
      <a href="/services" class="footer__link">Services</a>
    </li>
    <li class="footer__item">
      <a href="/careers" class="footer__link">Careers</a>
    </li>
  </ul>
</footer>
```

When using the mobile-first approach, we add the basic styling that will be displayed on mobile devices, but it will also be "inherited" by all larger screens. For example:
```css
.footer {
  padding: 3rem 0 1.5rem;
  background-color: #777;
  color: #fff
}

.footer__column {
  padding: 0;
  list-style: none;
}

.footer__column:not(:last-child) {
  margin-bottom: 1.5rem;
}

.footer__item:not(:last-child) {
  margin-bottom: 0.75rem;
}

.footer__link {
  color: #eee;
  font-weight: 700;
  text-decoration: none;
}
```

Let's say that we want to slightly change the styling on desktop devices - we can achieve it by adding just a simple media query:
```css
@media only screen and (min-width: 62rem) {
  .footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4.5rem 0 3rem;
  }
}
```

By adding just a few CSS rules we have changed the layout of the whole footer element for desktop devices, while keeping all the previous styling. In the next section we'll explore how we would achieve the same layout with the desktop-first strategy.

### Desktop-first

When using the desktop-first approach, we are constructing our CSS in a way that's primarily targeted towards large (desktop) devices. This approach is also known as graceful degradation and it incorporates all complexities right from the start and removes them later for smaller devices. The problem with this strategy is that if we build the all-inclusive design right from the start, the core and supplementary elements merge and become harder to distinguish and separate. Also, as we will see in out example, it results in more lines of code.

Let's get back to our example. The markup stays the same, but the starting CSS looks like:
```css
.footer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4.5rem 0 3rem;
  background-color: #777;
  color: #fff
}

.footer__column {
  padding: 0;
  list-style: none;
}

.footer__column:not(:last-child) {
  margin-bottom: 1.5rem;
}

.footer__item:not(:last-child) {
  margin-bottom: 0.75rem;
}

.footer__link {
  color: #eee;
  font-weight: 700;
  text-decoration: none;
}
```

We start with the two-column layout and larger padding. To implement the single-column layout for mobile, we need to implement the following media query:
```css
@media only screen and (max-width: 62rem) {
  display: block;
  grid-template-columns: none;
  padding: 3rem 0 1.5rem;
}
```

For the single-column layout to work on mobile, we need to revert the `display: grid` to `block`, reset the `grid-template-columns` and redefine the `padding` - note that all of those properties were also defined in our starting CSS!

However, there still are some valid use-cases for this strategy, e.g. when working on a B2B site that will have a high number of visits from desktop/laptop devices or a fintech site that will have a dedicated Android/iOS application for mobile users.


### Further reading
- https://drafts.csswg.org/mediaqueries
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- https://www.freecodecamp.org/news/taking-the-right-approach-to-responsive-web-design/
- https://css-tricks.com/how-to-develop-and-test-a-mobile-first-design-in-2021/