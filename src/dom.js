import { allProjects, currentProjectIndex } from "./index.js";
import { createTodoItem, fillInPreviousData, clearDomProject } from "./logic";
import {
  createTextInput,
  createDateInput,
  createSelect,
  createCheckbox,
  createBtn,
  createTodoDescription,
  createDueDate,
  createTodoPriorityText,
  createTodoContainer,
} from "./createElementsFunctions.js";

const allListItemsContainer = document.querySelector(".allListItemsContainer"); // Container for todo list items

// APPEND THE TODO LIST TO THE DOM
const printTodoListToDom = (selectedListItem = undefined) => {
  clearDomProject();
  for (
    var i = 0;
    i < Object.keys(allProjects[currentProjectIndex]).length;
    i++
  ) {
    const todoListItem = createTodoContainer();
    todoListItem.setAttribute("value", [i]);
    allProjects[currentProjectIndex][i].todoListOrder = i;
    todoListItem.classList.add();
    if (i == selectedListItem) {
      editListItemFormat(todoListItem, i);
    } else {
      confirmedListItemFormat(todoListItem, i);
    }
  }
  if (allProjects.length > 2 || allProjects[1].length > 0) {
    let allProjectsSerialized = JSON.stringify(allProjects);
    localStorage.setItem("storedProjects", allProjectsSerialized);
  } else {
    localStorage.clear();
  }
};

const editListItemFormat = (todoListItem, i) => {
  let textInput = createTextInput();

  // Create Select input for task priority
  let prioritySelectInput = createSelect();
  prioritySelectInput.classList.add("priorityInput");

  // Create date input
  let dateInput = createDateInput();

  // Fill in input to what was previous entered
  if (allProjects[currentProjectIndex][i] != undefined) {
    fillInPreviousData(textInput, prioritySelectInput, dateInput, i);
  }

  // Create cancel and submit btns
  let cancelBtn = createBtn("cancel");
  cancelBtn.addEventListener("click", function () {
    cancelBtnListener(todoListItem);
  });
  let submitBtn = createBtn("submit");
  submitBtn.addEventListener("click", function () {
    submitListItem(todoListItem);
  });

  // Container for styling
  const priorityBtnContainer = createEditPriorityBtnContainer(
    prioritySelectInput,
    dateInput,
    cancelBtn,
    submitBtn
  );

  return appendEditListItemToDom(todoListItem, priorityBtnContainer, textInput);
};

const confirmedListItemFormat = (todoListItem, i) => {
  const checkbox = createCheckbox();
  checkbox.checked = allProjects[currentProjectIndex][i].completed;

  const todoDescription = createTodoDescription(
    allProjects[currentProjectIndex][i].title
  );
  const todoPriority = createTodoPriorityText(
    allProjects[currentProjectIndex][i].priority
  );
  const dueDate = createDueDate(allProjects[currentProjectIndex][i].dueDate);
  // Used for applying changes to original array when list items are checked in allProjects[0]
  checkbox.setAttribute(
    "originalProjectIndex",
    allProjects[currentProjectIndex][i].originalProjectIndex
  );
  checkbox.setAttribute(
    "todoListOrder",
    allProjects[currentProjectIndex][i].todoListOrder
  );
  checkbox.addEventListener("change", function (event) {
    checkboxEventFunc(event, i);
  });

  // Create Edit and Delete Btn
  const editBtn = createBtn("edit");
  editBtn.addEventListener("click", editBtnListener);
  const deleteBtn = createBtn("delete");
  deleteBtn.addEventListener("click", deleteListItem);

  // Container for styling
  const priorityBtnContainer = createConfirmedPriorityBtnContainer(
    todoPriority,
    dueDate,
    editBtn,
    deleteBtn
  );
  return appendConfirmedListItemToDom(
    todoListItem,
    priorityBtnContainer,
    checkbox,
    todoDescription,
    priorityBtnContainer
  );
};

// Priority and button div container for todo list items for styling
const createEditPriorityBtnContainer = (
  prioritySelectInput,
  dateInput,
  cancelBtn,
  submitBtn
) => {
  let priorityBtnContainer = document.createElement("div");
  priorityBtnContainer.classList.add("priorityBtnContainer");
  return appendEditPriorityContainer(
    priorityBtnContainer,
    prioritySelectInput,
    dateInput,
    cancelBtn,
    submitBtn
  );
};

