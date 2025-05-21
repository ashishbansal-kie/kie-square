

// ##################################### Navbar ###########################
// Select all dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

// Handle hover and interaction for dropdowns
dropdowns.forEach((dropdown) => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  // Open the dropdown on hover
  dropdown.addEventListener("mouseenter", () => {
    // Hide all other dropdowns
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        const otherDropdownMenu = otherDropdown.querySelector(".dropdown-menu");
        toggleDropdown(otherDropdownMenu, false);
      }
    });
    toggleDropdown(dropdownMenu, true);
  });

  dropdown.addEventListener("mouseleave", () =>
    toggleDropdown(dropdownMenu, true)
  );

  // Keep dropdown open if interacting with the menu
  dropdownMenu.addEventListener("mouseenter", () =>
    toggleDropdown(dropdownMenu, true)
  );
  dropdownMenu.addEventListener("mouseleave", () =>
    toggleDropdown(dropdownMenu, true)
  );
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    if (!dropdown.contains(event.target)) {
      toggleDropdown(dropdownMenu, false);
    }
  });
});

// Close the dropdown if hovering outside
document.addEventListener(
  "mouseenter",
  (event) => {
    dropdowns.forEach((dropdown) => {
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      if (!dropdown.contains(event.target)) {
        toggleDropdown(dropdownMenu, false);
      }
    });
  },
  true
); // true to use capture phase for immediate check

// Helper function to toggle dropdown visibility
function toggleDropdown(menu, show) {
  menu.style.display = show ? "block" : "none";
  menu.style.opacity = show ? "1" : "0";
  menu.style.visibility = show ? "visible" : "hidden";
}

// ######################### Our Expertise Section ########################
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

// ############### Industry section ##############
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".industry-images img");
  const buttons = document.querySelectorAll(".expand-icon");
  const content = document.getElementById("industryContent");

  function activateImage(img) {
    images.forEach((image) => {
      image.classList.remove("active");
      image.nextElementSibling.classList.remove("horizontal");
    });
    img.classList.add("active");
    img.nextElementSibling.classList.add("horizontal");
    content.innerHTML = `<h3>${img.getAttribute(
      "data-title"
    )}</h3><p>${img.getAttribute("data-content")}</p>`;
  }

  images.forEach((img) => {
    img.addEventListener("click", function () {
      activateImage(this);
    });
  });

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      activateImage(images[index]);
    });
  });
});
// ############### Industry section end##############
