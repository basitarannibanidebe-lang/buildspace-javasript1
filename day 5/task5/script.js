const form = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector("#successMessage");
const MIN_PASSWORD_LENGTH = 8;
function validateName(name) {
  if (name === "") {
    return "Name is required. Please type your name.";
  }
  return "";
}

function validateEmail(email) {
  if (email === "") {
    return "Email is required. Please type your email.";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "This email looks wrong. Use a format like name@example.com.";
  }
  return "";
}

function validatePassword(password) {
  if (password === "") {
    return "Password is required. Please choose a password.";
  }
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password is too short. Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return "";
}

function showError(input, message) {
  const errorElement = document.querySelector("#" + input.id + "Error");
  errorElement.textContent = message;

  if (message === "") {
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  showError(nameInput, nameError);
  showError(emailInput, emailError);
  showError(passwordInput, passwordError);

  const isValid = nameError === "" && emailError === "" && passwordError === "";

  if (isValid) {
    successMessage.textContent = `Welcome, ${name}! Your account was created.`;
    successMessage.classList.remove("hidden");
    form.reset(); // clear the form
  } else {
    successMessage.classList.add("hidden");
  }
});
