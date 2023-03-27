//Exercise 1

let day1 = 'Monday';
let temperature1 = 19;
            
if (day1 === 'Monday' && temperature1 < 22) {
    console.log('Close the window.');
}

//Exercise 2

let day2 = 'Monday';
let temperature2 = 20;

if (day2 === 'Monday' && temperature2 < 22 || day2 === 'Tuesday' && temperature2 < 24) {
    console.log('Close the window.');
}  

//Exercise 3

let day3 = 'Monday';
let temperature3 = 20;

if (day3 !== 'Wednesday' && temperature3 < 22) {
    console.log('Close the window.');
}

//Exercise 4
let day4 = 'Monday';
let temperature4 = 20;
let weather = 'Rain';

if ((day4 === 'Monday' || day4 === 'Tuesday') && temperature4 < 22 || weather === 'Rain') {
    console.log('Close the window.');
}  