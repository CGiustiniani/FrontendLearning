

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;
const CENTER = canvas.width / 2;

// Color and Line Width
ctx.lineWidth = 5;
ctx.strokeStyle = 'magenta';

// Head (Full Circle)
ctx.beginPath();
ctx.arc(CENTER, CENTER, 100, 0, Math.PI * 2);
ctx.stroke();

// Mouth (Half Circle)
ctx.beginPath();
ctx.arc(CENTER, CENTER, 75, 0, Math.PI);
ctx.stroke();

// Left Eye
ctx.beginPath();
ctx.arc(175, 175, 10, 0, Math.PI * 2);
ctx.stroke();

// Right Eye
ctx.beginPath();
ctx.arc(225, 175, 10, 0, Math.PI * 2);
ctx.stroke();
