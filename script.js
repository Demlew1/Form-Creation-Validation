document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const form = document.getElementById("registration-form");
  if (!form) {
    console.error('Form with id="registration-form" not found!');
    return;
  }

  const feedbackDiv = document.getElementById("form-feedback");
  if (!feedbackDiv) {
    console.error('Feedback div with id="form-feedback" not found!');
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long.");
    }

    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.indexOf("@") > email.lastIndexOf(".")
    ) {
      isValid = false;
      messages.push(
        'Email must include "@" and "." characters in the correct format.'
      );
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long.");
    }

    feedbackDiv.style.display = "block"; // Make feedbackDiv visible

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green color for success
    } else {
      feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
      feedbackDiv.style.color = "#dc3545"; // Red color for errors
    }
  });
});
