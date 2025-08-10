const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        let animClass = "";

        animClass = el.dataset.anim;

        if (animClass) {
          el.classList.remove("opacity-0");
          el.classList.add(`animate__${animClass}`);
          // observer.unobserve(el);
        } else {
          el.classList.add("opacity-0");
          el.classList.remove(`animate__${animClass}`);
        }
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".ob_fadeInDown").forEach((el) => {
  el.dataset.anim = "fadeInDown";
  observer.observe(el);
});

document.querySelectorAll(".ob_fadeInUp").forEach((el) => {
  el.dataset.anim = "fadeInUp";
  observer.observe(el);
});

document.querySelectorAll(".ob_fadeInLeft").forEach((el) => {
  el.dataset.anim = "fadeInLeft";
  observer.observe(el);
});

document.querySelectorAll(".ob_fadeInRight").forEach((el) => {
  el.dataset.anim = "fadeInRight";
  observer.observe(el);
});

document.querySelectorAll(".ob_fadeIn").forEach((el) => {
  el.dataset.anim = "fadeIn";
  observer.observe(el);
});

document.querySelectorAll(".ob_zoomIn").forEach((el) => {
  el.dataset.anim = "zoomIn";
  observer.observe(el);
});

document.querySelectorAll(".ob_bounceIn").forEach((el) => {
  el.dataset.anim = "bounceIn";
  observer.observe(el);
});

document.querySelectorAll(".ob_slideInDown").forEach((el) => {
  el.dataset.anim = "slideInDown";
  observer.observe(el);
});

document.querySelectorAll(".ob_slideInUp").forEach((el) => {
  el.dataset.anim = "slideInUp";
  observer.observe(el);
});

document.querySelectorAll(".ob_slideInLeft").forEach((el) => {
  el.dataset.anim = "slideInLeft";
  observer.observe(el);
});

document.querySelectorAll(".ob_slideInRight").forEach((el) => {
  el.dataset.anim = "slideInRight";
  observer.observe(el);
});
