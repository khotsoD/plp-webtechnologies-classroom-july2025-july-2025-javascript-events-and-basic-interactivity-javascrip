// Event: Count Button
let count = 0;
const counterSpan = document.getElementById("counter");
const countButton = document.getElementById("countButton");

countButton.addEventListener("click", () => {
  count++;
  counterSpan.textContent = count;
});

// Event: Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Event: Form Submission with Custom Validation
const form = document.getElementById("contactForm");
const errorEl = document.getElementById("formError");
const successEl = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent real submission
  errorEl.textContent = "";
  successEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
  }

  if (!validateEmail(email)) {
    errors.push("Valid email is required.");
  }

  if (message.length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  if (errors.length > 0) {
    errorEl.textContent = errors.join(" ");
  } else {
    successEl.textContent = "Form submitted successfully!";
    form.reset();
  }
});

function validateEmail(email) {
  // Basic regex for demonstration
  return /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email);
}
