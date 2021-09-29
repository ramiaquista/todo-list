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
      return 1;
    } else {
      return 0;
    }
  }

  // Method to remove a task from tasklist.
  static removeTask(list, id) {
    if (id >= 0) {
      const lastitem = list.length - 1;
      if (id === lastitem) {
        list.splice(id, 1);
      } else {
        list.splice(id, 1);
        let j = parseInt(id);
        for (j; j < list.length; j++) {
          list[j].index -= 1;
        }
      }
      return 1;
    } else {
      return 0;
    }
  }

  // Method to update task description.
  static updateDescription(list, index, input) {
    list[index].description = input;
    return list[index].description;
  }
}

module.exports = Crud;
