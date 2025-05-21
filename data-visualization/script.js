document.addEventListener("DOMContentLoaded", () => {
    const logoContainer = document.querySelector(".logo-container");
    const logos = logoContainer.innerHTML; // Save existing logos
    logoContainer.innerHTML += logos; // Duplicate logos
});


// ##################################### Navbar ###########################
// Select all dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

// Handle hover and interaction for dropdowns
dropdowns.forEach((dropdown) => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Open the dropdown on hover
    dropdown.addEventListener('mouseenter', () => {
        // Hide all other dropdowns
        dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                const otherDropdownMenu = otherDropdown.querySelector('.dropdown-menu');
                toggleDropdown(otherDropdownMenu, false);
            }
        });
        toggleDropdown(dropdownMenu, true);
    });

    dropdown.addEventListener('mouseleave', () => toggleDropdown(dropdownMenu, true));

    // Keep dropdown open if interacting with the menu
    dropdownMenu.addEventListener('mouseenter', () => toggleDropdown(dropdownMenu, true));
    dropdownMenu.addEventListener('mouseleave', () => toggleDropdown(dropdownMenu, true));
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (!dropdown.contains(event.target)) {
            toggleDropdown(dropdownMenu, false);
        }
    });
});

// Close the dropdown if hovering outside
document.addEventListener('mouseenter', (event) => {
    dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        if (!dropdown.contains(event.target)) {
            toggleDropdown(dropdownMenu, false);
        }
    });
}, true);  // true to use capture phase for immediate check




// Helper function to toggle dropdown visibility
function toggleDropdown(menu, show) {
    menu.style.display = show ? 'block' : 'none';
    menu.style.opacity = show ? '1' : '0';
    menu.style.visibility = show ? 'visible' : 'hidden';
}

// Initialize Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});