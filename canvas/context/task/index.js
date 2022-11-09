

// Write Javascript code!
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 600;

ctx.save();
ctx.fillStyle = 'red';
// ctx.translate(50, 50);
ctx.fillRect(0, 0, 150, 300);
ctx.restore();

ctx.fillStyle = 'green';
ctx.fillRect(0, 150, 150, 300);

ctx.save();
ctx.fillRect(150, 150, 150, 300);
ctx.restore();
