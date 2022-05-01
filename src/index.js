import { format, isThisWeek } from 'date-fns';
import './style.css';

const todoListModule = (function() {

    // allProjects empty arrays, 1) todaysTasks 2) thisWeeksTasks 3) Default project
    let allProjects = [[], [], []];
    let currentProjectIndex = 2;

    const addItemBtn = document.querySelector('#addItemBtn');
    const allListItemsContainer = document.querySelector('.allListItemsContainer');
    const projectSubmitBtn = document.querySelector('#projectSubmitBtn');
    const allProjectsContainer = document.querySelector('.allProjectsContainer');
    const defaultProjectBtn = document.querySelector('#defaultProjectBtn');
    const todaysTasks = document.querySelector('#todaysTasks');
    const thisWeeksTasks = document.querySelector('#thisWeeksTasks');


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

    todaysTasks.addEventListener('click', function() { console.log('hello') });

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

    const formatDate = ((listItem) => {
        var hasNumber = /\d/; 
        if (hasNumber.test(listItem.children[1].children[1].value) == false) {
            return "No Date";
        } else {
            let dateValue = format(new Date(listItem.children[1].children[1].value), 'MM.dd.yyyy');
            return dateValue.replaceAll(".", "/");
        }
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
        for (var i=0; i<allProjects.length; i++){
            for (var j=0; j<allProjects[i].length; j++)
            if (isThisWeek(new Date(formatDateForUseInNewDate(allProjects[i][j].dueDate)))) {
                allProjects[1].push(JSON.parse(JSON.stringify(allProjects[i][j])));
            }
        }
        currentProjectIndex = 1;
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


    // STYLING DIVS FUNCTIONS
    // Todo list item container
    const createTodoContainer = (() => {
        let todoListItem = document.createElement('div');
        todoListItem.classList.add('listItem');
        if (allProjects[currentProjectIndex] == ""){
            editListItemFormat(todoListItem);
        }
        return todoListItem;
    });

    // Priority and button div container for todo list items for styling
    const createEditPriorityBtnContainer = ((prioritySelectInput, dateInput,
        cancelBtn, submitBtn) => {
        let priorityBtnContainer = document.createElement('div');
        priorityBtnContainer.classList.add('priorityBtnContainer');
        return appendEditPriorityContainer(priorityBtnContainer, prioritySelectInput, dateInput, cancelBtn, 
            submitBtn);
    })

    const createConfirmedPriorityBtnContainer = ((todoPriority, dueDate, editBtn, deleteBtn) => {
        let priorityBtnContainer = document.createElement('div');
        priorityBtnContainer.classList.add('priorityBtnContainer');
        return appendConfirmedPriorityContainer(priorityBtnContainer, todoPriority, dueDate, 
            editBtn, deleteBtn);
    })

    // Appends priority select and buttons to container
    const appendEditPriorityContainer = ((priorityBtnContainer, prioritySelectInput, dateInput, cancelBtn, 
        submitBtn) => {
            priorityBtnContainer.appendChild(prioritySelectInput);
            priorityBtnContainer.appendChild(dateInput);
            priorityBtnContainer.appendChild(cancelBtn);
            priorityBtnContainer.appendChild(submitBtn);
            return priorityBtnContainer;
    })

    const appendConfirmedPriorityContainer = ((priorityBtnContainer, todoPriority, dueDate, 
        editBtn, deleteBtn) => {
            priorityBtnContainer.appendChild(todoPriority);
            priorityBtnContainer.appendChild(dueDate);
            priorityBtnContainer.appendChild(editBtn);
            priorityBtnContainer.appendChild(deleteBtn);
            return priorityBtnContainer;
    });


    // FUNCTIONS FOR CREATING INPUTS
    const createTextInput = (() => {
        let textInput = document.createElement('input');
        textInput.setAttribute("type", "text")
        textInput.classList.add('itemTextInput');
        textInput.setAttribute("rows", "2");
        return textInput;
    });

    const createDateInput = (() => {
        let dateInput = document.createElement('input');
        dateInput.setAttribute("type", "date");
        dateInput.classList.add('dateInput');
        return dateInput;
    })

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