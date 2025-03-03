document.addEventListener("DOMContentLoaded", () => {
    // Select the form and success message container
    const form = document.getElementById("visitor-form");
    const successMessage = document.getElementById("success-message");

    // Add event listener to handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let valid = true; // Flag to track form validation status

        // Select form input fields
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const date = document.getElementById("date");
        const groupSize = document.getElementById("group-size");

        clearErrors(); // Clear any previous error messages

        // Validate Visitor Name
        if (!name.value.trim()) {
            showError("name-error", "Name is required.");
            valid = false;
        }

        // Validate Email (Required & Format Check)
        if (!email.value.trim() || !validateEmail(email.value)) {
            showError("email-error", "Valid email is required.");
            valid = false;
        }

        // Validate Visit Date
        if (!date.value.trim()) {
            showError("date-error", "Visit date is required.");
            valid = false;
        }

        // Validate Group Size (Must be numeric and at least 1)
        if (!groupSize.value.trim() || isNaN(groupSize.value) || groupSize.value < 1) {
            showError("group-size-error", "Valid group size is required.");
            valid = false;
        }

        // If all fields are valid, proceed with form submission
        if (valid) {
            const visitorData = {
                name: name.value,
                email: email.value,
                date: date.value,
                groupSize: groupSize.value,
                accommodations: document.getElementById("accommodations").value.trim(),
            };

            console.log("Visitor Registered:", visitorData); // Log visitor data for debugging

            // Display success message
            successMessage.innerHTML = `<p class="success">Registration Successful!</p>`;
            
            form.reset(); // Reset form fields after successful submission
        }
    });

    // Function to display error messages
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    // Function to clear all previous error messages
    function clearErrors() {
        document.querySelectorAll(".error").forEach(error => error.textContent = "");
    }

    // Function to validate email format
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
