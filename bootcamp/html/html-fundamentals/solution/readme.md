# HTML fundamentals

One of HTML's main jobs is to give text structure and meaning (also known as semantics) so that a browser can display it
correctly. With semantics when we see something (element), we know what its function will be. Using semantics benefits
your page in many ways. It's not only used for displaying content correctly, semantics are used by search engines and
screen readers, so always try to use correct element for the thing you need.

## Headings and paragraphs

Most structured text consists of headings and paragraphs, whether you are reading a story, a newspaper, a college
textbook, a magazine, etc. Structured content makes the reading experience easier and more enjoyable.

In HTML, each paragraph has to be wrapped in a `<p>` element:

```html
<p>Hello, I am a paragraph.</p>
```

Each heading has to be wrapped in a heading element:

```html
<h1>The most epic heading you've ever seen.</h1>
```

There are 6 types of heading elements:

- `<h1>`
- `<h2>`
- `<h3>`
- `<h4>`
- `<h5>`
- `<h6>`

Each element represents a different level of content in the document; `<h1>` represents the main heading, `<h2>`
represents subheadings, `<h3>` represents sub-subheadings, and so on.

Advices:

- you should use a single `<h1>` per page — this is the top level heading, and all others sit below this in the
  hierarchy.
- make sure you use the headings in the correct order in the hierarchy. Don't use `<h3>` elements to represent
  subheadings, followed by `<h2>` elements to represent sub-subheadings — that doesn't make sense and will lead to weird
  results.
- of the six heading levels available, you should aim to use no more than three per page, unless you feel it is
  necessary. Documents with many levels (i.e., a deep heading hierarchy) become unwieldy and difficult to navigate. On
  such occasions, it is advisable to spread the content over multiple pages if possible.

Example:

```html
<h1>JavaScript: The Good Parts</h1>

<h2>Good Parts</h2>

<h3>Why JavaScript?</h3>

<h3>Analyzing JavaScript</h3>

<h3>A Simple Testing Ground</h3>

<h2>Grammar</h2>

<h3>Whitespace</h3>

<h3>Names</h3>

<h3>Numbers</h3>
```

Why do we need the structure?

- Users are looking at a webpage for a short time (mostly reading headlines). If they can't find anything meaningful,
  they will leave.
- Search engines consider contents of headings as important keywords (table of contents).
- Visually impaired people use screen readers to listen the page content. Such software provides an outline by reading
  out the headlines.

All in all, the headings in our webpage should be more or less structured like a table of contents in a book.

### Exercises

1. [headings and paragraphs](exercises/01-headings-and-paragraphs.md)

## Emphasis and importance

In our human language, we often emphasize certain words to alter the meaning of a sentence, or we mark certain words to
indicate the importance of it. HTML provides various semantic elements to mark up textual content with such effects.

The `<strong>` and `<em>` tags are used for emphasizing parts of a text. The `<strong>` tag should be used to indicate
strong importance, seriousness, or urgency, like to indicate key phrases in a text for someone skimming it. The `<em>`
tag should be used to represent stress emphasis, like when you'd read the emphasized text in a different tone of voice.
Both tags can be used together, where it makes sense.

```html
<p>Do it right <em>now</em>!</p>

<p>Before proceeding, <strong>make sure</strong> you put on your safety goggles.</p>
```

## Quotations

HTML has features available for marking up quotations; which element you use depends on whether you are marking up a
block or inline quotation.

If a section of block level content (be it a paragraph, multiple paragraphs, a list, etc.) is quoted from somewhere
else, you should wrap it inside a `<blockquote>` element to signify this, and include a URL pointing to the source of
the quote inside a `cite` attribute.

Example:

```html

<blockquote cite="https://datatracker.ietf.org/doc/html/rfc1149">
    <p>Avian carriers can provide high delay, low
        throughput, and low altitude service. The
        connection topology is limited to a single
        point-to-point path for each carrier, used with
        standard carriers, but many carriers can be used
        without significant interference with each other,
        outside of early spring. This is because of the 3D
        ether space available to the carriers, in contrast
        to the 1D ether used by IEEE802.3. The carriers
        have an intrinsic collision avoidance system, which
        increases availability.</p>
</blockquote>
```

If there is an inline quote, ``<q>`` element should be used instead.

Example:

```html
<p>And then, Arnold says: <q cite="https://www.imdb.com/title/tt0088247/">I'll be back</q>.</p>
```

## Abbreviations

To mark up abbreviation or acronym we use `<abbr>` element. Full expansion of the term is provided in `title` attribute.

