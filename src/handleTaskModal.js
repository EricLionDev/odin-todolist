import * as dateFns from "date-fns";
import { updateNavList, generateMainContentList } from "./tasks";
import { searchForTaskId } from "./listeners";

export function handleTaskModal(info) {
  const modalContainer = document.getElementById("task-modal-container");
  const clickedTask = searchForTaskId(info);
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  const matchingArray = taskList[clickedTask.list];
  let index = matchingArray.findIndex((task) => task.id == clickedTask.id);

  console.log("clicked task: " + clickedTask);
  modalContainer.innerHTML = ` 
  <div id="modal-content">
  <!-- task title -->
  <p id="modal-task-title">${clickedTask.name}</p>
  <!-- x close btn -->
  <span class="material-symbols-outlined" id="modal-close">
    close
  </span>
  <!-- info area -->
  <div id="modal-info-wrapper">
    <!-- description -->
    <div id="modal-desc-container">
      <p id="modal-desc-label">Task Description:</p>
      <p id="modal-desc-content">
        ${clickedTask.description}
      </p>
    </div>
    <div id="modal-bottom-section-wrapper">
    <div id="modal-modifiers-wrapper">
      <!-- due date info -->
      <div class="modifier-label-container">
        <p class="modal-label">Due Date:</p>
      <div class="modal-modifier-info-wrapper">
        <span class="material-symbols-outlined">
          calendar_today
        </span>
        <div class="modal-modifier-text">${dateFns.format(
          new Date(clickedTask.due_date),
          "MMM do, yyyy 'at' hh:mm 	b"
        )}</div>
      </div>
      </div>
      <!-- list info -->
      <div class="modifier-label-container">
        <div class="modal-label">List:</div>
        <div class="modal-modifier-info-wrapper">
          <span class="material-symbols-outlined"> list </span>
          <div class="modal-modifier-text">${clickedTask.list}</div>
        </div>
      </div>
    </div>
    <div id="modal-btns">
      <div id="modal-bottom-btn" data-id="complete">Complete</div>
      <div id="modal-bottom-btn" data-id="delete">Delete</div>
    </div></div>
  </div>`;

  //   close btn functionality
  const modalCloseBtn = document.getElementById("modal-close");
  modalCloseBtn.addEventListener("click", () => {
    modalContainer.close();
  });
  // delete btn functionality
  const modalDeleteBtn = document.querySelector('[data-id="delete"]');
  modalDeleteBtn.addEventListener("click", () => {
    matchingArray.splice(index, 1);

    localStorage.setItem("tasklist", JSON.stringify(taskList));
    updateNavList();
    generateMainContentList();
    modalContainer.close();
  });

  //   show modal
  modalContainer.showModal();
}
