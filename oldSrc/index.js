import './style.css';

let todoList = [];

// Function for creating new todo item
const createTodoItem = ((title, priority) => {
    let todoItem = {};
    todoItem.title = title;
    todoItem.priority = priority;

    const addTodoToArr = ((todoItem) => todoList.push(todoItem))

    addTodoToArr(todoItem); // add to array todoList
    return {todoItem, todoList};
})


// Function for creating checkbox for new todo item
const createCheckbox = (() => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');

    return checkbox;
})

const createSelect = (() => {
    const selectArr = ["Low Priority","Medium Priority","High Priority"];

    //Create and append select list
    const selectList = document.createElement("select");
    selectList.id = "selectList";
    
    //Create and append the options
    for (var i = 0; i < selectArr.length; i++) {
        const option = document.createElement("option");
        option.value = selectArr[i];
        option.text = selectArr[i];
        selectList.appendChild(option);
    }

    return selectList;
})

const createBtn = ((btnName) => {
    const btn = document.createElement('button');
    btn.classList.add('listItemBtn', btnName);
    btn.textContent = btnName;

    return btn;
});



// export { createTodoItem, todoList, createCheckbox, createSelect, createBtn }




const domTodoList = document.querySelector('.todoList');
const addTodoToArr = ((todoItem) => todoList.push(todoItem))

let item1 = createTodoItem("First todo item", "Low priority");
let item2 = createTodoItem("Second todo item", "Low priority");

addTodoToArr(item1);
addTodoToArr(item2);


const printTodoListToDom = ((todoList) => {

    for (var i=0; i<todoList.length; i++) {
        const todoListItem = createTodoContainer();
        todoListItem.setAttribute('value', [i]);
        const checkbox = createCheckbox();

        // Todo item Description
        const todoTextContent = document.createElement('p');
        todoTextContent.classList.add('todoTextContent');
        todoTextContent.textContent = todoList[i].title;

        const priorityBtnContainer = createPriorityBtnContainer();

        // Todo item Priority
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.textContent = todoList[i].priority;

        // Todo Buttons
        const editBtn = createBtn('edit');
        editBtn.setAttribute('value', [i]);
        const deleteBtn = createBtn('delete');
        deleteBtn.setAttribute('value', [i]);
        deleteBtn.addEventListener('click', deleteListItem)

        todoListItem.appendChild(checkbox);
        todoListItem.appendChild(todoTextContent);
        priorityBtnContainer.appendChild(todoPriority);
        priorityBtnContainer.appendChild(editBtn);
        priorityBtnContainer.appendChild(deleteBtn);
        todoListItem.appendChild(priorityBtnContainer);
        domTodoList.appendChild(todoListItem);
    }
})

const createTodoContainer = (() => {
    let todoListItem = document.createElement('div');
    todoListItem.classList.add('listItem');
    return todoListItem
})

const createPriorityBtnContainer = (() => {
    let priorityBtnContainer = document.createElement('div');
    priorityBtnContainer.classList.add('priorityBtnContainer');
    return priorityBtnContainer;
})

const deleteListItem = ((event) => {
    todoList.splice(event.target.value, 1);
    domTodoList.innerHTML = "";
    printTodoListToDom(todoList);
});




















const addItemBtn = document.querySelector('#addItemBtn');


addItemBtn.addEventListener('click', addTodo());

function addTodo() {

}


// const addTodoitem = (() => {

    // const addItemBtn = document.querySelector('#addItemBtn');
    // const todoListCont = document.querySelector('.todoList');
    // const allCancelBtns = document.querySelectorAll('.cancel');

    // addItemBtn.addEventListener('click', addTodoitem);


    // // Add blank todo item for editing
    // function addTodo() {
    //     const newItem = document.createElement('div');
    //     newItem.classList.add('listItem');

    //     const newItemTextInput = createTextInput();
    //     newItem.appendChild(newItemTextInput);

    //     const submitBtn = createBtn('submit');
    //     newItem.appendChild(submitBtn);

    //     const cancelBtn = createBtn('cancel');
    //     newItem.appendChild(cancelBtn);

    //     addToDom(newItem);
    // }

    // // Append the blank todo item to dom
    // function addToDom(newItem) {
    //     todoListCont.appendChild(newItem);
    // }

    // // Create text input for new todo
    // function createTextInput() {
    //     const textInput = document.createElement('input');
    //     textInput.setAttribute('type', 'text');
    //     textInput.classList.add('itemTextInput');

    //     return textInput;
    // }

    // // Creates submit and cancel buttons
    // function createBtn(btnName) {
    //     const btn = document.createElement('button');
    //     btn.classList.add('listItemBtn', btnName);
    //     btn.textContent = btnName;

    //     submitCancelListeners(btnName, btn)

    //     return btn;
    // }

    // // Adds event listeners to submit and cancel buttson
    // function submitCancelListeners (btnName, btn) {
    //     if (btnName == 'cancel') {
    //         btn.addEventListener('click', cancelBtn);
    //     } else if (btnName == 'submit') {
    //         btn.addEventListener('click', submitBtn);
    //     }
    // }

    // // Submit new 
    // function submitBtn(event) {
    //     let currentTodo = event.target.parentNode;
    //     let previousTextInput = event.target.previousSibling;
    //     let todoText;

    //     while (previousTextInput) {
    //         if (previousTextInput.classList.contains('itemTextInput')) {
    //             todoText = previousTextInput.value;
    //             break;
    //         }
    //     }

    //     const checkbox = ('<input type="checkbox" class="checkbox">')
    //     const editBtn = ('<button class="listItemBtn edit">');
    //     const deleteBtn = ('<button class="listItemBtn edit">');
    //     currentTodo.innerHTML = checkbox + todoText + editBtn + deleteBtn;
    // }

    // return {
    //     addTodo,
    //     addToDom,
    //     cancelBtn,
    //     submitBtn
    // }

// });

// function createCheckbox() {
//     const checkbox = document.createElement('input');
//     checkbox.type = "checkbox";
//     checkbox.classList.add('checkbox');
// }

// import myFunctions from './myFunctions.js';
// import Edit from './img/edit.png';
// import Trash from './img/trash.svg';