// Create an Intersection Observer to trigger animations when elements come into view
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                // Once animated, we can stop observing
                observer.unobserve(entry.target);
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
