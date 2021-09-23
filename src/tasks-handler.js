/* eslint-disable no-plusplus */
/* eslint-disable radix */

class Crud {
  // Method to add a new task to tasklist.
  static addTask(list, input) {
    if (input !== '') {
      const task = {
        description: input,
        completed: false,
        index: list.length,
      };
      list.push(task);
    }
  }

  // Method to remove a task from tasklist.
  static removeTask(list, i) {
    if (i >= 0) {
      const lastitem = list.length - 1;
      if (i === lastitem) {
        list.splice(i, 1);
      } else {
        list.splice(i, 1);
        let j = parseInt(i);
        for (j; j < list.length; j++) {
          list[j].index -= 1;
        }
      }
    }
  }

  // Method to update task description.
  static updateDescription(list, index, input) {
    list[index].description = input;
  }
}

module.exports = Crud;
