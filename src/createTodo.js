import { allProjects, currentProjectIndex } from "./index.js";

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

// FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
// Convert input into an object and add to array
const createTodoItem = ((listItem) => { 
    let todoItem = {};
    todoItem.title = listItem.children[0].value;
    todoItem.priority = listItem.children[1].children[0].value;
    todoItem.dueDate = formatDate(listItem);
    return addTodoToCurrentProjectArr(todoItem, listItem);
});

const addTodoToCurrentProjectArr = (todoItem, listItem) => {
    if (!listItem.hasAttribute('value')) {
        const addTodoToCurrentProject = ((todoItem) => allProjects[currentProjectIndex].push(todoItem))
        addTodoToCurrentProject(todoItem); // add list item object to nested project array
    } else {
        let currentIndex = listItem.getAttribute('value');
        allProjects[currentProjectIndex].splice(currentIndex, 1, todoItem);
    }
}

export { formatDate, createTodoItem, addTodoToCurrentProjectArr };