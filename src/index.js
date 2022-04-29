import './style.css';

var todoListModule = (function() {

    // Default array for holding todo list if not project is selected
    let todoListArr = [];

    const addItemBtn = document.querySelector('#addItemBtn');
    const allListItemsContainer = document.querySelector('.allListItemsContainer');


    // ADD NEW PROJECT MODAL
    var addProjectModal = document.getElementById("addProjectModal");
    const addProjectBtn = document.getElementById("addProjectBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // Add Project Button to for opening modal
    addProjectBtn.addEventListener ('click', () => {
        addProjectModal.style.display = "block";
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

    const cancelBtnListener = (() => {
        printTodoListToDom(todoListArr);
    });

    const editBtnListener = ((event) => {
        const selectedListItem = event.target.parentNode.parentNode.getAttribute('value');
        printTodoListToDom(todoListArr, selectedListItem);
    });

    const deleteListItem = ((event) => {
        todoListArr.splice((event.target.parentNode.parentNode.getAttribute('value')), 1);
        allListItemsContainer.innerHTML = "";
        printTodoListToDom(todoListArr);
    });

    const submitListItem = ((listItem) => {
        addItemBtn.disabled = false;
        let title = listItem.children[0].value;
        let priority = listItem.children[1].children[0].value;
        createTodoItem(title, priority, listItem);
    });


    // FORMAT FOR CONFIRMED AND EDITING TODO LIST ITEM
    // Format for a list item in editing format
    const editListItemFormat = ((todoListItem, todoListArr, i) => {
        let textInput = createTextInput();

        // Create Select input for task priority
        let prioritySelectInput = createSelect();
        prioritySelectInput.classList.add('priorityInput');

        // Fill in input to what was previous entered
        if (todoListArr != undefined){
            textInput.value = todoListArr[i].title;
            prioritySelectInput.value = todoListArr[i].priority;
        }

        // Create cancel and submit btns
        let cancelBtn = createBtn('cancel');
        cancelBtn.addEventListener('click', function() { cancelBtnListener(todoListItem) });
        let submitBtn = createBtn('submit');
        submitBtn.addEventListener('click', function() { submitListItem(todoListItem) });

        // Container for styling
        const priorityBtnContainer = createEditPriorityBtnContainer(prioritySelectInput, 
            cancelBtn, submitBtn);

        return appendEditListItemToDom(todoListItem, priorityBtnContainer, textInput, 
            prioritySelectInput, cancelBtn, submitBtn);
    });

    // Creates list item in the confirmed todo list item format
    const confirmedListItemFormat = ((todoListItem, todoListArr, i) => {
        const checkbox = createCheckbox();
        const todoDescription = createTodoDescription(todoListArr[i].title);
        const todoPriority = createTodoPriorityText(todoListArr[i].priority);

        // Create Edit and Delete Btn
        const editBtn = createBtn('edit');
        editBtn.addEventListener('click', editBtnListener);
        const deleteBtn = createBtn('delete');
        deleteBtn.addEventListener('click', deleteListItem)

        // Container for styling
        const priorityBtnContainer = createConfirmedPriorityBtnContainer(todoPriority, editBtn,
            deleteBtn);

        return appendConfirmedListItemToDom(todoListItem, priorityBtnContainer, checkbox, 
            todoDescription, priorityBtnContainer);
    });


    // FUNCTIONS FOR CONVERTING VALUES FROM EDIT TO CONFIRMED TODO LIST ITEMS
    // Convert input into an object and add to array
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
        console.log(todoListArr)
        printTodoListToDom(todoListArr);
        return {todoItem, todoListArr};
    });

    // Converts text input for todo description to p element
    const createTodoDescription = ((todoDescription) => {
        const todoTextContent = document.createElement('p');
        todoTextContent.classList.add('todoTextContent');
        todoTextContent.textContent = todoDescription;
        return todoTextContent;
    })

    // Converts chosen todo option from select input to p element
    const createTodoPriorityText = ((todoListPriorityText) => {
        const todoPriority = document.createElement('p');
        todoPriority.classList.add('todoPriority');
        todoPriority.textContent = todoListPriorityText; 
        return todoPriority;
    })


    // STYLING DIVS FUNCTIONS
    // Todo list item container
    const createTodoContainer = (() => {
        let todoListItem = document.createElement('div');
        todoListItem.classList.add('listItem');
        if (todoListArr == ""){
            editListItemFormat(todoListItem);
        }
        return todoListItem;
    });

    // Priority and button div container for todo list items for styling
    const createEditPriorityBtnContainer = ((prioritySelectInput, cancelBtn, 
        submitBtn) => {
        let priorityBtnContainer = document.createElement('div');
        priorityBtnContainer.classList.add('priorityBtnContainer');
        return appendEditPriorityContainer(priorityBtnContainer, prioritySelectInput, cancelBtn, 
            submitBtn);
    })

    const createConfirmedPriorityBtnContainer = ((todoPriority, editBtn, deleteBtn) => {
        let priorityBtnContainer = document.createElement('div');
        priorityBtnContainer.classList.add('priorityBtnContainer');
        return appendConfirmedPriorityContainer(priorityBtnContainer, todoPriority, 
            editBtn, deleteBtn);
    })

    // Appends priority select and buttons to container
    const appendEditPriorityContainer = ((priorityBtnContainer, prioritySelectInput, cancelBtn, 
        submitBtn) => {
            priorityBtnContainer.appendChild(prioritySelectInput);
            priorityBtnContainer.appendChild(cancelBtn);
            priorityBtnContainer.appendChild(submitBtn);
            return priorityBtnContainer;
    })

    const appendConfirmedPriorityContainer = ((priorityBtnContainer, todoPriority, editBtn, 
        deleteBtn) => {
            priorityBtnContainer.appendChild(todoPriority);
            priorityBtnContainer.appendChild(editBtn);
            priorityBtnContainer.appendChild(deleteBtn);
            return priorityBtnContainer;
    });


    // FUNCTIONS FOR CREATING INPUTS
    const createTextInput = (() => {
        let textInput = document.createElement('input');
        textInput.classList.add('itemTextInput');
        textInput.setAttribute("type", "text");
        return textInput;
    });

    // Creates priority select input
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
        btn.textContent = capitalizeFirstLetter(btnName);

        return btn;
    });

    // Capitalize first letter for button text 
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    // FUNCTIONS FOR APPENDING TO THE DOM
    // Loops through array and appends list items to dom.
    // If list item is 'selectListItem' from clicking edit btn, 
    // it will be in edit format and not confirmed
    const printTodoListToDom = ((passedTodoListArr, selectedListItem=undefined) => {
        allListItemsContainer.innerHTML = "";
        for (var i=0; i<todoListArr.length; i++) {
            const todoListItem = createTodoContainer();
            todoListItem.setAttribute('value', [i]);
            if (i == selectedListItem) {
                editListItemFormat(todoListItem, passedTodoListArr, i);
            } else {
                confirmedListItemFormat(todoListItem, passedTodoListArr, i);
            }
        }
    })

    // Append todo list item to Dom
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