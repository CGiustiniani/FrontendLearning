window.addEventListener("DOMContentLoaded", (event) => {
  const square = document.querySelector(".square");
  let left = 0;

  // Amount of pixels we want our squares to animate right
  const amountOfPixelsToAnimate = 600;

  function animate() {
    left += 5;

    // Only when our desired distance isn't reached yet, do we want to request another frame
    if (left == amountOfPixelsToAnimate) {
      left = 0;
    }
    square.style.left = `${left}px`;

    window.setTimeout(() => {
      animate();
    }, 20);
  }

  animate();
});
