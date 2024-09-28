document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        alert(`Thank you, ${name}. Your message has been sent!`);
        document.getElementById("contact-form").reset();
    }
});
