import { allProjects, currentProjectIndex } from "./index.js";
import { createTodoItem, fillInPreviousData, clearDomProject } from './logic';
import { createTextInput, createDateInput, createSelect, createCheckbox, createBtn, createTodoDescription, 
    createDueDate, createTodoPriorityText, createTodoContainer } from './createElementsFunctions.js';


const allListItemsContainer = document.querySelector('.allListItemsContainer'); // Container for todo list items

// APPEND THE TODO LIST TO THE DOM
   const printTodoListToDom = ((selectedListItem=undefined) => {
    clearDomProject()
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

const editListItemFormat = ((todoListItem, i) => {
    let textInput = createTextInput();

    // Create Select input for task priority
    let prioritySelectInput = createSelect();
    prioritySelectInput.classList.add('priorityInput');

    // Create date input
    let dateInput = createDateInput();

    // Fill in input to what was previous entered
    if (allProjects[currentProjectIndex][i] != undefined){
        fillInPreviousData(textInput, prioritySelectInput, dateInput, i);
    }

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



const confirmedListItemFormat = ((todoListItem, i) => {
    const checkbox = createCheckbox();
    checkbox.addEventListener('change', function(event) {
        if (event.target.checked) {
            allProjects[currentProjectIndex][i].completed = true;
        } else {
            allProjects[currentProjectIndex][i].completed = false;
        }
    });

    checkbox.checked = allProjects[currentProjectIndex][i].completed;

    const todoDescription = createTodoDescription(allProjects[currentProjectIndex][i].title);
    const todoPriority = createTodoPriorityText(allProjects[currentProjectIndex][i].priority);
    const dueDate = createDueDate(allProjects[currentProjectIndex][i].dueDate);

    // Create Edit and Delete Btn
    const editBtn = createBtn('edit');
    editBtn.addEventListener('click', editBtnListener);
    const deleteBtn = createBtn('delete');
    deleteBtn.addEventListener('click', deleteListItem);

    // Container for styling
    const priorityBtnContainer = createConfirmedPriorityBtnContainer(todoPriority, dueDate, editBtn,
        deleteBtn);
    return appendConfirmedListItemToDom(todoListItem, priorityBtnContainer, checkbox, 
        todoDescription, priorityBtnContainer);
});


// Priority and button div container for todo list items for styling
const createEditPriorityBtnContainer = ((prioritySelectInput, dateInput,
    cancelBtn, submitBtn) => {
    let priorityBtnContainer = document.createElement('div');
    priorityBtnContainer.classList.add('priorityBtnContainer');
    return appendEditPriorityContainer(priorityBtnContainer, prioritySelectInput, dateInput, cancelBtn, 
        submitBtn);
})

const appendEditPriorityContainer = ((priorityBtnContainer, prioritySelectInput, dateInput, cancelBtn, 
    submitBtn) => {
        priorityBtnContainer.appendChild(prioritySelectInput);
        priorityBtnContainer.appendChild(dateInput);
        priorityBtnContainer.appendChild(cancelBtn);
        priorityBtnContainer.appendChild(submitBtn);
        return priorityBtnContainer;
})

const createConfirmedPriorityBtnContainer = ((todoPriority, dueDate, editBtn, deleteBtn) => {
    let priorityBtnContainer = document.createElement('div');
    priorityBtnContainer.classList.add('priorityBtnContainer');
    return appendConfirmedPriorityContainer(priorityBtnContainer, todoPriority, dueDate, 
        editBtn, deleteBtn);
})

const appendConfirmedPriorityContainer = ((priorityBtnContainer, todoPriority, dueDate, 
    editBtn, deleteBtn) => {
        priorityBtnContainer.appendChild(todoPriority);
        priorityBtnContainer.appendChild(dueDate);
        priorityBtnContainer.appendChild(editBtn);
        priorityBtnContainer.appendChild(deleteBtn);
        return priorityBtnContainer;
});

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

// Dynamic Btn Listener Functions
const submitListItem = ((listItem) => {
    addItemBtn.disabled = false;
    createTodoItem(listItem);
    printTodoListToDom()
});

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
    clearDomProject();
    printTodoListToDom();
});

export { printTodoListToDom, editListItemFormat, submitListItem, cancelBtnListener, editBtnListener, deleteListItem }