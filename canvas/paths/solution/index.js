// Import stylesheets
import './style.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 200;
canvas.height = 300;

const HALF = canvas.width / 2;
const OFFSET = 10;
const ROOFTOP = 100;

/* Following methods are only allowed
beginPath()
moveTo()
lineTo()
closePath()
stroke() */

/* Limitations
No more than 8 x ctx.lineTo()
No more than 1 x ctx.moveTo()
*/

ctx.beginPath();
ctx.moveTo(OFFSET, canvas.height - OFFSET);
ctx.lineTo(canvas.width - OFFSET, ROOFTOP);
ctx.lineTo(OFFSET, ROOFTOP);
ctx.lineTo(canvas.width - OFFSET, canvas.height - OFFSET);
ctx.lineTo(OFFSET, canvas.height - OFFSET);
ctx.lineTo(OFFSET, ROOFTOP);
ctx.lineTo(HALF, OFFSET);
ctx.lineTo(canvas.width - OFFSET, ROOFTOP);
ctx.lineTo(canvas.width - OFFSET, canvas.height - OFFSET);
ctx.stroke();
ctx.closePath();
