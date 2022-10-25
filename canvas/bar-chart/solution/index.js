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
ctx.font = 'bold 24px Arial Black';
ctx.textAlign = 'center';
ctx.fillText(chartTitle, width / 2, 45);

// Create horizontal bars from the chartData
// Hint: You can loop the array, use fillStyle, fillRect
// To keep everything simple you can hardcode some parts
chartData.forEach(function (movie, i) {
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

  ctx.fillStyle = movie.color;
  ctx.fillRect(20, (height / 4) * i + 90, (movie.gross / width) * 225, 30);

  ctx.font = 'italic 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillStyle = 'white';
  ctx.fillText(`${movie.title} $${movie.gross}`, 30, (height / 4) * i + 110);
});

// Optional: Place the movie title on top of the bars
// Hint: You can use font, textAlign, fillStyle, fillText

// Optional: Add some shadows to the bar
// Hint: Use shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor
