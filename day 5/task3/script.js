const heading = document.querySelector("#heading");
const headingBtn = document.querySelector("#headingBtn");

headingBtn.addEventListener("click", function () {
  heading.textContent = "The heading changed!";
});
const countDisplay = document.querySelector("#count");
const plusBtn = document.querySelector("#plusBtn");
const minusBtn = document.querySelector("#minusBtn");
const resetBtn = document.querySelector("#resetBtn");

let count = 0;

function showCount() {
  countDisplay.textContent = count;
}

plusBtn.addEventListener("click", function () {
  count++;
  showCount();
});
minusBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    showCount();
  }
});

resetBtn.addEventListener("click", function () {
  count = 0;
  showCount();
});
const toggleBtn = document.querySelector("#toggleBtn");
const message = document.querySelector("#message");

toggleBtn.addEventListener("click", function () {
  message.classList.toggle("hidden");

  if (message.classList.contains("hidden")) {
    toggleBtn.textContent = "Show message";
  } else {
    toggleBtn.textContent = "Hide message";
  }
});
const nameInput = document.querySelector("#nameInput");
const liveText = document.querySelector("#liveText");
nameInput.addEventListener("input", function (event) {
  liveText.textContent = event.target.value;
});
