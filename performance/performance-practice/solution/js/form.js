function throttle(func, timeFrame) {
  var lastTime = 0;
  return function () {
    var now = new Date();
    if (now - lastTime >= timeFrame) {
      const header = document.querySelector("#header");
      if (header) {
        if (document.querySelector("body").scrollTop > 0) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
      lastTime = now;
    }
  };
}

document.addEventListener("scroll", throttle);
