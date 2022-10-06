import { allProjects, currentProjectIndex } from "./index.js";
import { createTodoItem, fillInPreviousData, clearDomProject, sortByDate } from "./logic";
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
const printTodoListToDom = (selectedListItem = undefined, selectedListItemId=undefined) => {
  clearDomProject();
  if (allProjects[currentProjectIndex].length > 0) {
    for (
      var i = 0;
      i < Object.keys(allProjects[currentProjectIndex]).length;
      i++
    ) {
      const todoListItem = createTodoContainer();
      todoListItem.setAttribute("value", [i]);
      allProjects[currentProjectIndex] = sortByDate(allProjects[currentProjectIndex])
      allProjects[currentProjectIndex][i].currentListOrder = i;
      todoListItem.classList.add();
      if (i == selectedListItem) {
        editListItemFormat(todoListItem, i, selectedListItemId);
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
  }
};

const editListItemFormat = (todoListItem, i, selectedListItemId=undefined) => {
  if (selectedListItemId !== undefined) {
    todoListItem.setAttribute("todoId", selectedListItemId)
  }
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
    const addItemBtn = document.querySelector("#addItemBtn");
    addItemBtn.disabled = false;
    cancelBtnListener(todoListItem);
  });
  let submitBtn = createBtn("submit");
  submitBtn.addEventListener("click", function () {
    const addItemBtn = document.querySelector("#addItemBtn");
    addItemBtn.disabled = false;
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

// Foobar
const confirmedListItemFormat = (todoListItem, i) => {
  todoListItem.setAttribute("originalProjectIndex", allProjects[currentProjectIndex][i].originalProjectIndex);
  todoListItem.setAttribute("todoId", allProjects[currentProjectIndex][i].todoId);
  const checkbox = createCheckbox();
  let originalProjectIndex;
  if (currentProjectIndex.length > 0) {
    originalProjectIndex = todoListItem.getAttribute("originalProjectIndex")
  } else {
    originalProjectIndex = currentProjectIndex;
  }

  // if (todoListItem.getAttribute("originalProjectIndex")) {
  //   originalProjectIndex = todoListItem.getAttribute("originalProjectIndex")
  // } else {
  //   originalProjectIndex = currentProjectIndex;
  // }
  checkbox.checked = allProjects[originalProjectIndex][i].completed;

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
    checkboxEventFunc(event);
  });

  // Create Edit and Delete Btn
  const editBtn = createBtn("edit");
  editBtn.addEventListener("click", editBtnListener);
  const deleteBtn = createBtn("delete");
  deleteBtn.addEventListener("click", deleteListItem);

  const checkboxTodoContainer = createCheckboxTodoContainer(checkbox, todoDescription);

  // Container for styling
  const priorityBtnContainer = createConfirmedPriorityBtnContainer(
    todoPriority,
    dueDate,
    editBtn,
    deleteBtn
  );
  return appendConfirmedListItemToDom(
    todoListItem,
    checkboxTodoContainer,
    priorityBtnContainer
  );
};

// Priority and button div container for todo list items for styling
const createCheckboxTodoContainer = (checkbox, todoDescription) => {
  const checkboxTodoContainer = document.createElement('div');
  checkboxTodoContainer.classList.add('checkboxTodoContainer')
  return appendCheckboxTodoContainer(checkboxTodoContainer, checkbox, todoDescription);
}

const appendCheckboxTodoContainer = (checkboxTodoContainer, checkbox, todoDescription) => {
  checkboxTodoContainer.appendChild(checkbox);
  checkboxTodoContainer.appendChild(todoDescription);
  return checkboxTodoContainer;
}

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
  checkboxTodoContainer,
  priorityBtnContainer
) => {
  todoListItem.appendChild(checkboxTodoContainer);
  todoListItem.appendChild(priorityBtnContainer);
  allListItemsContainer.appendChild(todoListItem);
};

// Dynamic Btn Listener Functions
const submitListItem = (listItem) => {
  const selectedListItemId = listItem.getAttribute("todoId");
  createTodoItem(listItem, selectedListItemId);
  printTodoListToDom();
};

const cancelBtnListener = () => {
  printTodoListToDom();
};

const editBtnListener = (event) => {
  const selectedListItemId = event.target.parentNode.parentNode.getAttribute("todoId");
  const selectedListItem =
    event.target.parentNode.parentNode.getAttribute("value");
  printTodoListToDom(selectedListItem, selectedListItemId);
};

const deleteListItem = (event) => {
  const originalProjectIndex = event.target.parentNode.parentNode.getAttribute("originalProjectIndex");
  let todoToBeDeleted = event.target.parentNode.parentNode.getAttribute("todoId")
  const index = allProjects[originalProjectIndex].findIndex((obj) => obj.todoId === todoToBeDeleted);
  // Delete from original project array when list is filtered
  allProjects[originalProjectIndex].splice(
    index,
    1
  );
  // Delete from project array currently on DOM
  allProjects[currentProjectIndex].splice(
    event.target.parentNode.parentNode.getAttribute("value"),
    1
  );
  printTodoListToDom();
};

// Checkbox Event Listener
const checkboxEventFunc = (event) => {
  // Used for applying changes to original array
  const originalProjectIndex = event.target.getAttribute("originalProjectIndex");
  const todoListOrder = event.target.getAttribute("todoListOrder");
  // Used for adjusting list item if it's in originalProject[0]
  if (event.target.checked) {
    checkedCheckbox(originalProjectIndex, todoListOrder);
    printTodoListToDom();
  } else {
    notCheckedCheckbox(
      originalProjectIndex,
      todoListOrder,
    );
    printTodoListToDom();
  }
};

const checkedCheckbox = (
  originalProjectIndex,
  todoListOrder,
) => {
  allProjects[originalProjectIndex][todoListOrder].completed = true;
  if (originalProjectIndex != currentProjectIndex) {
    let currentListOrder = event.target.parentNode.parentNode.getAttribute("value");
    allProjects[currentProjectIndex][currentListOrder].completed = true;
  }
};

const notCheckedCheckbox = (
  originalProjectIndex,
  todoListOrder,
) => {
  allProjects[originalProjectIndex][todoListOrder].completed = false;
  if (originalProjectIndex != currentProjectIndex) {
    let currentListOrder = event.target.parentNode.parentNode.getAttribute("value");
    allProjects[currentProjectIndex][currentListOrder].completed = false; 
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
