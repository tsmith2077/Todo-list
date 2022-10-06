import { isToday, isThisWeek } from "date-fns";
import { allProjects, currentProjectIndex } from "./index.js";
import { v4 as uuidv4 } from 'uuid';
import { printTodoListToDom } from "./dom.js";

const allListItemsContainer = document.querySelector(".allListItemsContainer");

// FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
// Convert input into an object and add to array
const createTodoItem = (listItem, selectedListItemId=null) => {
  let todoItem = {}; 
  todoItem.title = listItem.children[0].value;
  todoItem.priority = listItem.children[1].children[0].value;
  todoItem.dueDate = dateValue(listItem);
  todoItem.completed = "";
  todoItem.originalProjectIndex = `${currentProjectIndex}`;
  todoItem.todoListOrder = "";
  if (selectedListItemId === null) {
    todoItem.todoId = uuidv4();
  } else {
    todoItem.todoId = selectedListItemId;
  }
  return addTodoToCurrentProjectArr(todoItem, listItem);
};

const addTodoToCurrentProjectArr = (todoItem, listItem) => {
  if (!listItem.hasAttribute("todoId")) {
    const addTodoToCurrentProject = (todoItem) =>{
      allProjects[currentProjectIndex].push(todoItem);
    }
    addTodoToCurrentProject(todoItem); // add list item object to nested project array
  } else {
    // If todoItem exists, find it and update original project array
    const editedTodo = listItem.getAttribute("todoId")
    for (let i=0; i<allProjects.length; i++) {
      for (let j=0; j<allProjects[i].length; j++) {
        if (allProjects[i][j].todoId === editedTodo) {
          const index = j;
          const originalProjectIndex = i;
          allProjects[originalProjectIndex][index] = todoItem;
          printTodoListToDom()
        }
      }
    }
  }
};

// // Sort todo's in order of due date
const sortByDate = (currentProjectIndex) => {
  return currentProjectIndex.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(formatDateForUseInNewDate(a.dueDate)) - new Date(formatDateForUseInNewDate(b.dueDate));
  });
};

const dateValue = (listItem) => {
  var hasNumber = /\d/;
  if (hasNumber.test(listItem.children[1].children[1].value) == false) {
    return "No Date";
  } else {
    return formattedDate(listItem);
  }
};

const formattedDate = (listItem) => {
  let dateInput = new Date(listItem.children[1].children[1].value);
  const day = dateInput.getUTCDate();
  const month = dateInput.getUTCMonth() + 1; // Return Value is 0 indexed
  const year = dateInput.getUTCFullYear();
  let fullDate = month + "/" + day + "/" + year;
  return fullDate;
};

// Fill in previous data after edit btn is clicked
const fillInPreviousData = (textInput, prioritySelectInput, dateInput, i) => {
  textInput.value = allProjects[currentProjectIndex][i].title;
  prioritySelectInput.value = allProjects[currentProjectIndex][i].priority;
  dateInput.valueAsDate = new Date(
    formatDateForUseInNewDate(allProjects[currentProjectIndex][i].dueDate)
  );
};

const formatDateForUseInNewDate = (dueDate) => {
  let dateSplitWithComma = dueDate.replaceAll("/", ", ");
  return dateSplitWithComma;
};

const resetProjectBtnIndex = (deletedProjectIndex=0) => {
  // Change project btn's index based on what was deleted
  const allProjectBtns = document.querySelector(".allProjectsContainer").children;
  for (var i = deletedProjectIndex; i < allProjectBtns.length; i++) {
    let btnIndex = i + 2;
    allProjectBtns[i].setAttribute("index", btnIndex);
  }
};

const resetOriginalProjectTodoIndex = (deletedProjectIndex) => {
  // Change the originalProjectIndex on todo elements
  // Allows edits and deletes to modify original project when filtered
  for (let i = deletedProjectIndex; i < allProjects.length; i++) {
    for (let j=0; j<allProjects[i].length; j++) {
      allProjects[i][j].originalProjectIndex = i;
    }
  }
}


// Figure out what we are trying to filter
const putTodosinArr = (sortFilter) => {
  clearTodayThisWeekTodoArr();
  for (var i = 0; i < allProjects.length; i++) {
    for (var j = 0; j < allProjects[i].length; j++) {
      if (sortFilter == "week") {
        createThisWeeksTodoArr(i, j);
      } else if (sortFilter == "today") {
        createTodaysTodosArr(i, j);
      } else if (sortFilter == "completed") {
        createCompletedTodoArr(i, j);
      } else if (sortFilter == "notCompleted") {
        createnotCompletedTodoArr(i, j);
      }
    }
  }
};

// Push filtered todos to allProjects[0]
const createCompletedTodoArr = (i, j) => {
  if (allProjects[i][j].completed == true) {
    allProjects[currentProjectIndex].push(
      JSON.parse(JSON.stringify(allProjects[i][j]))
    );
  }
};

const createnotCompletedTodoArr = (i, j) => {
  if (allProjects[i][j].completed != true) {
    allProjects[currentProjectIndex].push(
      JSON.parse(JSON.stringify(allProjects[i][j]))
    );
  }
};

const createThisWeeksTodoArr = (i, j) => {
  if (
    isThisWeek(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))
  ) {
    allProjects[currentProjectIndex].push(
      JSON.parse(JSON.stringify(allProjects[i][j]))
    );
  }
};

const createTodaysTodosArr = (i, j) => {
  if (isToday(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
    allProjects[currentProjectIndex].push(
      JSON.parse(JSON.stringify(allProjects[i][j]))
    );
  }
};

const clearTodayThisWeekTodoArr = () => {
  allProjects[0] = [];
};

// NEW PROJECTS FUNCTIONS
// Creates a new array to hold new project todo list
const createNewProjectArr = () => {
  let newProjectTodoList = [];
  addProjectToArr(newProjectTodoList);
  return allProjects;
};

const addProjectToArr = (project) => allProjects.push(project);

const clearDomProject = () => {
  allListItemsContainer.innerHTML = "";
};

export {
  createTodoItem,
  fillInPreviousData,
  formatDateForUseInNewDate,
  resetProjectBtnIndex,
  putTodosinArr,
  createNewProjectArr,
  clearDomProject,
  sortByDate,
  resetOriginalProjectTodoIndex,
};
