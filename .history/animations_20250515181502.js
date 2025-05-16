// Create an Intersection Observer to trigger animations when elements come into view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the animate class and keep it
                entry.target.classList.add("animate");
            }
        });
    },
    {
        // Start animation when element is 20% visible
        threshold: 0.2,
        // Start animation slightly before element comes into view
        rootMargin: "0px 0px -100px 0px",
    }
);

// Elements to animate
const elementsToAnimate = [
    // Hero section food items
    ...document.querySelectorAll(".food-item"),
    // About Us section
    document.querySelector(".about-us"),
    // Made for You section
    document.querySelector(".made-for-you"),
    // Feature cards
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".feature-card-reverse"),
    // Team section
    document.querySelector(".team-section"),
    ...document.querySelectorAll(".team_item"),
];

// Start observing all elements
elementsToAnimate.forEach((element) => {
    if (element) {
        observer.observe(element);
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const menu = document.querySelector(".menu");

mobileMenuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});

// Close menu when clicking on a menu item
const menuItems = document.querySelectorAll(".menu-text");
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});
