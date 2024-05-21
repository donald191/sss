document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Basic form validation (extend as needed)
    if (!firstName || !lastName || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Display form values (for demonstration purposes)
    const responseElement = document.getElementById('response');
    responseElement.innerText = `
        Thank you, ${firstName} ${lastName}!
        We have received your message:
        "${message}"
        We will contact you at ${email} or ${phone}.
    `;
    responseElement.style.opacity = 1;

    // Reset form
    document.getElementById('contactForm').reset();
});
