//Exercise 1

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