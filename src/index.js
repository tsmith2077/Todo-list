import './style.css';

var todoListModule = (function() {

    let todoListArr = [];

    const addItemBtn = document.querySelector('#addItemBtn');
    const allListItemsContainer = document.querySelector('.allListItemsContainer');
    const projectSubmitBtn = document.querySelector('#projectSubmitBtn');
    const allProjectsContainer = document.querySelector('.allProjectsContainer');

    // Button event Listeners and functions
    addItemBtn.addEventListener('click', () => {
        let currentListItem = addListItem();
        allListItemsContainer.appendChild(currentListItem);
    });

    projectSubmitBtn.addEventListener('click', () => {
        let newProjectName = document.querySelector('#addProjectInput').value;
        let newProject = createProject(newProjectName);
        addProjectModal.style.display = "none";
        allProjectsContainer.appendChild(newProject);
    });

    // Create new project
    const createProject = ((newProjectName) => {
        let newProjectBtn = document.createElement('button');
        newProjectBtn.textContent = newProjectName;
        newProjectBtn.classList.add(newProjectName, 'projectNameBtn');
        let newProjectArr = createNewProjectArr(newProjectName);
        newProjectBtn.addEventListener('click', function() { showProjectList(newProjectName) });
        return newProjectBtn, newProjectArr;
    });

    // Creates a new array to hold new project todo list
    const createNewProjectArr = ((newProjectName) => { 
        let newProjectTodoList = [];
        newProjectTodoList.classList.add(newProjectName + 'Arr');
        return newProjectTodoList;
    });

    // Shows the clicked on project todo list
    const showProjectList = ((newProjectArr) => {
        
    })


    // Get the modal
    var addProjectModal = document.getElementById("addProjectModal");
    const addProjectBtn = document.getElementById("addProjectBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    addProjectBtn.addEventListener ('click', () => {
        addProjectModal.style.display = "block";
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        addProjectModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == addProjectModal) {
            addProjectModal.style.display = "none";
        }
    }

    const cancelBtnListener = (() => {
        printTodoListToDom(todoListArr);
    });

    const editBtnListener = ((event) => {
        const selectedListItem = event.target.value;
        printTodoListToDom(todoListArr, selectedListItem);
    });

    const deleteListItem = ((event) => {
        todoListArr.splice((event.target.parentNode.parentNode.getAttribute('value')), 1);
        allListItemsContainer.innerHTML = "";
        printTodoListToDom(todoListArr);
    });

    const submitListItem = ((listItem) => {
        let title = listItem.children[0].value;
        let priority = listItem.children[1].children[0].value;
        createTodoItem(title, priority, listItem);
    });

    // Creating a todo list item
    const createTodoItem = ((title, priority, listItem) => { 
        let todoItem = {};
        todoItem.title = title;
        todoItem.priority = priority;

        if (!listItem.hasAttribute('value')) {
            const addTodoToArr = ((todoItem) => todoListArr.push(todoItem))
            addTodoToArr(todoItem); // add to array todoList
        } else {
            let currentIndex = listItem.getAttribute('value');
            todoListArr.splice(currentIndex, 1, todoItem);
        }

        printTodoListToDom(todoListArr);
        return {todoItem, todoListArr};
    })

    const printTodoListToDom = ((todoListArr, selectedListItem=undefined) => {
        allListItemsContainer.innerHTML = "";
        for (var i=0; i<todoListArr.length; i++) {
            const todoListItem = createTodoContainer();
            todoListItem.setAttribute('value', [i]);
            if (i == selectedListItem || todoListArr == "") {
                editListItemFormat(todoListItem, todoListArr, i);
            } else {
                confirmedListItemFormat(todoListItem, todoListArr, i);
            }
        }
    })

    const editListItemFormat = ((todoListItem, todoListArr, i) => {
        let textInput = document.createElement('input');
        textInput.classList.add('itemTextInput');
        textInput.setAttribute("type", "text");

        // Create Select input for task priority
        let prioritySelectInput = createSelect();
        prioritySelectInput.classList.add('priorityInput');

        // Fill in input to what was previous entered
        if (todoListArr != undefined){
            textInput.value = todoListArr[i].title;
            prioritySelectInput.value = todoListArr[i].priority;
        }

        const priorityBtnContainer = createPriorityBtnContainer();

        // Create submit button
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('listItemBtn', 'cancelBtn');
        cancelBtn.textContent = "Cancel";
        cancelBtn.addEventListener('click', function() { cancelBtnListener(todoListItem) });

        // Create submit button
        let submitBtn = document.createElement('button');
        submitBtn.classList.add('listItemBtn', 'submitBtn');
        submitBtn.textContent = "Submit";
        submitBtn.addEventListener('click', function() { submitListItem(todoListItem) });

        // Append all list item contents to listItem container
        todoListItem.appendChild(textInput);
        priorityBtnContainer.appendChild(prioritySelectInput);
        priorityBtnContainer.appendChild(cancelBtn);
        priorityBtnContainer.appendChild(submitBtn);
        todoListItem.appendChild(priorityBtnContainer);
        allListItemsContainer.appendChild(todoListItem);

        return todoListItem, i;
    });

    const confirmedListItemFormat = ((todoListItem, todoListArr, i) => {

        const checkbox = createCheckbox();

        // Todo item Description
        const todoTextContent = document.createElement('p');
        todoTextContent.classList.add('todoTextContent');
        todoTextContent.textContent = todoListArr[i].title; 

        const priorityBtnContainer = createPriorityBtnContainer();

        // Todo item Priority
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.textContent = todoListArr[i].priority; // removed [i]

        // Todo Buttons
        const editBtn = createBtn('edit');
        editBtn.setAttribute('value', [i]);
        editBtn.addEventListener('click', editBtnListener);
        const deleteBtn = createBtn('delete');

        deleteBtn.addEventListener('click', deleteListItem)

        todoListItem.appendChild(checkbox);
        todoListItem.appendChild(todoTextContent);
        priorityBtnContainer.appendChild(todoPriority);
        priorityBtnContainer.appendChild(editBtn);
        priorityBtnContainer.appendChild(deleteBtn);
        todoListItem.appendChild(priorityBtnContainer);
        allListItemsContainer.appendChild(todoListItem);
        return todoListItem;
    });


    const addListItem = (() => {
        // Create list item container
        const listItem = document.createElement('div');
        listItem.classList.add('listItem');
        editListItemFormat(listItem);

        return listItem;
    })

    const createTodoContainer = (() => {
        let todoListItem = document.createElement('div');
        todoListItem.classList.add('listItem');
        if (todoListArr == ""){
            editListItemFormat(todoListItem);
        }
        return todoListItem;
    })

    // Prioirty and button container for todo list items
    const createPriorityBtnContainer = (() => {
        let priorityBtnContainer = document.createElement('div');
        priorityBtnContainer.classList.add('priorityBtnContainer');
        return priorityBtnContainer;
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

    const createCheckbox = (() => {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox');
        return checkbox;
    })

    const createBtn = ((btnName) => {
        const btn = document.createElement('button');
        btn.classList.add('listItemBtn', btnName);
        btn.textContent = btnName;

        return btn;
    });

})();