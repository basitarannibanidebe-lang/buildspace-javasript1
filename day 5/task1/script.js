const heading = document.querySelector("#title");
const paragraph = document.querySelector("#text");
const photo = document.querySelector("#photo");
const listItems = document.querySelectorAll("#list li");
const button = document.querySelector("#changeBtn");
button.addEventListener("click", function () {
  heading.textContent = "The heading was changed by JavaScript!";
  paragraph.textContent =
    "JavaScript changed this paragraph without reloading the page.";
  photo.setAttribute(
    "src",
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='120'><rect width='200' height='120' fill='tomato'/></svg>",
  );
  paragraph.classList.add("highlight");
  listItems[1].textContent = "Item two was changed";
});
