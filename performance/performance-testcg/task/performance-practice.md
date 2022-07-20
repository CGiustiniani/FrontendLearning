# Performance improvement example

ToDo:

1. Move <link> tags before <script> in <head> section
2. Remove unused <script> tag from index.html
3. Add <link rel="preload"> for fontawesome-webfont.woff2
4. Specify used font styles for Roboto font <link> tag
5. Remove SVG in form.html and load it as file (public/icon.svg)
6. Optimize SVG that is included in form.html (public/icon.svg)
7. Move inline styles to CSS file
8. Add loading="lazy" to
   - <img> tags
   - <iframe> (Embedded youtube video)
9. Use requestAnimationFrame in animation.js
10. Set width / height to images to avoid layout shift
11. Add throttle function for scroll event in form.js (see example below)

   function throttle(func, timeFrame) {
      var lastTime = 0;
      return function () {
            var now = new Date();
            if (now - lastTime >= timeFrame) {
               func(); //add scroll function here
               lastTime = now;
            }
      };
   }
   document.addEventListener("scroll", throttle);

## Do you have any ideas what else I could add to the example? Contact me!
