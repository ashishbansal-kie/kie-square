const rearrangeLayout = () => {
  const isSmallScreen = window.innerWidth < 576;

  // Rearrange layout only for small screens
  if (isSmallScreen) {
    document.querySelectorAll(".row").forEach((row) => {
      const items = Array.from(row.children); // Collect all children in a row
      const images = items.filter((el) => el.classList.contains("contentSectionImg"));
      const texts = items.filter((el) => el.classList.contains("product-content"));

      // Reorder to place each image followed by its respective text
      images.forEach((img, index) => {
        if (texts[index]) {
          row.appendChild(img); // Place image first
          row.appendChild(texts[index]); // Place text after the image
        }
      });
    });
  }
};

// Run immediately
rearrangeLayout();

// Run on window resize
window.addEventListener("resize", rearrangeLayout);
