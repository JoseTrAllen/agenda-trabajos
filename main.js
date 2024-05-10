
const bodyElement = document.body;
const modeDiv = document.getElementById("mode-container");
const darkIcon = document.getElementById("dark-mode");
const lightIcon = document.getElementById("light-mode");
const projectH1 = document.getElementById("span-h1")

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

//

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
//

const addIdea = () => {
  const createLi = document.createElement("li")
  toDoList.appendChild(createLi);
  createLi.innerText = textInput.value;
  textInput.value = "";

  addButton(createLi)
  addThrash(createLi)
}

const addButton = (li) => {
  const createButtonAdd = document.createElement("span");
  createButtonAdd.id = "add-Button-li";
  createButtonAdd.classList.add("material-symbols-outlined");
  createButtonAdd.innerText = "add_task";
  li.appendChild(createButtonAdd);
}

const addThrash = (li) => {
  const createButtonTrash = document.createElement("span");
  createButtonTrash.id = "add-Button-trash";
  createButtonTrash.classList.add("material-symbols-outlined");
  createButtonTrash.innerText = "delete";
  li.appendChild(createButtonTrash);
}

inputButtonAdd.addEventListener("click", () => {

  if (textInput.value === "") {
    inputButtonAdd.disabled = true;
  } else {
    addIdea();
  }
});
/*
const createButtonTrash = document.getElementById("add-Button-trash");

createButtonTrash.addEventListener("mouse-over", () => {
  li
})
*/

