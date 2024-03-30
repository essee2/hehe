document.addEventListener("DOMContentLoaded", function() {
    var fireworksContainer = document.getElementById("fireworks");
    var navigateButton = document.getElementById("navigateBtn");

    navigateButton.addEventListener("click", function() {
        // Start fireworks animation when button clicked
        fireworksContainer.classList.add("active");
        setTimeout(function() {
            // Redirect to second page after animation finishes
            window.location.href = "second_page.html";
        }, 5000); // Adjust the delay to match the fireworks animation duration
    });
});
