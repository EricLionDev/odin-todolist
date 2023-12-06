import * as dateFns from "date-fns";
import { initializeTaskList } from "./tasklist";
const newTaskList = document.getElementById("new-task-list");

let task_list = initializeTaskList();

// class for handling tasks
export default class create_task {
  constructor() {
    var newTaskTitle = document.getElementById("new-task-title");
    var newTaskDescription = document.getElementById("new-task-description");
    var newTaskDate = document.getElementById("new-task-date");
    this.id = generateTaskId();
    this.name = newTaskTitle.value;
    this.description = newTaskDescription.value;
    this.due_date = dateFns.parseISO(newTaskDate.value);
    this.marked_completed = false;

    // choosing new list name or existing list name
    var newTaskListChoice = document.getElementById("new-task-list");
    if (newTaskListChoice.value == "new-list") {
      this.list = document.getElementById("new-task-list-input").value;
    } else {
      this.list = newTaskListChoice.value;
    }

    // handle lists and new lists
    if (task_list[this.list]) {
      task_list[this.list].push(this);
    } else {
      task_list[this.list] = [];
      task_list[this.list].push(this);
    }
    if (!task_list["marked_completed"]) {
      task_list["marked_completed"] = [];
    }

    // adding to localstorage
    localStorage.setItem("tasklist", JSON.stringify(task_list));

    task_form_reset();
  }
}

// ui control, resets form, sets task list back to new list
function task_form_reset() {
  var newTaskTitle = document.getElementById("new-task-title");
  var newTaskDescription = document.getElementById("new-task-description");
  var newTaskDate = document.getElementById("new-task-date");
  var newTaskList = document.getElementById("new-task-list-input");

  newTaskTitle.value = "";
  newTaskDescription.value = "";
  newTaskDate.value = "";
  newTaskList.value = "";
  handleNewList();
}

// ui control, shows/hides the new list input box for if they want to make a new list
export function handleNewList() {
  var newListWrapper = document.getElementById("new-list-input-wrapper");
  if (newTaskList.value == "new-list") {
    document.getElementById("new-task-list-input").required = true;
    newListWrapper.style.display = "block";
  } else {
    newListWrapper.style.display = "none";
    document.getElementById("new-task-list-input").required = false;
  }

  updateNavList();
}

// ui to update nav side menu with new lists
export function updateNavList() {
  let listContainer = document.getElementById("menu-lists-list");
  let listOptionsContainer = document.getElementById("new-task-list");
  const storedList = JSON.parse(localStorage.getItem("tasklist"));

  if (storedList !== null && storedList !== undefined) {
    let listTitles = Object.keys(storedList);
    listTitles.forEach((listTitle) => {
      let existingListItems = listContainer.querySelectorAll("li");
      let itemExists = false;

      existingListItems.forEach((element) => {
        if (element.textContent === listTitle) {
          itemExists = true;
        }
      });
      if (listTitle != "marked_completed") {
        if (!itemExists) {
          // add it to nav list
          let newNavItem = document.createElement("li");
          newNavItem.innerText = listTitle;
          newNavItem.setAttribute("data-filter-name", listTitle);
          newNavItem.classList.add("nav-filter-selector");
          listContainer.appendChild(newNavItem);

          // add it to option list
          let newOptionItem = document.createElement("option");
          newOptionItem.value = listTitle;
          newOptionItem.innerText = listTitle;
          listOptionsContainer.appendChild(newOptionItem);
        }
      }
    });
  }
  const filterOptions = document.querySelectorAll(".nav-filter-selector");
  filterOptions.forEach((e) => {
    e.addEventListener("click", (event) => {
      const selectedFilter = event.target.getAttribute("data-filter-name");
      console.log("clicked filter: " + selectedFilter);
      const filteredTasks = filterTasks(selectedFilter);
      console.log("current list " + selectedFilter);
      localStorage.setItem("current_list", selectedFilter);
      renderTasks(filteredTasks);
    });
  });
}

export function searchForTaskId(id) {
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  let foundItem = null;

  Object.values(taskList).some((array) => {
    foundItem = array.find((item) => item.id == id);
    return foundItem !== undefined;
  });
  console.log("searchfortaskid found item: " + JSON.stringify(foundItem));
  return foundItem;
}

function generateTaskId() {
  // Retrieve the last ID and parse it to an integer
  let lastId = parseInt(localStorage.getItem("lastTaskId") || "0");

  // Increment the ID
  lastId++;

  // Save the new last ID back to localStorage
  localStorage.setItem("lastTaskId", lastId.toString());

  return lastId;
}

export function filterTasks(filter) {
  const taskList = JSON.parse(localStorage.getItem("tasklist"));
  let filteredTasks = [];
  if (taskList !== null && taskList !== undefined) {
    if (filter === "Completed") {
      filteredTasks = taskList["marked_completed"];
    } else if (filter === "Today") {
      Object.values(taskList).forEach((list) => {
        list.forEach((task) => {
          if (dateFns.isToday(dateFns.parseISO(task.due_date))) {
            filteredTasks.push(task);
            console.log("date based task list : " + filteredTasks);
          }
        });
      });
    } else if (filter === "All") {
      Object.values(taskList).forEach((list) => {
        list.forEach((task) => {
          filteredTasks.push(task);
        });
      });
    } else if (filter === "This Week") {
      Object.values(taskList).forEach((list) => {
        list.forEach((task) => {
          if (dateFns.isThisWeek(dateFns.parseISO(task.due_date))) {
            filteredTasks.push(task);
            console.log("week based task list : " + filteredTasks);
          }
        });
      });
    } else {
      Object.values(taskList).forEach((list) => {
        list.forEach((task) => {
          console.log("list is :" + JSON.stringify(list));
          console.log("task is :" + task);
          if (filter === task.list) {
            filteredTasks.push(task);
          }
        });
      });
    }

    return filteredTasks;
  }
}

export function renderTasks(tasks) {
  const listContainer = document.getElementById("main-content-list");
  listContainer.innerHTML = ""; // Clear existing tasks
  let htmlContent = "";
  if (!tasks) {
    console.log("!!! There are no list items.");
    listContainer.innerHTML = "";
    // add a empty display thing here eventually ^^^^
  } else {
    tasks.forEach((task) => {
      if (task !== null && task !== undefined) {
        let itemClass = task.marked_completed
          ? "main-content-list-item completed"
          : "main-content-list-item";
        htmlContent += `
    <li class="${itemClass}" data-item-container="${task.id}">
    <div class="main-list-left-container">
      <p class="main-list-item-title">${task.name}</p>
      <div class="main-list-modifiers-container">
        <div class="modifier-list-date-container">
          <span class="material-symbols-outlined">
            calendar_today
          </span>
          <p id="modifier-list-date">${dateFns.format(
            new Date(task.due_date),
            "MMM do, yyyy"
          )}</p>
        </div>
        <div class="modifier-list-list-container">
          <span class="material-symbols-outlined"> list </span>
          <p id="modifier-list-list">${task.list}</p>
        </div>
      </div>
    </div>
    <!-- arrow container -->
    <div class="list-arrow-container" data-info="${task.id}">
      <span class="material-symbols-outlined">
        arrow_forward_ios
      </span>
    </div>
  </li>`;
      }
    });
    listContainer.innerHTML = htmlContent ? htmlContent : "";
  }
}
