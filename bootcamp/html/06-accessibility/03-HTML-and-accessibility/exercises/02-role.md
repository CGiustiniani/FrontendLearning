# ARIA role

1. Update the following HTML to allow screenreader to recognize it as a list

```html

<!doctype html>
<html>
<head>
    <title>ARIA role</title>
    <style>
        div > div {
            padding-left: 20px;
            position: relative;
        }

        div > div::before {
            content: " ";
            width: 8px;
            height: 8px;
            background-color: black;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 8px;
        }
    </style>
</head>
<body>
    <p>My favorite animals:</p>
    
    <div>
        <div>Pig</div>
        <div>Gazelle</div>
        <div>Llama</div>
        <div>Majestic moose</div>
        <div>Hedgehog</div>
    </div>
</body>
</html>
```

[solution](../solutions/02-role.md)