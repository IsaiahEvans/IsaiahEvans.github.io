// mobile menu toggle
var btn = document.getElementById("navToggle");
var nav = document.getElementById("siteNav");

if (btn && nav) {
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
}

// highlight active link as you scroll
var links = Array.prototype.slice.call(document.querySelectorAll(".site-nav a"));

var sections = links
  .map(function (a) {
    return document.querySelector(a.getAttribute("href"));
  })
  .filter(function (section) {
    return Boolean(section);
  });

var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      links.forEach(function (link) {
        var isActive = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", isActive);
      });
    }
  });
}, {
  rootMargin: "-45% 0px -50% 0px",
  threshold: 0.01
});

sections.forEach(function (section) {
  obs.observe(section);
});
