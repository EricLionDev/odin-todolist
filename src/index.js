import "./style.css";
import create_task from "./tasks";

export default function handleNewTask() {
  let task = new create_task();
  return task;
}
