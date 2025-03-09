// Parallax scroll functionality
let isScrolling = false;

document.addEventListener("wheel", () => (isScrolling = true));
document.addEventListener("touchmove", () => (isScrolling = true));

const sections = document.querySelectorAll(".portfolio");
const options = {
  threshold: 0.75,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && isScrolling) {
      isScrolling = false;
      smoothScrollToSection(entry.target);
    }
  });
}, options);

sections.forEach((section) => observer.observe(section));

// Delay to smooth out scroll snapping
let scrollTimeout;

const smoothScrollToSection = (section) => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};
