// Intersection Observer for animations
document.addEventListener("DOMContentLoaded", function () {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // If the element is in the viewport
                if (entry.isIntersecting) {
                    // Add the animate class
                    entry.target.classList.add("animate");
                    // Stop observing the element once it's animated
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            // Options for the observer
            threshold: 0.1, // Trigger when at least 10% of the target is visible
            rootMargin: "0px 0px -100px 0px", // Adjust the trigger area
        }
    );

    // Elements to observe - food gallery
    const foodItems = document.querySelectorAll(".food-item");
    foodItems.forEach((item) => {
        observer.observe(item);
    });

    // About Us section
    const aboutUs = document.querySelector(".about-us");
    if (aboutUs) observer.observe(aboutUs);

    // Made for You section
    const madeForYou = document.querySelector(".made-for-you");
    if (madeForYou) observer.observe(madeForYou);

    // Features
    const features = document.querySelectorAll(
        ".feature-card, .feature-card-reverse"
    );
    features.forEach((feature) => {
        observer.observe(feature);
    });

    // Team members
    const teamItems = document.querySelectorAll(".team_item");
    teamItems.forEach((item) => {
        observer.observe(item);
    });
});
