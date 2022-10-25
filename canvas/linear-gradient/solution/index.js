// Import stylesheets
import './style.css';

// Write Javascript code!
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 450;
canvas.height = 450;

// Create Gradient
let gradient = ctx.createLinearGradient(
  // x/y axis coordinate of the start point
  canvas.width / 2,
  0,
  // x/y axis coordinate of the end point
  canvas.width / 2,
  canvas.height
);

// Add Colorstops
for (let i = 0; i < 51; i += 1) {
  gradient.addColorStop(i / 50, `hsl(0, 0%, ${i * 2}%)`);
}

// Assign Gradient to FillStyle
ctx.fillStyle = gradient;

// Draw a Shape
ctx.fillRect(0, 0, canvas.width, canvas.height);
