import list from "./tasklist";
var tasknums = 0;

export default function create_task(
  name,
  description,
  list,
  due_date,
  due_time,
  tags
) {
  this.id = tasknums;
  this.name = name;
  this.description = description;
  this.list = list;
  this.due_date = due_date;
  this.due_time = due_time;
  this.tags = tags;
  tasknums++;

  list.push(this);
  localStorage.setItem(tasklist, JSON.stringify(list));
}
