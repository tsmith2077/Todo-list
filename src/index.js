import './style.css';

import { createProjectBtn } from './createElementsFunctions.js';
import { resetProjectBtnIndex, createNewProjectArr, putTodosinArr } from './logic';
import { printTodoListToDom, editListItemFormat} from './dom.js'

// allProjects empty arrays, 1) filteredTodos (todaysTodos, thisWeeksTodos, completedTodos, notCompletedTodos) 
// 2) Default project
const allProjectsContainer = document.querySelector('.allProjectsContainer'); // Container for Project Btns
let currentProjectIndex = 1; // Default todo list array
let allProjects = [[], []];


const todoListModule = (function() {

    // Check for local storage
    // If there is local storage, print out default todos
    if (localStorage.getItem("storedProjects") != null) {
        allProjects = JSON.parse(localStorage.getItem("storedProjects"));
        printTodoListToDom();
    }

    if (localStorage.getItem("storedProjectBtnNames") != null) {
        let allProjectBtnNamesDeserialized = JSON.parse(localStorage.getItem("storedProjectBtnNames"));
        for (let i=0; i<allProjectBtnNamesDeserialized.length; i++) {
            console.log(allProjectBtnNamesDeserialized[i])
            let projectBtn = createProjectBtn(allProjectBtnNamesDeserialized[i]);
            allProjectsContainer.appendChild(projectBtn);
            projectBtn.addEventListener('click', function() { showProjectList(event) });
        }
        resetProjectBtnIndex();
    }

    const addItemBtn = document.querySelector('#addItemBtn');
    const addProjectBtn = document.getElementById("addProjectBtn");
    const defaultProjectBtn = document.querySelector('#defaultProjectBtn');
    const projectSubmitBtn = document.querySelector('#projectSubmitBtn');
    const deleteCurrentProjectBtn = document.querySelector('#deleteCurrentProjectBtn');
    const todaysTodos = document.querySelector('#todaysTodos');
    const thisWeeksTodos = document.querySelector('#thisWeeksTodos');
    const completedTodos = document.querySelector('#completedTodos');
    const notCompletedTodos = document.querySelector('#notCompletedTodos');
    var addProjectModal = document.getElementById("addProjectModal");
    let closeModal = document.getElementsByClassName("close")[0]; // X That closes modal


    // BUTTON CLICK EVENT LISTENERS
    addItemBtn.addEventListener('click', () => { addItemBtnListener() });
    addProjectBtn.addEventListener ('click', () => { openProjectModal() });
    projectSubmitBtn.addEventListener('click', () => { projectSubmitBtnListener() });
    deleteCurrentProjectBtn.addEventListener('click', () => { deleteCurrentProjectBtnListener(); })
    todaysTodos.addEventListener('click', function() { findTodos('today') });
    thisWeeksTodos.addEventListener('click', function() { findTodos('week') });
    completedTodos.addEventListener('click', function() { findTodos('completed') });
    notCompletedTodos.addEventListener('click', function() { findTodos('notCompleted') });
    defaultProjectBtn.addEventListener('click', function() { showProjectList(event) });

    // EVENT LISTENER FUNCTIONS
    // Static btn functions
    const addItemBtnListener = (() => {
        addItemBtn.disabled = true;
        const listItem = document.createElement('div');
        listItem.classList.add('listItem');
        editListItemFormat(listItem);
    });

    let allProjectBtnArr = [];
    
    const projectSubmitBtnListener = (() => {
        let newProjectName = document.querySelector('#addProjectInput').value;
        // Save Project Btn names to local storage
        allProjectBtnArr.push(newProjectName);
        saveBtnToLocalStorage()

        let newProject = createProject(newProjectName);
        addProjectModal.style.display = "none";
        allProjectsContainer.appendChild(newProject);
        printTodoListToDom();
    });

    const deleteCurrentProjectBtnListener = (() => {
        addItemBtn.disabled = false;
        if (currentProjectIndex == 1) {
            allProjects[1] = []; // Default project array. Clearing the array instead of deleteing it.
        } else {
            const currentProjectBtn = document.querySelector('.allProjectsContainer').children[currentProjectIndex-2];
            currentProjectBtn.remove(); // Remove the project button for the removed project
            allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project

            allProjectBtnArr.splice(currentProjectIndex-2, 1);
            saveBtnToLocalStorage()

            resetProjectBtnIndex();
        }
        currentProjectIndex = 1;
        printTodoListToDom();
    })

    const saveBtnToLocalStorage = (() => {
        let allProjectBtnNamesSerialized = JSON.stringify(allProjectBtnArr);
        localStorage.setItem("storedProjectBtnNames", allProjectBtnNamesSerialized);
    })

    const findTodos = ((sortFilter) => {
        currentProjectIndex = 0;
        putTodosinArr(sortFilter);
        printTodoListToDom();
    });


    // New Project Modal Listners
    const openProjectModal = (() => {
        addProjectModal.style.display = "block";
        let projectInput = document.querySelector('#addProjectInput');
        projectInput.value = "";
    });

    // When the user clicks on <span> (x), close the modal
    closeModal.addEventListener ('click', () => { addProjectModal.style.display = "none"; });
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target == addProjectModal) {
            addProjectModal.style.display = "none";
        }
    });


    // NEW PROJECT
    // Create new project
    const createProject = ((newProjectName) => {
        let newProjectBtn = createProjectBtn(newProjectName);
        createNewProjectArr();
        newProjectBtn.addEventListener('click', function() { showProjectList(event) });
        changeCurrentProjectIndex(newProjectBtn);
        return newProjectBtn;
    });

    const showProjectList = ((event) => {
        let clickedProjectIndex = event.target;
        changeCurrentProjectIndex(clickedProjectIndex);
        printTodoListToDom(allProjects[currentProjectIndex]);
    });
    
    const changeCurrentProjectIndex = ((newProjectBtn) => {
        return currentProjectIndex = newProjectBtn.getAttribute('index');
    });

    
})();


export { allProjects, currentProjectIndex }


