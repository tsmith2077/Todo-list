import { isToday, isThisWeek } from 'date-fns';
import './style.css';

import { createTodoContainer, createEditPriorityBtnContainer, createConfirmedPriorityBtnContainer, 
    appendEditPriorityContainer, createTextInput, createDateInput, createSelect, 
    createCheckbox, createBtn, createTodoDescription, createDueDate, createTodoPriorityText,
     } from './createInputs'

import { printTodoListToDom, appendEditListItemToDom, appendConfirmedListItemToDom,
    formatDate, editListItemFormat, confirmedListItemFormat } from './dom.js'

    // allProjects empty arrays, 1) todaysTasks 2) thisWeeksTasks 3) Default project
    export let allProjects = [[], [], []];
    export let currentProjectIndex = 2;

const todoListModule = (function() {

    const addItemBtn = document.querySelector('#addItemBtn');
    const allListItemsContainer = document.querySelector('.allListItemsContainer');
    const projectSubmitBtn = document.querySelector('#projectSubmitBtn');
    const allProjectsContainer = document.querySelector('.allProjectsContainer');
    const defaultProjectBtn = document.querySelector('#defaultProjectBtn');
    const todaysTasks = document.querySelector('#todaysTasks');
    const thisWeeksTasks = document.querySelector('#thisWeeksTasks');
    const deleteCurrentProjectBtn = document.querySelector('#deleteCurrentProjectBtn');

    // BUTTON CLICK EVENT LISTENERS
    addItemBtn.addEventListener('click', () => {
        addItemBtn.disabled = true;
        const listItem = document.createElement('div');
        listItem.classList.add('listItem');
        editListItemFormat(listItem);
    });

    // Delete Current Project
    deleteCurrentProjectBtn.addEventListener('click', () => {
        if (currentProjectIndex == 2) {
            allProjects[2] = []; // Default project array. Clearing the array instead of deleteing it.
        } else {
            const currentProjectBtn = document.querySelector('.allProjectsContainer').children[currentProjectIndex-3];
            currentProjectBtn.remove(); // Remove the project button for the removed project
            allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project
            // Change project btn's index based on what was deleted
            const allProjectBtns = document.querySelectorAll('.projectNameBtn');
            for (var i=0; i<allProjectBtns.length; i++) {
                let btnIndex = (i + 3)
                allProjectBtns[i].setAttribute('index', btnIndex);
            }
        }
        currentProjectIndex = 2;
        printTodoListToDom();
    })

    todaysTasks.addEventListener('click', function() { findTodaysTasks() });

    thisWeeksTasks.addEventListener('click', function() { findThisWeeksTasks() });

    // Btn event listener that shows default list of tasks
    defaultProjectBtn.addEventListener('click', function() { showProjectList(event) });

    // // NEW PROJECT
    const addProjectToArr = ((project) => allProjects.push(project))

    projectSubmitBtn.addEventListener('click', () => {
        let newProjectName = document.querySelector('#addProjectInput').value;
        let newProject = createProject(newProjectName);
        addProjectModal.style.display = "none";
        allProjectsContainer.appendChild(newProject);
        printTodoListToDom();
    });

    // Create new project
    const createProject = ((newProjectName) => {
        let newProjectBtn = document.createElement('button');
        newProjectBtn.textContent = newProjectName;
        newProjectBtn.classList.add('projectNameBtn');
        newProjectBtn.setAttribute('index', (allProjects.length));
        createNewProjectArr();
        newProjectBtn.addEventListener('click', function() { showProjectList(event) });
        changeCurrentProjectIndex(newProjectBtn);
        return newProjectBtn;
    });

    // Creates a new array to hold new project todo list
    const createNewProjectArr = (() => { 
        let newProjectTodoList = [];
        addProjectToArr(newProjectTodoList);
        return allProjects;
    });

    // // Click event listener for changing projects and displaying to DOM
    const showProjectList = ((event) => {
        let clickedProjectIndex = event.target
        changeCurrentProjectIndex(clickedProjectIndex);
        printTodoListToDom(allProjects[currentProjectIndex]);
    });

    const changeCurrentProjectIndex = ((newProjectBtn) => {
        currentProjectIndex = newProjectBtn.getAttribute('index');
    });


    // ADD NEW PROJECT MODAL
    var addProjectModal = document.getElementById("addProjectModal");
    const addProjectBtn = document.getElementById("addProjectBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // Add Project Button to for opening modal
    addProjectBtn.addEventListener ('click', () => {
        addProjectModal.style.display = "block";
        let projectInput = document.querySelector('#addProjectInput');
        projectInput.value = "";
    });
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        addProjectModal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == addProjectModal) {
            addProjectModal.style.display = "none";
        }
    };

    const formatDateForUseInNewDate = ((dueDate) => {
        let dateSplitWithComma = dueDate.replaceAll("/", ", ");
        return dateSplitWithComma;
    });

    // TODAY'S TODO'S AND THIS WEEK'S TODO'S
    // Store today's todo's and this week's todo's in allProjects[0] and allProjects[1]
    const findThisWeeksTasks = (() => {
        currentProjectIndex = 1;
        putTasksinArr();
    });

    const findTodaysTasks = (() => {
        currentProjectIndex = 0;
        putTasksinArr();
    })

    const putTasksinArr = (() => {
        allProjects[0] = [];
        allProjects[1] = [];
        for (var i=0; i<allProjects.length; i++){
            for (var j=0; j<allProjects[i].length; j++) {
                if (currentProjectIndex == 1) {
                    if (isThisWeek(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
                        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[i][j])));
                    }
                } else if (currentProjectIndex == 0) {
                    if (isToday(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
                        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[i][j])));
                    }
                }
            }
        }
        printTodoListToDom();
    });

    
})();

const createTodoItem = ((title, priority, dueDate, listItem) => { 
    let todoItem = {};
    todoItem.title = title;
    todoItem.priority = priority;
    todoItem.dueDate = dueDate;

    if (!listItem.hasAttribute('value')) {
        const addTodoToCurrentProject = ((todoItem) => allProjects[currentProjectIndex].push(todoItem))
        addTodoToCurrentProject(todoItem); // add list item object to nested project array
    } else {
        let currentIndex = listItem.getAttribute('value');
        allProjects[currentProjectIndex].splice(currentIndex, 1, todoItem);
    }
    printTodoListToDom(allProjects[currentProjectIndex]);
});


export { createTodoItem }