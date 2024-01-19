// Get all elements with class 'scrollButton'
const scrollButtons = document.querySelectorAll('.scroll-button');

// Add click event listener to each button
scrollButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the target area id from the 'data-target' attribute
        const targetId = button.getAttribute('data-target');
        const ButtonId = button.getAttribute('id');

        // Get the position of the target area
        const targetPosition = document.getElementById(targetId).offsetTop;

        // Scroll smoothly to the target area
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});