```html
<p>We use <abbr title="Hypertext Markup Language">HTML</abbr> to structure our web documents.</p>
```

## Contact details

HTML has an element for marking up contact details — `<address>`.

```html

<address>
    <p>Pero Peric, Kapucinski trg 5 42000 Varaždin Croatia</p>
</address>

<!-- or -->

<address>
    <p>
        Pero Peric<br>
        Kapucinski trg 5<br>
        42000 Varaždin<br>
        Croatia
    </p>
    <ul>
        <li>Tel: +385 42 421 175</li>
        <li>varazdin@ecx.io</li>
    </ul>
</address>
```

## Superscript/subscript

For marking up items like dates, chemical formulas, mathematical equations to have correct semantic meaning
superscript (`<sup>`) add subscript (`<sub>`) do the job.

```html
<p>I was born on 4<sup>th</sup> June 2021.</p>
<p>Water's chemical formula is H<sub>2</sub>O.</p>
```

## Rendering the code

There are a number of elements available for marking up computer code using HTML:

- `<code>` - For marking up generic pieces of computer code
- `<pre>` - For retaining whitespace (generally code blocks) — if you use indentation or excess whitespace inside your
  text, browsers will ignore it and you will not see it on your rendered page. If you wrap the text in `<pre></pre>`
  tags however, your whitespace will be rendered identically to how you see it in your text editor.
- `<var>` - For specifically marking up variable names.
- `<kbd>` - For marking up keyboard (and other types of) input entered into the computer.
- `<samp>` - For marking up the output of a computer program.

Example:

```html

<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>In the above example, <var>para</var> represents a paragraph.</p>
```

## Date and time

To mark up time and date in a machine-readable format `<time>` element is used.
`

```html

<time datetime="2021-06-02">02/06/21</time>
```

This is useful because humans write down dates in many different ways. So the date above can be written like 02 June
2021 or 2nd June 2021 etc. But these different forms cannot be easily recognized by computers — what if you wanted to
automatically grab the dates of all events in a page and insert them into a calendar? The `<time>` element allows you to
attach an unambiguous, machine-readable time/date for this purpose.

## Exercises

1. [text formatting](exercises/03-text-formatting.md)

## Hyperlinks

Hyperlinks are what makes the Web a <i>web</i>. Hyperlinks allow us to link documents to other documents or resources,
link to specific parts of documents, or make apps available at a web address. Almost any web content can be converted to
a link so that when clicked or otherwise activated the web browser goes to another web address.

A basic link is created by wrapping the text or other content, inside an `<a>` element and using the `href` attribute,
also known as a **Hypertext Reference**, or **target**, that contains the web address.

```html
<p>This is a link to <a href="https://www.ecx.io/en/">ecx.io home page.</a></p>
```

Another attribute you may want to add to your links is `title`. The title contains additional information about the
link, such as which kind of information the page contains, or things to be aware of on the web site.

```html
<p>This is a link to <a href="https://www.ecx.io/en/" title="Place where you can find out more about ecx.io">ecx.io home
    page.</a></p>
```

It's possible to link to a specific part of an HTML document, known as a **document fragment**, rather than just to the
top of the document. To do this you first have to assign an `id` attribute to the element you want to link to. Then to
link to that specific id, you'd include it at the end of the URL, preceded by a hash/pound symbol (#), for example:

```html
<h2 id="first-subsection">Subsection</h2>
<!-- somewhere on page --->
<p>Link to <a href="#first-subsection">subsection.</a></p>
```

### E-mail links

It's possible to create links or buttons that, when clicked, open a new outgoing email message rather than linking to a
resource or page. This is done using the `<a>` element and the `mailto:` URL scheme.

```html
<a href="mailto:email@email.com">Send email to recipient that was passed to mailto attribute.</a>
```

The email address is optional. If you omit it and your href is "mailto:", a new outgoing email window will be opened by
the user's email client with no destination address. This is often useful as "Share" links that users can click to send
an email to an address of their choosing.

In addition to the email address, you can provide other information. In fact, any standard mail header fields can be
added to the mailto URL you provide. The most commonly used of these are "subject", "cc", and "body".
(each of values must be URL-encoded).

```html
<a href="mailto:email@email.com?cc=email2@email.com&subject=subject%20name">Send email to recipient that was passed to
    mailto attribute.</a>
```

### Telephone links

It is also possible to link a number. It is done with `tel:` attribute.

```html
<a href="tel:+1234567890">+123 456 7890</a>
```

### Exercises

1. [hyperlinks](exercises/02-hyperlinks.md)

## Pagination
[next](../02-layouts/readme.md)