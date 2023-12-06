export const emptyList = {};

export function initializeTaskList() {
  const storedList = localStorage.getItem("tasklist");
  if (storedList) {
    // If there's existing data in localStorage, parse and use it
    return JSON.parse(storedList);
  } else {
    return emptyList;
  }
}
