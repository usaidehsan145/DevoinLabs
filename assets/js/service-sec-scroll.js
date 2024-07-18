document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with class 'scroll-link'
    document.querySelectorAll('.scroll-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID '${targetId}' not found.`);
            }
        });
    });
});
