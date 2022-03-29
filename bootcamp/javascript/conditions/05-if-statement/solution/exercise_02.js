// T = Temperature
// D = Day
// W = Weather
//
// Close the window if it's `Monday` and the temperature is below `22`.
// Close the window if it's `Tuesday` and the temperature is below `24`.

let day = 'Monday';
let temperature = 20;

if (day === 'Monday' && temperature < 22 || day === 'Tuesday' && temperature < 24) {
    console.log('Close the window.');
}
