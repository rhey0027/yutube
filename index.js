var blink = document.getElementById("bday");
setInterval (function () {
  blink.style.opacity =
  (blink.style.opacity == 0 ? 1 : 0);
}, 500); 