# Microdata

Microdata is part of the HTML standard and is used to nest metadata within existing content on web pages. It
additionally builds up the search engine optimisation where the search engines and crawlers can extract and process
microdata and use it to provide a richer browsing experience for users.

It allows search engines to understand the information of web pages and provide more relevant results to users.
Microdata uses a supporting vocabulary to describe an item and name/value pairs to assign values to its properties.

## Vocabularies

All major search engines support Schema.org or JSON-LD vocabularies for structured data. The vocabulary itself defines a
standard set of type names and property names.

An example can be ``Book``, where it would have following properties available:

- ``author`` - the author of the book,
- ``name`` - the name of the book,
- ``bookFormat`` - the format of the book,
- ``numberOfPages`` - the number of pages in the book,
- ... and many more

For complete list of attributes, see: [schema.org](https://schema.org/Book) or [json-ld](https://jsonld.com/book/)
definitions for ``Book`` entity.

## Schema.org

An open-community HTML specification used to nest structured data within the HTML content. It uses HTML tag attributes
to name the properties you want to expose as structured data. It is typically used inside the page body. Founded by
Google, Microsoft, Yahoo and Yandex, and developed by an open community process.

Schemas are set of types, each associated with a set of properties, and the types are arranged in a hierarchy. It
currently contains 779 types, 1390 properties, 15 data types, 81 enumerations and 437 enumeration members.

### Generic type "Thing"

The root type is called ``Thing`` and is the most generic item. It consists of following properties:

- additionalType
- alternateName
- description
- disambiguatingDescription
- identifier
- image
- mainEntityOfPage
- name
- potentialAction
- sameAs
- subjectOf
- url

See more info [here](https://schema.org/Thing).

### Specific Types

Some examples of specific types are:

- Action
- Event
- MedicalEntity
- Person
- Place
- Product
- ... and many more

See the list of all types [here](https://schema.org/docs/full.html).

### Example

In the following example, an information about a person is rendered in HTML. We can see how schema.org attributes are
added to certain HTML elements.

```html
<div itemscope itemtype="https://schema.org/Person">
    <span itemprop="name">Jane Doe</span>
    <img src="janedoe.jpg" itemprop="image" alt="Photo of Jane Doe"/>

    <span itemprop="jobTitle">Professor</span>
    <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">
      20341 Whitworth Institute
      405 N. Whitworth
    </span>
        <span itemprop="addressLocality">Seattle</span>,
        <span itemprop="addressRegion">WA</span>
        <span itemprop="postalCode">98052</span>
    </div>
    <span itemprop="telephone">(425) 123-4567</span>
    <a href="mailto:jane-doe@xyz.edu" itemprop="email">
        jane-doe@xyz.edu</a>

    Jane's home page:
    <a href="http://www.janedoe.com" itemprop="url">janedoe.com</a>

    Graduate students:
    <a href="http://www.xyz.edu/students/alicejones.html" itemprop="colleague">
        Alice Jones</a>
    <a href="http://www.xyz.edu/students/bobsmith.html" itemprop="colleague">
        Bob Smith</a>
</div>
```

*Source: [Schema.org](https://schema.org/Person)*

## JSON-LD

A JavaScript notation embedded in a ``<script>`` tag in the page head or body. The markup is not interconnected with the
user-visible text, which makes nested data items easier to express.

Google announced in 2015 that it would start recognizing JSON-LD as a structured data type. Additionally, it can read
JSON-LD data when it is dynamically injected into the page's content.

### Example

In the following example, the same information about person is defined, but this time, with usage of JSON-LD.

```html
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seattle",
        "addressRegion": "WA",
        "postalCode": "98052",
        "streetAddress": "20341 Whitworth Institute, 405 N. Whitworth"
      },
      "colleague": [
        "http://www.xyz.edu/students/alicejones.html",
        "http://www.xyz.edu/students/bobsmith.html"
      ],
      "email": "jane-doe@xyz.edu",
      "image": "janedoe.jpg",
      "jobTitle": "Professor",
      "name": "Jane Doe",
      "birthPlace": "Philadelphia, PA",
      "birthDate": "1979-10-12",
      "height": "72 inches",
      "gender": "female",
      "telephone": "(425) 123-4567",
      "url": "http://www.janedoe.com"
    }
</script>
```

*Source: [JSON-LD](https://jsonld.com/person/)*

## Testing microdata

There are different ways and tools to test the microdata, but here we'll cover the one from Google.
Link: [here](https://search.google.com/structured-data/testing-tool).

## Exercises
1. [structured data](exercises/01-structured-data.md)