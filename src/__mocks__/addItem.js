function addItem(toDoTasks, task, index) {
  const li = `<li class="task" id="${index}"><input type="checkbox" class="checkBox" id="unmarked"><label contenteditable="false">${task.description}</label><i class="fas fa-ellipsis-v" id="move"></i><i class="fas fa-trash-alt hidden"></i></li>`;
  return li;
}

module.exports = addItem;
