// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 480;
canvas.height = 320;

const width = canvas.width;
const height = canvas.height;

const chartTitle = 'Top 3 Star Wars Box Office (US)';
const chartData = [
  {
    title: 'The Force Awakens',
    gross: '936',
    color: 'rgb(155, 0, 0)',
  },
  {
    title: 'The Last Jedi',
    gross: '620',
    color: 'rgb(205, 0, 0)',
  },
  {
    title: 'Rogue One: A Star Wars Story',
    gross: '532',
    color: 'rgb(255, 0, 0)',
  },
];

// Add a title - you can use any font
// Place it on the top of the canvas (centered)
// Hint: You can use font, textAlign, fillText



// Create horizontal bars from the chartData
// Hint: You can loop the array, use fillStyle, fillRect
// To keep everything simple you can hardcode some parts



// Optional: Place the movie title on top of the bars
// Hint: You can use font, textAlign, fillStyle, fillText

// Optional: Add some shadows to the bar
// Hint: Use shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor
