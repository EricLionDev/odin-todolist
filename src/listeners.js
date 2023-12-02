import * as dateFns from "date-fns";
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
      console.log(info);
      handleTaskModal(info);
    }
  });
}

function handleTaskModal(info) {
  const modalContainer = document.getElementById("task-modal-container");
  const clickedTask = searchForTaskId(info);

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

  const modalCloseBtn = document.getElementById("modal-close");
  modalCloseBtn.addEventListener("click", () => {
    modalContainer.close();
  });
  modalContainer.showModal();
}

function searchForTaskId(id) {
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  console.log(taskList);
  let foundItem = null;

  Object.values(taskList).some((array) => {
    foundItem = array.find((item) => item.id == id);
    return foundItem !== undefined;
  });
  console.log(foundItem);
  return foundItem;
}
