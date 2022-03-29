## Exercise 1

T = Temperature
D = Day
W = Weather

Close the window if it's `Monday` and the temperature is below `22`.

```javascript
if (day === 'Monday' && temperature < 22) {
    console.log('Close the window.');
}
```

## Exercise 2

T = Temperature
D = Day
W = Weather

Close the window if it's `Monday` and the temperature is below `22`.
Close the window if it's `Tuesday` and the temperature is below `24`.

```javascript
let day = 'Monday';
let temperature = 20;

if (day === 'Monday' && temperature < 22 || day === 'Tuesday' && temperature < 24) {
    console.log('Close the window.');
}
```

## Exercise 3

T = Temperature
D = Day
W = Weather

Close the window if it's not `Wednesday` and the temperature is below `22`.

```javascript
let day = 'Monday';
let temperature = 20;

if (day !== 'Wednesday' && temperature < 22) {
    console.log('Close the window.');
}
```

## Exercise 4

T = Temperature
D = Day
W = Weather

Close the window if it's `Monday` or `Tuesday` and the temperature is below `22`.
Close the window any day if the weather is `Rain`

```javascript
let day = 'Monday';
let temperature = 20;
let weather = 'Rain';

if ((day === 'Monday' || day === 'Tuesday') && temperature < 22 || weather === 'Rain') {
    console.log('Close the window.');
}
```
