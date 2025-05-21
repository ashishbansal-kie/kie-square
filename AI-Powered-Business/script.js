// ################## Hero Section Code ####################
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleAutoplaying");
  const heroWords = document.querySelectorAll(".hero .word");

  // Function to apply animations to all words
  function applyAnimations(slideIndex) {
    const words = document.querySelectorAll(
      `.carousel-item-div:nth-child(${slideIndex}) .word`
    );

    // Reset and apply animation to each word in the current slide
    words.forEach((word, index) => {
      word.style.animation = "none"; // Reset animation
      word.offsetHeight; // Trigger reflow to restart the animation
      word.style.animation = `slideIn 4s forwards ${index * 0.5}s`; // Apply animation again
    });
  }

  // Apply animation for the first slide on page load
  applyAnimations(1);

  // Event listener for when the carousel slide changes
  carousel.addEventListener("slid.bs.carousel", function (e) {
    const activeIndex =
      Array.from(carousel.querySelectorAll(".carousel-item-div")).indexOf(
        e.relatedTarget
      ) + 1;
    applyAnimations(activeIndex); // Apply animation on the new active slide
  });

  // Optional: Trigger animation on initial page load (in case it's not automatically applied)
  window.addEventListener("load", function () {
    applyAnimations(1);
  });
});

// ######################### Smart Features Section Code ##################################

document.addEventListener("DOMContentLoaded", function () {
  const myCarousel = document.getElementById("carouselExampleAutoplaying");
  const tabLinks = document.querySelectorAll('[data-bs-toggle="tab"]');

  // Function to reset and reapply animations
  function reapplyAnimations(container, selector) {
    const words = container.querySelectorAll(selector);

    words.forEach((word, index) => {
      word.style.animation = "none"; // Reset animation
      word.offsetHeight; // Trigger reflow
      word.style.animation = `slideIn 4s forwards ${index}s`; // Reapply animation
    });
  }

  // ### Smart Features Section Animations ###
  tabLinks.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", function (event) {
      const target = document.querySelector(event.target.getAttribute("href"));
      reapplyAnimations(target, ".animated-text-SF .word"); // Apply to Smart Features
    });
  });

  // Trigger animations for the active tab on page load
  const activeTab = document.querySelector(".tab-pane.active.show");
  if (activeTab) reapplyAnimations(activeTab, ".animated-text-SF .word");
});

// Case Study cards

const hoverCards = document.querySelectorAll(".card-item");

hoverCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.classList.add("card-item-open");
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("card-item-open");
  });
});

// For AnimationF
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200, // Animation speed
    once: false, // Animates only once
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
    });
  }
});
