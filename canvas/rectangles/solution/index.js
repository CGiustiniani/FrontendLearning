// Import stylesheets
import './style.css';
const canvas = document.querySelector('#canvas');
canvas.width = 400;
canvas.height = 400;
const ctx = canvas.getContext('2d');

// Create a filled rectangle
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Erase area
ctx.clearRect(25, 25, canvas.width - 50, canvas.height - 50);

// Add stroked Rectangle
ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
