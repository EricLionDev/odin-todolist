import * as dateFns from "date-fns";
import "./style.css";
import create_task, { renderTasks } from "./tasks";
import { handleNewList, filterTasks } from "./tasks";
import { setupModalListeners } from "./listeners";
import { initializeTaskList } from "./tasklist";

//  creating new task
export default function handleNewTask() {
  //check form validity
  if (document.getElementById("new-task-form").checkValidity()) {
    let task = new create_task();
    return task;
  }
}
// new task submit btn event listener
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("new-task-btn");
  const newTaskList = document.getElementById("new-task-list");
  if (button) {
    button.addEventListener("click", handleNewTask);
  }
  if (newTaskList) {
    newTaskList.addEventListener("change", () => {
      handleNewList();
    });
  }
  const initialLoadList = filterTasks("All");
  renderTasks(initialLoadList);
  handleNewList();
  setupModalListeners();
});
