/* =========================================================
   Kim & Woodman Asociados — script.js
   ========================================================= */

// ─── NAV: scroll shadow ────────────────────────────────────
var nav       = document.getElementById("nav");
var hamburger = document.getElementById("hamburger");
var navMobile = document.getElementById("navMobile");

window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ─── NAV: hamburger toggle ─────────────────────────────────
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  navMobile.classList.toggle("open");
});

// ─── NAV: close mobile menu on link click ──────────────────
document.querySelectorAll("#navMobile a").forEach(function (a) {
  a.addEventListener("click", function () {
    hamburger.classList.remove("open");
    navMobile.classList.remove("open");
  });
});

// ─── Scroll reveal ─────────────────────────────────────────
var io = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  io.observe(el);
});
