

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colors = [
  '#9400D3',
  '#4B0082',
  '#0000FF',
  '#00FF00',
  '#FFFF00',
  '#FF7F00',
  '#FF0000'
];

// Step 1
// Use an aspect ratio of 3:2 (width/height) by setting the width and height for the canvas

canvas.width = 330;
canvas.height = 220;

// Step 2
// Loop through the colors array to createeven distributed rectangles

colors.forEach((color, i) => {
  ctx.fillStyle = colors[i];
  ctx.fillRect(
    0,
    0 + i * (canvas.height / colors.length),
    canvas.width,
    canvas.height / colors.length
  );
});
