// Parallax scroll functionality
document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".portfolio");

  parallaxElements.forEach((element) => {
    const speed = parseFloat(element.getAttribute("data-speed"));
    const offset = window.pageYOffset - element.offsetTop;
    element.style.transform = `translateY(${offset * speed * 0.3}px)`;
  });
});

// Snap scrolling to each section using IntersectionObserver
const sections = document.querySelectorAll(".portfolio");
const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));
