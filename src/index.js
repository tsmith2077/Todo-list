import { isToday, isThisWeek } from 'date-fns';
import './style.css';

import { createTodoContainer, createEditPriorityBtnContainer, createConfirmedPriorityBtnContainer, 
    appendEditPriorityContainer, createTextInput, createDateInput, createSelect, 
    createCheckbox, createBtn, createTodoDescription, createDueDate, createTodoPriorityText,
     } from './createInputs'

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

    const cancelBtnListener = (() => {
        addItemBtn.disabled = false;
        printTodoListToDom();
    });

    const editBtnListener = ((event) => {
        const selectedListItem = event.target.parentNode.parentNode.getAttribute('value');
        printTodoListToDom(selectedListItem);
    });

    const deleteListItem = ((event) => {
        allProjects[currentProjectIndex].splice((event.target.parentNode.parentNode.getAttribute('value')), 1);
        allListItemsContainer.innerHTML = "";
        printTodoListToDom();
    });

    const submitListItem = ((listItem) => {
        addItemBtn.disabled = false;
        let title = listItem.children[0].value;
        let priority = listItem.children[1].children[0].value;
        let dueDate = formatDate(listItem);
        createTodoItem(title, priority, dueDate, listItem);
    });


    // FORMAT FOR CONFIRMED AND EDITING TODO LIST ITEM
    // Format for a list item in editing format
    const editListItemFormat = ((todoListItem, i) => {
        let textInput = createTextInput();

        // Create Select input for task priority
        let prioritySelectInput = createSelect();
        prioritySelectInput.classList.add('priorityInput');

        // Fill in input to what was previous entered
        if (allProjects[currentProjectIndex][i] != undefined){
            textInput.value = allProjects[currentProjectIndex][i].title;
            prioritySelectInput.value = allProjects[currentProjectIndex][i].priority;
        }

        // Create date input
        let dateInput = createDateInput();

        // Create cancel and submit btns
        let cancelBtn = createBtn('cancel');
        cancelBtn.addEventListener('click', function() { cancelBtnListener(todoListItem) });
        let submitBtn = createBtn('submit');
        submitBtn.addEventListener('click', function() { submitListItem(todoListItem) });

        // Container for styling
        const priorityBtnContainer = createEditPriorityBtnContainer(prioritySelectInput,
            dateInput, cancelBtn, submitBtn);

        return appendEditListItemToDom(todoListItem, priorityBtnContainer, textInput);
    });

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

    const formatDateForUseInNewDate = ((dueDate) => {
        let dateSplitWithComma = dueDate.replaceAll("/", ", ");
        return dateSplitWithComma;
    });

    // Creates list item in the confirmed todo list item format
    const confirmedListItemFormat = ((todoListItem, i) => {
        const checkbox = createCheckbox();
        const todoDescription = createTodoDescription(allProjects[currentProjectIndex][i].title);
        const todoPriority = createTodoPriorityText(allProjects[currentProjectIndex][i].priority);
        const dueDate = createDueDate(allProjects[currentProjectIndex][i].dueDate);

        // Create Edit and Delete Btn
        const editBtn = createBtn('edit');
        editBtn.addEventListener('click', editBtnListener);
        const deleteBtn = createBtn('delete');
        deleteBtn.addEventListener('click', deleteListItem)

        // Container for styling
        const priorityBtnContainer = createConfirmedPriorityBtnContainer(todoPriority, dueDate, editBtn,
            deleteBtn);
        return appendConfirmedListItemToDom(todoListItem, priorityBtnContainer, checkbox, 
            todoDescription, priorityBtnContainer);
    });


    // FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
    // Convert input into an object and add to array
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

    // Converts text input for todo description to p element
    const createTodoDescription = ((todoDescription) => {
        const todoTextContent = document.createElement('p');
        todoTextContent.classList.add('todoDescription');
        todoTextContent.textContent = todoDescription;
        return todoTextContent;
    })

    const createDueDate = ((dueDate) => {
        const dueDateText = document.createElement('p');
        dueDateText.classList.add('dueDate');
        dueDateText.textContent = dueDate;
        return dueDateText;
    })

    // Converts chosen todo option from select input to p element
    const createTodoPriorityText = ((todoListPriorityText) => {
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.textContent = todoListPriorityText; 
        return todoPriority;
    })

    const formatDate = ((listItem) => {
        var hasNumber = /\d/; 
        if (hasNumber.test(listItem.children[1].children[1].value) == false) {
            return "No Date";
        } else {
            let dateValue = new Date(listItem.children[1].children[1].value);
            const day = dateValue.getUTCDate();
            const month = dateValue.getUTCMonth() + 1; // Return Value is 0 indexed
            const year = dateValue.getUTCFullYear();
            let fullDate = month + "/" + day + "/" + year;
            return fullDate;
        }
    });


 


    // FUNCTIONS FOR APPENDING TO THE DOM
    // Loops through array of current project and appends list items to dom.
    // If list item is 'selectListItem' from clicking edit btn, 
    // it will be in edit format and not confirmed
    const printTodoListToDom = ((selectedListItem=undefined) => {
        allListItemsContainer.innerHTML = "";
            for (var i=0; i<Object.keys(allProjects[currentProjectIndex]).length; i++) {
                const todoListItem = createTodoContainer();
                todoListItem.setAttribute('value', [i]);
                if (i == selectedListItem) {
                    editListItemFormat(todoListItem, i);
                } else {
                    confirmedListItemFormat(todoListItem, i);
                }
            }
    });

    // Append todo list items to Dom
    const appendEditListItemToDom = ((todoListItem, priorityBtnContainer, textInput) => {
        todoListItem.appendChild(textInput);
        todoListItem.appendChild(priorityBtnContainer);
        allListItemsContainer.appendChild(todoListItem);
    }); 

    const appendConfirmedListItemToDom = (
        (todoListItem, priorityBtnContainer, checkbox, todoDescription) => {
        todoListItem.appendChild(checkbox);
        todoListItem.appendChild(todoDescription);
        todoListItem.appendChild(priorityBtnContainer);
        allListItemsContainer.appendChild(todoListItem);
    });

    
})();