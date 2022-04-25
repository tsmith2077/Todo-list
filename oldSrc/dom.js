import './style.css';
import { createTodoItem, todoList, createCheckbox, createSelect, createBtn } from "./index.js";

const domTodoList = document.querySelector('.todoList');

let item1 = createTodoItem("First todo item", "Low priority");
let item2 = createTodoItem("Second todo item", "Low priority");


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
})

// const todoTextContent = todoList.map((todoItem, => todoItem.title + todoItem.description + todoItem.priority);

// let deleteBtns = document.querySelectorAll('.delete');

// deleteBtns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         console.log("It works");
//     })
// })

printTodoListToDom(todoList);
