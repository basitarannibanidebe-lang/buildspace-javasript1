let tasks = [
  { id: 1, title: "Learn DOM manipulation", completed: false },
];
let nextId = 2;
let currentFilter = "all"; 
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const formError = document.querySelector("#formError");
const taskList = document.querySelector("#taskList");
const emptyState = document.querySelector("#emptyState");
const remaining = document.querySelector("#remaining");
const clearCompletedBtn = document.querySelector("#clearCompleted");
const filterButtons = document.querySelectorAll(".filter-btn");
function addTask(title) {
  tasks.push({ id: nextId, title: title, completed: false });
  nextId++;
}
function toggleTask(id) {
  const task = tasks.find(function (t) {
    return t.id === id;
  });
  task.completed = !task.completed;
}
function deleteTask(id) {
  tasks = tasks.filter(function (t) {
    return t.id !== id;
  });
}
function clearCompleted() {
  tasks = tasks.filter(function (t) {
    return !t.completed;
  });
}
function setFilter(filter) {
  currentFilter = filter;
}
function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter(function (t) {
      return !t.completed;
    });
  }
  if (currentFilter === "completed") {
    return tasks.filter(function (t) {
      return t.completed;
    });
  }
  return tasks;
}
function getRemainingCount() {
  return tasks.filter(function (t) {
    return !t.completed;
  }).length;
}
function getEmptyMessage() {
  if (tasks.length === 0) {
    return "No tasks yet. Add your first task above!";
  }
  if (currentFilter === "active") {
    return "No active tasks. Nice work!";
  }
  return "No completed tasks yet.";
}
function renderTasks() {
  taskList.innerHTML = "";
  const visibleTasks = getVisibleTasks();

  visibleTasks.forEach(function (task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.completed) {
      li.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const title = document.createElement("span");
    title.className = "task-title";
    title.textContent = task.title; // textContent is safer than innerHTML for user text

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    li.append(checkbox, title, deleteBtn);
    taskList.append(li);
  });
  if (visibleTasks.length === 0) {
    emptyState.textContent = getEmptyMessage();
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
  const count = getRemainingCount();
  remaining.textContent = count === 1 ? "1 task left" : `${count} tasks left`;
  filterButtons.forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.filter === currentFilter);
  });
}
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const title = taskInput.value.trim();

  if (title === "") {
    formError.textContent = "Please type a task before adding.";
    return;
  }

  formError.textContent = "";
  addTask(title);
  taskInput.value = "";
  renderTasks();
});
taskList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (event.target.classList.contains("delete-btn")) {
    deleteTask(id);
    renderTasks();
  }
});
taskList.addEventListener("change", function (event) {
  if (event.target.type === "checkbox") {
    const id = Number(event.target.closest("li").dataset.id);
    toggleTask(id);
    renderTasks();
  }
});
filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    setFilter(btn.dataset.filter);
    renderTasks();
  });
});
clearCompletedBtn.addEventListener("click", function () {
  clearCompleted();
  renderTasks();
});

renderTasks();
