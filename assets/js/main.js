// Arreglo inicial con 3 tareas
let tasks = [
  { id: 1, description: "Ir de compras al supermercado", completed: false },
  { id: 2, description: "Agendar hora medica", completed: true },
  {
    id: 3,
    description: "LLamar a mi hermana por su cumpleaños",
    completed: false,
  },
  { id: 4, description: "Comprar papel Fotografico", completed: false },
  { id: 5, description: "Reunion", completed: true },
];

const taskList = document.getElementById("taskList");
const totalSpan = document.getElementById("totalTarea");
const completedSpan = document.getElementById("tareaCompleteda");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");

function renderTareas() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
            <span>${task.description}</span>
            <div class="btn-icon">
                <button onclick="toggleTask(${task.id})"><i class="fa-solid fa-check" style="color: #07b023;"></i></i></button>
                <button onclick="deleteTask(${task.id})"><i class="fa-solid fa-x" style="color: #da0707;"></i></button>
            </div>
        `;
    taskList.appendChild(li);
  });
  updateSummary();
}

btnAgregarTarea.addEventListener("click", function addTask() {
  const input = document.getElementById("taskInput");
  const description = input.value.trim();
  if (description !== "") {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    tasks.push(newTask);
    input.value = "";
    renderTareas();
  }
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTareas();
}

function toggleTask(id) {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTareas();
  }
}

function updateSummary() {
  totalSpan.textContent = tasks.length;
  completedSpan.textContent = tasks.filter((task) => task.completed).length;
}

document.addEventListener("DOMContentLoaded", renderTareas);
