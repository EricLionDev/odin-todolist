import { parseISO } from "date-fns";
import { task_list, list_list } from "./tasklist";
var newTaskList = document.getElementById("new-task-list");
var tasknums = 0;

// class for handling tasks
export default class create_task {
  constructor() {
    var newTaskTitle = document.getElementById("new-task-title");
    var newTaskDescription = document.getElementById("new-task-description");
    var newTaskDate = document.getElementById("new-task-date");
    var newTaskList = document.getElementById("new-task-list");
    this.id = tasknums;
    this.name = newTaskTitle.value;
    this.description = newTaskDescription.value;
    this.list = newTaskList.value;
    this.due_date = parseISO(newTaskDate.value);
    tasknums++;

    task_list.push(this);
    list_list.push(this.list);
    localStorage.setItem("tasklist", JSON.stringify(list));
    console.log(this.name, this.description);

    task_form_reset();
  }
}

// ui control, resets form, sets task list back to new list
function task_form_reset() {
  var newTaskTitle = document.getElementById("new-task-title");
  var newTaskDescription = document.getElementById("new-task-description");
  var newTaskDate = document.getElementById("new-task-date");
  var newTaskList = document.getElementById("new-task-list");

  newTaskTitle.value = "";
  newTaskDescription.value = "";
  newTaskDate.value = "";
  newTaskList.value = "new-list";
  handleNewList();
}

// ui, shows/hides the new list input box for if they want to make a new list
export function handleNewList() {
  var newListWrapper = document.getElementById("new-list-input-wrapper");
  if (newTaskList.value == "new-list") {
    newListWrapper.style.display = "block";
    console.log(newListWrapper.style.display);
  } else {
    newListWrapper.style.display = "none";
    console.log(newListWrapper.style.display);
  }
}
