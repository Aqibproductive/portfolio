// Scroll btn

// Get a reference to the button element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Add a click event listener to scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    // Scroll to the top of the document with a smooth behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
