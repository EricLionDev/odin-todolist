import { parseISO } from "date-fns";
import { task_list } from "./tasklist";
var newTaskList = document.getElementById("new-task-list");
var tasknums = 0;

// class for handling tasks
export default class create_task {
  constructor() {
    var newTaskTitle = document.getElementById("new-task-title");
    var newTaskDescription = document.getElementById("new-task-description");
    var newTaskDate = document.getElementById("new-task-date");
    this.id = tasknums;
    this.name = newTaskTitle.value;
    this.description = newTaskDescription.value;
    this.due_date = parseISO(newTaskDate.value);
    tasknums++;

    // choosing new list name or existing list name
    var newTaskListChoice = document.getElementById("new-task-list");
    if (newTaskListChoice.value == "new-list") {
      this.list = document.getElementById("new-task-list-input").value;
    } else {
      this.list = newTaskListChoice.value;
    }

    // handle lists and new lists
    if (task_list[this.list]) {
      task_list[this.list].push(this);
    } else {
      task_list[this.list] = [];
      task_list[this.list].push(this);
    }

    // adding to localstorage
    localStorage.setItem("tasklist", JSON.stringify(task_list));
    console.log(this.name, this.description);

    task_form_reset();
  }
}

// ui control, resets form, sets task list back to new list
function task_form_reset() {
  var newTaskTitle = document.getElementById("new-task-title");
  var newTaskDescription = document.getElementById("new-task-description");
  var newTaskDate = document.getElementById("new-task-date");
  var newTaskList = document.getElementById("new-task-list-input");

  newTaskTitle.value = "";
  newTaskDescription.value = "";
  newTaskDate.value = "";
  newTaskList.value = "";
  handleNewList();
}

// ui control, shows/hides the new list input box for if they want to make a new list
export function handleNewList() {
  var newListWrapper = document.getElementById("new-list-input-wrapper");
  if (newTaskList.value == "new-list") {
    document.getElementById("new-task-list-input").required = true;
    newListWrapper.style.display = "block";
    console.log(newListWrapper.style.display);
  } else {
    newListWrapper.style.display = "none";
    document.getElementById("new-task-list-input").required = false;
    console.log(newListWrapper.style.display);
  }
  updateNavList();
}

// ui to update nav side menu with new lists
export function updateNavList() {
  let listContainer = document.getElementById("menu-lists-list");
  let listOptionsContainer = document.getElementById("new-task-list");
  let listTitles = Object.keys(task_list);

  let existingListItems = listContainer.querySelectorAll("li");
  let itemExists = false;

  listTitles.forEach((listTitle) => {
    existingListItems.forEach((element) => {
      if (element.textContent == listTitle) {
        itemExists = true;
      }
    });
    if (!itemExists) {
      // add it to nav list
      let newNavItem = document.createElement("li");
      newNavItem.innerText = listTitle;
      newNavItem.value = listTitle;
      listContainer.appendChild(newNavItem);

      // add it to option list
      let newOptionItem = document.createElement("option");
      newOptionItem.value = listTitle;
      newOptionItem.innerText = listTitle;
      listOptionsContainer.appendChild(newOptionItem);
    }
  });
}
