import * as dateFns from "date-fns";
import {
  updateNavList,
  generateMainContentList,
  searchForTaskId,
  filterTasks,
  renderTasks,
} from "./tasks";

export function setupModalListeners() {
  const parentElement = document.getElementById("main-content-list");
  parentElement.addEventListener("click", (event) => {
    let clickTarget = event.target;

    while (
      clickTarget != null &&
      !clickTarget.classList.contains("list-arrow-container")
    ) {
      clickTarget = clickTarget.parentElement;
    }
    if (clickTarget != null) {
      const info = clickTarget.getAttribute("data-info");
      handleTaskModal(info);
    }
  });
}

function handleTaskModal(info) {
  const modalContainer = document.getElementById("task-modal-container");
  const clickedTask = searchForTaskId(info);
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  const matchingArray =
    clickedTask.marked_completed === false
      ? taskList[clickedTask.list]
      : taskList["marked_completed"];
  let index = matchingArray.findIndex((task) => task.id == clickedTask.id);
  let itemCompleteBtnText = clickedTask.marked_completed
    ? "Mark Incomplete"
    : "Complete";

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
          "MMM do, yyyy"
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
      <div id="modal-bottom-btn" data-id="complete">${itemCompleteBtnText}</div>
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
    // delete item
    let deletedItem = matchingArray.splice(index, 1);
    // update list
    localStorage.setItem("tasklist", JSON.stringify(taskList));
    // rerender page items

    let currentLoadedList = filterTasks(localStorage.getItem("current_list"));
    renderTasks(currentLoadedList);
    updateNavList();
    modalContainer.close();
  });

  // complete btn functionality
  const modalCompleteBtn = document.querySelector('[data-id="complete"]');
  modalCompleteBtn.addEventListener("click", () => {
    let currentIndex = matchingArray.findIndex(
      (task) => task.id == clickedTask.id
    );

    let completedItem = matchingArray.splice(currentIndex, 1)[0];
    if (clickedTask !== null && clickedTask !== undefined) {
      if (clickedTask.marked_completed !== true) {
        completedItem.marked_completed = true;
        taskList["marked_completed"].push(completedItem);
        // update list
        localStorage.setItem("tasklist", JSON.stringify(taskList));
        // rerender page items
      } else {
        // UN MARK AS COMPLETE
        matchingArray.splice(currentIndex, 1)[0];
        const prevItemArray = taskList[clickedTask.list];
        clickedTask.marked_completed = false;
        prevItemArray.push(clickedTask);
        // update list
        localStorage.setItem("tasklist", JSON.stringify(taskList));
      }
      let currentLoadedList = filterTasks(localStorage.getItem("current_list"));
      console.log("current loaded list on mark :" + currentLoadedList);
      renderTasks(currentLoadedList);
      updateNavList();
      modalContainer.close();
    }
  });

  //   show modal
  modalContainer.showModal();
}
