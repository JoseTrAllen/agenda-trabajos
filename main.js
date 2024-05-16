
const bodyElement = document.body;
const modeDiv = document.getElementById("mode-container");
const darkIcon = document.getElementById("dark-mode");
const lightIcon = document.getElementById("light-mode");
const projectH1 = document.getElementById("span-h1")
let id = 0;
let state;// Estado puede ser idea, proceso, terminado.
let array = [];


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

const addIdea = () => {
  state = "idea"
  const nuevoArray = {
    nombre: textInput.value,
    id: id,
    estado: state
  }
  const createLi = document.createElement("li");
  createLi.id = id;
  createLi.classList.add("ul-li");
  createLi.setAttribute("estado", nuevoArray.estado);
  toDoList.appendChild(createLi);
  createLi.innerText = textInput.value;
  array.push(nuevoArray);
  addButton(createLi)
  addThrash(createLi)
}

const addButton = (li) => {
  const nuevoArray = {
    nombre: textInput.value,
    id: id,
    estado: state
  }
  state = "en proceso";
  li.setAttribute("estado", nuevoArray.estado);
  const createButtonAdd = document.createElement("span");
  createButtonAdd.id = "add-Button-li";
  createButtonAdd.classList.add("material-symbols-outlined");
  createButtonAdd.innerText = "add_task";
  li.appendChild(createButtonAdd);
  createButtonAdd.addEventListener("click", () => {

    console.log(array);
    

    li.remove();
    inProcessList.appendChild(li);
  })
}

const addThrash = (li) => {
  const createButtonTrash = document.createElement("span");
  createButtonTrash.id = "add-Button-trash";
  createButtonTrash.classList.add("material-symbols-outlined");
  createButtonTrash.innerText = "delete";
  li.appendChild(createButtonTrash);
  createButtonTrash.addEventListener("click", () => {
    console.log("Funciono");
    li.remove();
  })
}

inputButtonAdd.addEventListener("click", () => {
  if (textInput.value === "") {
    inputButtonAdd.disabled = true;
  } else {
    addIdea();
    id++;
    textInput.value = "";
    console.log(array);
  }
});




/* Seguramente tenga que crear un contador que vaya aumentando cada vez
que haga click en inputButtonAdd. Así puedo relacionar ese contador con un 
set-atribute a cada <li> junto con sus botones. De esa manera creo que es CompositionEventpuedo añadir esa idea a tarea por hacer o borrarla y no añadir todas. Aunque primero tengo que comprobar la reacción 
de darle a un botón y ver qué pasa con todos los elementos <li> que est´ñen creados.*/


