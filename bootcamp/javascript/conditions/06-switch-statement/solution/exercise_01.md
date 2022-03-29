## Exercise 1

T = Temperature
D = Day
W = Weather

If the temperature is below `22` set the blinds to a specific position as defined:
- Monday: `25%`
- Wednesday: `30%`
- Friday: `50%`
- All other days: `70%`

To set the blinds position use: `setBlindsPosition(25)` (numeric value without the `%` sign)

```javascript
let temperature = 21;
let day = 'Monday';

if (temperature < 22) {
    switch (day) {
        case 'Monday':
            setBlindsPosition(25);
            break;
        case 'Wednesday':
            setBlindsPosition(30);
            break;
        case 'Friday':
            setBlindsPosition(50);
            break;
        default:
            setBlindsPosition(70);
    }
}
```
