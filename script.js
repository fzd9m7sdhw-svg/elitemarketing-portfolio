(function () {
  "use strict";
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;
  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
  }
  toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
  nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setOpen(false); });
})();
