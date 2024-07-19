document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const sliderMenu = document.getElementById("sliderMenu");
    const closeButton = document.getElementById("closeButton");
    const menuLinks = sliderMenu.querySelectorAll('a');

    menuButton.addEventListener("click", function() {
        sliderMenu.classList.add("active");
    });

    closeButton.addEventListener("click", function() {
        sliderMenu.classList.remove("active");
    });

    // Close the menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            sliderMenu.classList.remove("active");
        });
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!sliderMenu.contains(event.target) && !menuButton.contains(event.target)) {
            sliderMenu.classList.remove("active");
        }
    });
});
    
