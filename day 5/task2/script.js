const runBtn = document.querySelector("#runBtn");
const toggleBtn = document.querySelector("#toggleBtn");
runBtn.addEventListener("click", function () {
  const title = document.getElementById("page-title");
  title.textContent = "Selected by ID";
  const notes = document.getElementsByClassName("note");
  console.log("Notes found:", notes.length);
  const inner = document.querySelector("#box .inner");
  inner.textContent = "Selected with a CSS selector";
  const fruits = document.querySelectorAll(".fruit");
  fruits.forEach(function (fruit, index) {
    fruit.textContent = "Fruit number " + (index + 1);
  });
  console.log(document.querySelector("#does-not-exist")); // null
});
toggleBtn.addEventListener("click", function () {
  document.querySelectorAll(".fruit").forEach(function (fruit) {
    fruit.classList.toggle("highlight");
  });
});

const roles = ["Developer", "Designer", "Tester", "Manager"];
const statuses = ["active", "away", "offline"];

const members = [
  { id: 1, name: "Amaka", role: "Developer", status: "active" },
  { id: 2, name: "Tunde", role: "Designer", status: "away" },
  { id: 3, name: "Zainab", role: "Tester", status: "offline" },
];

const team = document.querySelector("#team");

function renderTeam() {
  team.innerHTML = "";

  members.forEach(function (member) {
    const card = document.createElement("div");
    card.className = "member";
    let options = "";
    statuses.forEach(function (s) {
      const selected = s === member.status ? "selected" : "";
      options += `<option value="${s}" ${selected}>${s}</option>`;
    });
    card.innerHTML = `
      <div class="member-info">
        <strong>${member.name}</strong><br>
        <span>${member.role}</span>
      </div>
      <span class="badge ${member.status}">${member.status}</span>
      <select data-id="${member.id}" class="status-select">${options}</select>
      <button data-id="${member.id}" class="role-btn">Change role</button>
    `;
    team.appendChild(card);
  });
}
team.addEventListener("change", function (event) {
  if (event.target.classList.contains("status-select")) {
    const member = members.find(function (m) {
      return m.id === Number(event.target.dataset.id);
    });
    member.status = event.target.value;
    renderTeam();
  }
});
team.addEventListener("click", function (event) {
  if (event.target.classList.contains("role-btn")) {
    const member = members.find(function (m) {
      return m.id === Number(event.target.dataset.id);
    });
    const nextIndex = (roles.indexOf(member.role) + 1) % roles.length;
    member.role = roles[nextIndex];
    renderTeam();
  }
});

renderTeam();
