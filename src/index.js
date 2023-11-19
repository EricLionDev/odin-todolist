import "./style.css";
import create_task from "./tasks";

export default function handleNewTask() {
  let task = new create_task();
  return task;
}

document.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("new-task-btn");
  if (button) {
    button.addEventListener("click", handleNewTask);
  }
});
