// T = Temperature
// D = Day
// W = Weather
//
// Close the window if it's `Monday` or `Tuesday` and the temperature is below `22`.
// Close the window any day if the weather is `Rain`

let day = 'Monday';
let temperature = 20;
let weather = 'Rain';

if ((day === 'Monday' || day === 'Tuesday') && temperature < 22 || weather === 'Rain') {
    console.log('Close the window.');
}
