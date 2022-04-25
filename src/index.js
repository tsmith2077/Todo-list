import './style.css';

let todoListArr = [];

const addItemBtn = document.querySelector('#addItemBtn');
const allTodoListItems = document.querySelector('.allTodoListItems');

addItemBtn.addEventListener('click', () => {
    let currentListItem = addListItem();
    allTodoListItems.appendChild(currentListItem);
});

function addListItem() {
    // Create list item container
    const listItem = document.createElement('div');
    listItem.classList.add('listItem');
    let textInput = document.createElement('input');
    textInput.classList.add('itemTextInput');
    textInput.setAttribute("type", "text");

    // Create Select input for task priority
    let prioritySelectInput = createSelect();
    prioritySelectInput.classList.add('priorityInput');

    // Create submit button
    let submitBtn = document.createElement('button');
    submitBtn.classList.add('listItemBtn', 'submitBtn');
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener('click', function() { submitListItem(listItem) });

    // Append all list item contents to listItem container
    listItem.appendChild(textInput);
    listItem.appendChild(prioritySelectInput);
    listItem.appendChild(submitBtn);

    return listItem;
}


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

// Function for creating new todo item
const createTodoItem = ((title, priority) => {
    let todoItem = {};
    todoItem.title = title;
    todoItem.priority = priority;
    todoItem.index = (todoListArr.length);

    const addTodoToArr = ((todoItem) => todoListArr.push(todoItem))

    addTodoToArr(todoItem); // add to array todoList

    printTodoListToDom(todoListArr);
    return {todoItem, todoListArr};
})

function submitListItem(listItem) {
    let title = listItem.children[0].value;
    let priority = listItem.children[1].value;

    createTodoItem(title, priority);
}

const printTodoListToDom = ((todoListArr) => {

    for (var i=0; i<todoListArr.length; i++) {
        // const todoListItem = createTodoContainer();
        let todoListItem = document.createElement('div');
        todoListItem.classList.add('listItem');
        todoListItem.setAttribute('value', [i]);
        const checkbox = createCheckbox();

        // Todo item Description
        const todoTextContent = document.createElement('p');
        todoTextContent.classList.add('todoTextContent');
        todoTextContent.textContent = todoListArr[i].title;

        const priorityBtnContainer = createPriorityBtnContainer();

        // Todo item Priority
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.textContent = todoListArr[i].priority;

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
        allTodoListItems.appendChild(todoListItem);
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
    allTodoListItems.innerHTML = "";
    printTodoListToDom(todoListArr);
});

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');
}

const createBtn = ((btnName) => {
    const btn = document.createElement('button');
    btn.classList.add('listItemBtn', btnName);
    btn.textContent = btnName;

    return btn;
});