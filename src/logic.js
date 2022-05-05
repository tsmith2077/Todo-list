import { isToday, isThisWeek } from 'date-fns';
import { allProjects, currentProjectIndex } from "./index.js";

const allListItemsContainer = document.querySelector('.allListItemsContainer');

// FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
// Convert input into an object and add to array
const createTodoItem = ((listItem) => { 
    let todoItem = {};
    todoItem.title = listItem.children[0].value;
    todoItem.priority = listItem.children[1].children[0].value;
    todoItem.dueDate = dateValue(listItem);
    todoItem.completed = "";
    return addTodoToCurrentProjectArr(todoItem, listItem);
});

const addTodoToCurrentProjectArr = (todoItem, listItem) => {
    if (!listItem.hasAttribute('value')) {
        const addTodoToCurrentProject = ((todoItem) => allProjects[currentProjectIndex].push(todoItem))
        addTodoToCurrentProject(todoItem); // add list item object to nested project array
        sortByDate();
    } else {
        let currentIndex = listItem.getAttribute('value');
        allProjects[currentProjectIndex].splice(currentIndex, 1, todoItem);
        sortByDate();
    }
}


// Sort todo's in order of due date
const sortByDate = (() => {
    allProjects[currentProjectIndex].sort(function(a,b){
    new Date(formatDateForUseInNewDate(a.dueDate)) - new Date(formatDateForUseInNewDate(b.dueDate));
    })
})

const dateValue = ((listItem) => {
    var hasNumber = /\d/; 
    if (hasNumber.test(listItem.children[1].children[1].value) == false) {
        return "No Date";
    } else {
        return formattedDate(listItem);
    }
});

const formattedDate = ((listItem) => {
    let dateInput = new Date(listItem.children[1].children[1].value);
    const day = dateInput.getUTCDate();
    const month = dateInput.getUTCMonth() + 1; // Return Value is 0 indexed
    const year = dateInput.getUTCFullYear();
    let fullDate = month + "/" + day + "/" + year;
    return fullDate;
})

// Fill in previous data after edit btn is clicked
const fillInPreviousData = ((textInput, prioritySelectInput, dateInput, i) => {
    textInput.value = allProjects[currentProjectIndex][i].title;
    prioritySelectInput.value = allProjects[currentProjectIndex][i].priority;
    dateInput.valueAsDate = new Date(formatDateForUseInNewDate(allProjects[currentProjectIndex][i].dueDate));
});

const formatDateForUseInNewDate = ((dueDate) => {
    let dateSplitWithComma = dueDate.replaceAll("/", ", ");
    return dateSplitWithComma;
});

const resetProjectBtnIndex = (() => {
    const currentProjectBtn = document.querySelector('.allProjectsContainer').children[currentProjectIndex-3];
    currentProjectBtn.remove(); // Remove the project button for the removed project
    allProjects.splice(currentProjectIndex, 1); // Removing the array for deleted project
    // Change project btn's index based on what was deleted
    const allProjectBtns = document.querySelectorAll('.projectNameBtn');
    for (var i=0; i<allProjectBtns.length; i++) {
        let btnIndex = (i + 3)
        allProjectBtns[i].setAttribute('index', btnIndex);
    }
})

// Figure out what we are trying to filter
const putTodosinArr = ((sortFilter) => {
    clearTodayThisWeekTodoArr();
    for (var i=0; i<allProjects.length; i++){
        for (var j=0; j<allProjects[i].length; j++) {
            if (sortFilter == 'week') {
                createThisWeeksTodoArr(i, j);
            } else if (sortFilter == 'today') {
                createTodaysTodosArr(i, j);
            } else if (sortFilter == 'completed') {
                createCompletedTodoArr(i, j)
            } else if (sortFilter == 'notCompleted'){
                createnotCompletedTodoArr(i, j);
            }
        }
    }
});

// Push filtered todos to allProjects[0]
const createCompletedTodoArr = ((i, j) => {
    if (allProjects[i][j].completed == true) {
        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[i][j])));
        sortByDate();
    }
});

const createnotCompletedTodoArr = ((i, j) => {
    if (allProjects[i][j].completed != true) {
        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[i][j])));
        sortByDate();
    }
});

const createThisWeeksTodoArr = ((i, j) => {
    if (isThisWeek(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[i][j])));
        sortByDate();
    }
});

const createTodaysTodosArr = ((i, j) => {
    if (isToday(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
        allProjects[currentProjectIndex].push(JSON.parse(JSON.stringify(allProjects[0][j])));
    }
});

const clearTodayThisWeekTodoArr = (() => {
    allProjects[0] = [];
});

// NEW PROJECTS FUNCTIONS
// Creates a new array to hold new project todo list
const createNewProjectArr = (() => { 
    let newProjectTodoList = [];
    addProjectToArr(newProjectTodoList);
    return allProjects;
});

const addProjectToArr = ((project) => allProjects.push(project));

const clearDomProject = (() => {
    allListItemsContainer.innerHTML = "";
})


export { createTodoItem, fillInPreviousData, formatDateForUseInNewDate, 
    resetProjectBtnIndex, putTodosinArr, createNewProjectArr, clearDomProject };