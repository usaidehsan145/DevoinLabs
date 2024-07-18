document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.testimonial-thumbnails img');
    const contents = document.querySelectorAll('.testimonial-content');
    let currentIndex = 0;
    let intervalId;

    // Function to activate content by index
    function activateContentByIndex(index) {
        const activeContent = document.querySelector('.testimonial-content.active');
        const newContent = contents[index];

        if (activeContent === newContent) return;

        activeContent.classList.remove('active');
        activeContent.classList.add('inactive');
        newContent.classList.add('active');

        setTimeout(() => {
            activeContent.classList.remove('inactive');
        }, 500); // Match this timeout to the transition duration in CSS
    }

    // Add click event listeners to thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            clearInterval(intervalId); // Stop the automatic swiping
            activateContentByIndex(index);
            currentIndex = index; // Update current index
            startAutoSwipe(); // Restart the automatic swiping
        });
    });

    // Function to start automatic swiping
    function startAutoSwipe() {
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % contents.length;
            activateContentByIndex(currentIndex);
        }, 10000); // 10 seconds
    }

    // Start automatic swiping on page load
    startAutoSwipe();
});
