// Parallax scroll functionality
let isScrolling = false;
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;

// Prevent default scroll behavior and scroll only between sections
document.addEventListener("wheel", handleScroll, { passive: false });
document.addEventListener("touchmove", handleScroll, { passive: false });

// Function to handle the scroll event
function handleScroll(event) {
  if (isScrolling) return;

  event.preventDefault();

  isScrolling = true;

  if (event.deltaY > 0) {
    goToNextSection();
  } else {
    goToPreviousSection();
  }

  setTimeout(() => {
    isScrolling = false;
  }, 1500);
}

// Move to the next section
function goToNextSection() {
  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    scrollToSection(currentSectionIndex);
  }
}

// Move to the previous section
function goToPreviousSection() {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    scrollToSection(currentSectionIndex);
  }
}

// Scroll to the specific section based on index
function scrollToSection(index) {
  sections[index].scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
