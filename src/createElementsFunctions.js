import { allProjects, currentProjectIndex } from "./index.js";

// STYLING DIVS FUNCTIONS
// Todo list item container
const createTodoContainer = () => {
  let todoListItem = document.createElement("div");
  todoListItem.classList.add("listItem");
  if (allProjects[currentProjectIndex] == "") {
    // eslint-disable-next-line no-undef
    editListItemFormat(todoListItem);
  }
  return todoListItem;
};

// FUNCTIONS FOR CREATING INPUTS
const createTextInput = () => {
  let textInput = document.createElement("input");
  textInput.setAttribute("type", "text");
  textInput.classList.add("itemTextInput");
  textInput.setAttribute("rows", "2");
  return textInput;
};

const createDateInput = () => {
  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.classList.add("dateInput");
  return dateInput;
};

// Creates priority select input
const createSelect = () => {
  const selectArr = ["Low Priority", "Medium Priority", "High Priority"];
  //Create and append select list
  const selectList = document.createElement("select");
  selectList.id = "selectList";
  //Create and append the options
  for (var i = 0; i < selectArr.length; i++) {
    const option = document.createElement("option");
    option.value = selectArr[i];
    option.text = selectArr[i];
    selectList.appendChild(option);
  }
  return selectList;
};

const createCheckbox = () => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  return checkbox;
};

const createBtn = (btnName) => {
  const btn = document.createElement("button");
  btn.classList.add("listItemBtn", btnName);
  btn.textContent = capitalizeFirstLetter(btnName);

  return btn;
};

const createProjectBtn = (newProjectName) => {
  let newProjectBtn = document.createElement("button");
  newProjectBtn.textContent = newProjectName;
  newProjectBtn.classList.add("projectNameBtn");
  newProjectBtn.setAttribute("index", (allProjects.length - 1));
  return newProjectBtn;
};

// Capitalize first letter for button text
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Converts to text for confirmed todo item
const createTodoDescription = (todoDescription) => {
  const todoTextContent = document.createElement("p");
  todoTextContent.classList.add("todoDescription");
  todoTextContent.textContent = todoDescription;
  return todoTextContent;
};

const createDueDate = (dueDate) => {
  const dueDateText = document.createElement("p");
  dueDateText.classList.add("dueDate");
  dueDateText.textContent = dueDate;
  return dueDateText;
};

// Converts chosen todo option from select input to p element
const createTodoPriorityText = (todoListPriorityText) => {
  const todoPriority = document.createElement("p");
  todoPriority.classList.add("todoPriority");
  todoPriority.textContent = todoListPriorityText;
  return todoPriority;
};

export {
  createTodoContainer,
  createTextInput,
  createDateInput,
  createSelect,
  createCheckbox,
  createBtn,
  createProjectBtn,
  createTodoDescription,
  createDueDate,
  createTodoPriorityText,
};
