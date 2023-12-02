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

  modalContainer.showModal();
}

function searchForTaskId(id) {
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  let foundItem = null;

  Object.values(taskList).some((array) => {
    foundItem = array.find((item) => item.id === id);
    return foundItem !== undefined;
  });
  return foundItem;
}
