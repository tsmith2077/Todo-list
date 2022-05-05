import './style.css';

import { createProjectBtn } from './createElementsFunctions.js';
import { resetProjectBtnIndex, createNewProjectArr, putTodosinArr } from './logic';
import { printTodoListToDom, editListItemFormat} from './dom.js'

// allProjects empty arrays, 1) filteredTodo's (todaysTodos, thisWeeksTodos, completedTodos, notCompletedTodos) 2) Default project
let allProjects = [[], []];
let currentProjectIndex = 1;

const todoListModule = (function() {

    const addItemBtn = document.querySelector('#addItemBtn');
    const addProjectBtn = document.getElementById("addProjectBtn");
    const defaultProjectBtn = document.querySelector('#defaultProjectBtn');
    const projectSubmitBtn = document.querySelector('#projectSubmitBtn');
    const deleteCurrentProjectBtn = document.querySelector('#deleteCurrentProjectBtn');
    const allProjectsContainer = document.querySelector('.allProjectsContainer'); // Container for Project Btns
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

    const projectSubmitBtnListener = (() => {
        let newProjectName = document.querySelector('#addProjectInput').value;
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
            resetProjectBtnIndex();
        }
        currentProjectIndex = 1;
        printTodoListToDom();
    })

    const showProjectList = ((event) => {
        let clickedProjectIndex = event.target;
        changeCurrentProjectIndex(clickedProjectIndex);
        printTodoListToDom(allProjects[currentProjectIndex]);
    });

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

    const changeCurrentProjectIndex = ((newProjectBtn) => {
        return currentProjectIndex = newProjectBtn.getAttribute('index');
    });
    
})();

export { allProjects, currentProjectIndex }


