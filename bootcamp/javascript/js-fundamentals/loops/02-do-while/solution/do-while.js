//#do...while

//Draw a random number, if an existing one is drawn, draw again.

const numbers = [];

function draw() {
    let number;

    do {
        number = getRandomNumber(0, 10);
    } while(numbers.includes(number));
    
    numbers.push(number);
    console.log(numbers);
}

draw();