const appendEditPriorityContainer = (
  priorityBtnContainer,
  prioritySelectInput,
  dateInput,
  cancelBtn,
  submitBtn
) => {
  priorityBtnContainer.appendChild(prioritySelectInput);
  priorityBtnContainer.appendChild(dateInput);
  priorityBtnContainer.appendChild(cancelBtn);
  priorityBtnContainer.appendChild(submitBtn);
  return priorityBtnContainer;
};

const createConfirmedPriorityBtnContainer = (
  todoPriority,
  dueDate,
  editBtn,
  deleteBtn
) => {
  let priorityBtnContainer = document.createElement("div");
  priorityBtnContainer.classList.add("priorityBtnContainer");
  return appendConfirmedPriorityContainer(
    priorityBtnContainer,
    todoPriority,
    dueDate,
    editBtn,
    deleteBtn
  );
};

const appendConfirmedPriorityContainer = (
  priorityBtnContainer,
  todoPriority,
  dueDate,
  editBtn,
  deleteBtn
) => {
  priorityBtnContainer.appendChild(todoPriority);
  priorityBtnContainer.appendChild(dueDate);
  priorityBtnContainer.appendChild(editBtn);
  priorityBtnContainer.appendChild(deleteBtn);
  return priorityBtnContainer;
};

const appendEditListItemToDom = (
  todoListItem,
  priorityBtnContainer,
  textInput
) => {
  todoListItem.appendChild(textInput);
  todoListItem.appendChild(priorityBtnContainer);
  allListItemsContainer.appendChild(todoListItem);
};

const appendConfirmedListItemToDom = (
  todoListItem,
  priorityBtnContainer,
  checkbox,
  todoDescription
) => {
  todoListItem.appendChild(checkbox);
  todoListItem.appendChild(todoDescription);
  todoListItem.appendChild(priorityBtnContainer);
  allListItemsContainer.appendChild(todoListItem);
};

// Dynamic Btn Listener Functions
const submitListItem = (listItem) => {
  // eslint-disable-next-line no-undef
  addItemBtn.disabled = false;
  createTodoItem(listItem);
  printTodoListToDom();
};

const cancelBtnListener = () => {
  // eslint-disable-next-line no-undef
  addItemBtn.disabled = false;
  printTodoListToDom();
};

const editBtnListener = (event) => {
  const selectedListItem =
    event.target.parentNode.parentNode.getAttribute("value");
  printTodoListToDom(selectedListItem);
};

const deleteListItem = (event) => {
  allProjects[currentProjectIndex].splice(
    event.target.parentNode.parentNode.getAttribute("value"),
    1
  );
  clearDomProject();
  printTodoListToDom();
};

// Checkbox Event Listener
const checkboxEventFunc = (event, i) => {
  // Used for applying changes to original array
  let originalProjectIndex = event.target.getAttribute("originalProjectIndex");
  let todoListOrder = event.target.getAttribute("todoListOrder");
  // Used for adjusting list item if it's in originalProject[0]
  let currentItemOrder = event.target.parentNode.getAttribute("value");
  if (event.target.checked) {
    checkedCheckbox(originalProjectIndex, todoListOrder, currentItemOrder, i);
    printTodoListToDom();
  } else {
    notCheckedCheckbox(
      originalProjectIndex,
      todoListOrder,
      currentItemOrder,
      i
    );
    printTodoListToDom();
  }
};

const checkedCheckbox = (
  originalProjectIndex,
  todoListOrder,
  currentItemOrder,
  i
) => {
  if (currentProjectIndex == 0) {
    allProjects[originalProjectIndex][todoListOrder].completed = true;
    allProjects[0][currentItemOrder].completed = true;
  } else {
    allProjects[currentProjectIndex][i].completed = true;
  }
};

const notCheckedCheckbox = (
  originalProjectIndex,
  todoListOrder,
  currentItemOrder,
  i
) => {
  if (currentProjectIndex == 0) {
    allProjects[originalProjectIndex][todoListOrder].completed = false;
    allProjects[0][currentItemOrder].completed = false;
  } else {
    allProjects[currentProjectIndex][i].completed = false;
  }
};

export {
  printTodoListToDom,
  editListItemFormat,
  submitListItem,
  cancelBtnListener,
  editBtnListener,
  deleteListItem,
};
