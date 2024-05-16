
const bodyElement = document.body;
const modeDiv = document.getElementById("mode-container");
const darkIcon = document.getElementById("dark-mode");
const lightIcon = document.getElementById("light-mode");
const projectH1 = document.getElementById("span-h1")
let tasks = [];

const date = new Date();
/*const day = date.getDay();
const month = date.getMonth() + 1;
const year = date.getFullYear()
*/
const completeDate = date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const dateParagraph = document.getElementById("date-paragraph")
dateParagraph.innerText = `Hoy es ${completeDate}`;

const textInput = document.getElementById("to-do-input");
const inputButtonAdd = document.getElementById("add-input-button");
const toDoList = document.getElementById("todo-list");

const inProcessList = document.getElementById("in-process");

const lightMode = () => {
  bodyElement.style.backgroundColor = "#fefefe";
  dateParagraph.style.color = "#676767"
  projectH1.style.color = "#676767"
}

const darkMode = () => {
  bodyElement.style.backgroundColor = "#111111";
  dateParagraph.style.color = "whitesmoke"
  projectH1.style.color = "whitesmoke"
}

darkIcon.addEventListener("click", darkMode);
lightIcon.addEventListener("click", lightMode);

const addArray = (name) => {
  return {
    name: name,
    id: tasks.length,
    state: "Idea"
  }
}

const addNameTask = () => {
  const taskName = textInput.value;
  return addArray(taskName);
}

const changeState = (dataArrayObject) => {
  tasks = tasks.map((task) => {
    if (task.id === dataArrayObject.id) {
      return {
        ...task,
        state: "to-do"
      }
    }
    return task;
  })
}

const removeObjectArray = (dataArrayObject) => {
  return tasks = tasks.filter((task) => task.id !== dataArrayObject.id);
}

const addIdea = () => {
  const createLi = document.createElement("li");
  const dataArrayObject = addNameTask();
  createLi.id = dataArrayObject.id;
  createLi.classList.add("ul-li");
  createLi.setAttribute("state", dataArrayObject.state);
  toDoList.appendChild(createLi);
  createLi.innerText = dataArrayObject.name;
  tasks.push(dataArrayObject);
  addButton(createLi, dataArrayObject);
  addThrash(createLi, dataArrayObject); 
}

const addButton = (li, dataArrayObject) => {

  li.setAttribute("state", dataArrayObject.state);
  const createButtonAdd = document.createElement("span");
  createButtonAdd.id = "add-Button-li";
  createButtonAdd.classList.add("material-symbols-outlined");
  createButtonAdd.innerText = "add_task";
  li.appendChild(createButtonAdd);
  createButtonAdd.addEventListener("click", () => {

    li.remove();
    inProcessList.appendChild(li);
    changeState(dataArrayObject);
    console.log(tasks);
  })
}

const addThrash = (li, dataArrayObject) => {
  const createButtonTrash = document.createElement("span");
  createButtonTrash.id = "add-Button-trash";
  createButtonTrash.classList.add("material-symbols-outlined");
  createButtonTrash.innerText = "delete";
  li.appendChild(createButtonTrash);
  createButtonTrash.addEventListener("click", () => {
    li.remove();
    removeObjectArray(dataArrayObject)
    console.log(tasks);
  })
}

inputButtonAdd.addEventListener("click", () => {
  if (textInput.value === "") {
    inputButtonAdd.disabled = true;
  } else {
    addIdea();
    textInput.value = "";
    console.log(tasks);
  }
});




/* Seguramente tenga que crear un contador que vaya aumentando cada vez
que haga click en inputButtonAdd. Así puedo relacionar ese contador con un 
set-atribute a cada <li> junto con sus botones. De esa manera creo que es CompositionEventpuedo añadir esa idea a tarea por hacer o borrarla y no añadir todas. Aunque primero tengo que comprobar la reacción 
de darle a un botón y ver qué pasa con todos los elementos <li> que est´ñen creados.*/


