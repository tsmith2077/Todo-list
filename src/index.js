import "./style.css";

import { createProjectBtn } from "./createElementsFunctions.js";
import {
  resetProjectBtnIndex,
  resetOriginalProjectIndex,
  createNewProjectArr,
  putTodosinArr,
} from "./logic";
import { printTodoListToDom, editListItemFormat } from "./dom.js";

// allProjects empty arrays indexes
// 0) filteredTodos (todaysTodos, thisWeeksTodos, completedTodos, notCompletedTodos)
// 1) Default project
const allProjectsContainer = document.querySelector(".allProjectsContainer"); // Container for Project Btns
let currentProjectIndex = 1; // Default todo list array
let allProjects = [[], []];

// eslint-disable-next-line no-unused-vars
const todoListModule = (function () {
  // Check for local storage
  // If there is local storage, print out default todos
  if (localStorage.getItem("storedProjects") != null) {
    allProjects = JSON.parse(localStorage.getItem("storedProjects"));
    printTodoListToDom();
  }

  if (localStorage.getItem("storedProjectBtnNames") != null) {
    let allProjectBtnNamesDeserialized = JSON.parse(
      localStorage.getItem("storedProjectBtnNames")
    );
    for (let i = 0; i < allProjectBtnNamesDeserialized.length; i++) {
      let projectBtn = createProjectBtn(allProjectBtnNamesDeserialized[i]);
      allProjectsContainer.appendChild(projectBtn);
      projectBtn.addEventListener("click", function () {
        showProjectList(event);
      });
    }
    // resetProjectBtnIndex();
  }

  const addItemBtn = document.querySelector("#addItemBtn");
  const addProjectBtn = document.getElementById("addProjectBtn");
  const defaultProjectBtn = document.querySelector("#defaultProjectBtn");
  const projectSubmitBtn = document.querySelector("#projectSubmitBtn");
  const deleteCurrentProjectBtn = document.querySelector(
    "#deleteCurrentProjectBtn"
  );
  const todaysTodos = document.querySelector("#todaysTodos");
  const thisWeeksTodos = document.querySelector("#thisWeeksTodos");
  const completedTodos = document.querySelector("#completedTodos");
  const notCompletedTodos = document.querySelector("#notCompletedTodos");
  const addProjectModal = document.getElementById("addProjectModal");
  const closeModal = document.getElementsByClassName("close")[0]; // X That closes modal
  const hamburgerIcon = document.querySelector('.hamburgerIcon'); // Open collapsible sidebar for mobile
  const sidebar = document.querySelector('.sidebar');
  const sidebarCloseBtn = document.querySelector('.sidebarCloseBtn');

  // BUTTON CLICK EVENT LISTENERS
  addItemBtn.addEventListener("click", () => {
    addItemBtnListener();
  });
  addProjectBtn.addEventListener("click", () => {
    openProjectModal();
  });
  projectSubmitBtn.addEventListener("click", () => {
    projectSubmitBtnListener();
  });
  deleteCurrentProjectBtn.addEventListener("click", () => {
    deleteCurrentProjectBtnListener();
  });
  todaysTodos.addEventListener("click", function () {
    findTodos("today");
  });
  thisWeeksTodos.addEventListener("click", function () {
    findTodos("week");
  });
  completedTodos.addEventListener("click", function () {
    findTodos("completed");
  });
  notCompletedTodos.addEventListener("click", function () {
    findTodos("notCompleted");
  });
  defaultProjectBtn.addEventListener("click", function () {
    showProjectList(event);
  });
  hamburgerIcon.addEventListener("click", function () {
    showSideBar();
  });
  sidebarCloseBtn.addEventListener("click", function () {
    closeSideBar();
  })


  // EVENT LISTENER FUNCTIONS
  // Static btn functions
  const addItemBtnListener = () => {
    addItemBtn.disabled = true;
    const listItem = document.createElement("div");
    listItem.classList.add("listItem");
    editListItemFormat(listItem);
  };

  const showSideBar = () => {
    sidebar.style.width = '250px';
    sidebar.style.padding = '2rem';
  }

  const closeSideBar = () => {
    sidebar.style.width = '0px';
    sidebar.style.padding = '0';
  }

  let allProjectBtnArr = [];

  const projectSubmitBtnListener = () => {
    let newProjectName = document.querySelector("#addProjectInput").value;
    // Save Project Btn names to local storage
    allProjectBtnArr.push(newProjectName);
    // resetProjectBtnIndex();
    saveBtnToLocalStorage();

    let newProject = createProject(newProjectName);
    addProjectModal.style.display = "none";
    allProjectsContainer.appendChild(newProject);
    printTodoListToDom();
  };

  const deleteCurrentProjectBtnListener = () => {
    addItemBtn.disabled = false;
    if (currentProjectIndex == 1) {
      allProjects[1] = []; // Default project array. Clearing the array instead of deleteing it.
    } else if (currentProjectIndex == 0) {
        return
    } else if (currentProjectIndex > 1) {
      const currentProjectBtn = document.querySelector(".allProjectsContainer")
        .children[currentProjectIndex - 2];
      const deletedProjectIndex = currentProjectIndex;
      currentProjectBtn.remove(); // Remove the project button for the removed project
      allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project

      allProjectBtnArr.splice(currentProjectIndex - 1, 1); // Deleting projectBtn from local storage
      resetProjectBtnIndex(deletedProjectIndex - 2); // Subtracting 2 due to default and filtered arr
      resetOriginalProjectIndex(deletedProjectIndex);
      saveBtnToLocalStorage();
    }
    currentProjectIndex = 1;
    printTodoListToDom();
  };

  const saveBtnToLocalStorage = () => {
    let allProjectBtnNamesSerialized = JSON.stringify(allProjectBtnArr);
    localStorage.setItem("storedProjectBtnNames", allProjectBtnNamesSerialized);
  };

  const findTodos = (sortFilter) => {
    currentProjectIndex = 0;
    putTodosinArr(sortFilter);
    printTodoListToDom();
  };

  // New Project Modal Listners
  const openProjectModal = () => {
    addProjectModal.style.display = "block";
    let projectInput = document.querySelector("#addProjectInput");
    projectInput.value = "";
  };

  // When the user clicks on <span> (x), close the modal
  closeModal.addEventListener("click", () => {
    addProjectModal.style.display = "none";
  });
  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener("click", (event) => {
    if (event.target == addProjectModal) {
      addProjectModal.style.display = "none";
    }
  });

  // NEW PROJECT
  // Create new project
  const createProject = (newProjectName) => {
    let newProjectBtn = createProjectBtn(newProjectName);
    createNewProjectArr();
    newProjectBtn.addEventListener("click", function () {
      showProjectList(event);
    });
    changeCurrentProjectIndex(newProjectBtn);
    return newProjectBtn;
  };

  const showProjectList = (event) => {
    let clickedProjectIndex = event.target;
    changeCurrentProjectIndex(clickedProjectIndex);
    printTodoListToDom(allProjects[currentProjectIndex]);
  };

  const changeCurrentProjectIndex = (newProjectBtn) => {
    return (currentProjectIndex = newProjectBtn.getAttribute("index"));
  };
})();

export { allProjects, currentProjectIndex };