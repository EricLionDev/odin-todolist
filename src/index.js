import "./style.css";
import create_task from "./tasks";
import { handleNewList } from "./tasks";

//  creating new task
export default function handleNewTask() {
  let task = new create_task();
  return task;
}
// new task submit btn event listener
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("new-task-btn");
  const newTaskList = document.getElementById("new-task-list");
  if (button) {
    button.addEventListener("click", handleNewTask);
  }
  if (newTaskList) {
    console.log("yes" + newTaskList.value);

    newTaskList.addEventListener("change", () => {
      console.log("running func");
      handleNewList();
    });
  }
});
