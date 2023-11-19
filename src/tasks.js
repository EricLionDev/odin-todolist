import list from "./tasklist";
var tasknums = 0;

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
    this.due_date = newTaskDate.value;
    tasknums++;

    list.push(this);
    localStorage.setItem("tasklist", JSON.stringify(list));
    console.log(this.name, this.description);

    this.task_form_reset();
  }

  task_form_reset() {
    var newTaskTitle = document.getElementById("new-task-title");
    var newTaskDescription = document.getElementById("new-task-description");
    var newTaskDate = document.getElementById("new-task-date");
    var newTaskList = document.getElementById("new-task-list");

    newTaskTitle.value = "";
    newTaskDescription.value = "";
    newTaskDate.value = "";
    newTaskList.value = "";
  }
}
