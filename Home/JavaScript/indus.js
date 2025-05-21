document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".slide-track");
  let isHovered = false;

  document.querySelectorAll(".slides").forEach((item) => {
    item.addEventListener("mouseover", () => {
      isHovered = true;
      carousel.style.animationPlayState = "paused";
    });

    item.addEventListener("mouseout", () => {
      isHovered = false;
      carousel.style.animationPlayState = "running";
    });
  });

  let currentIndex = 0;

  window.moveSlide = (direction) => {
    currentIndex += direction;
    const totalSlides = document.querySelectorAll(".slides").length / 2;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    console.log(`Moving to slides ${currentIndex}`);
    carousel.style.transform = `translateX(-${
      currentIndex * 400
    }px)`; /* Adjusted for increased width */
  };
});
