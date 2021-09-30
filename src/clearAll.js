function clearAllCompletedTasks(toDoTasks) {
  toDoTasks = toDoTasks.filter((task) => task.completed === false);
  toDoTasks.forEach((task, i) => {
    task.index = i;
  });
  return toDoTasks;
}

module.exports = clearAllCompletedTasks;
