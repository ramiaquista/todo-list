class Crud {
  static addTask(list, input) {
    if (input !== '') {
      const task = {
        description: input,
        completed: false,
        index: list.length,
      };
      list.push(task);
      return 1;
    }
    return 0;
  }

  static removeTask(list, id) {
    if (list.length > 0) {
      if (id >= 0) {
        const lastitem = list.length - 1;
        if (id === lastitem) {
          list.splice(id, 1);
        } else {
          list.splice(id, 1);
          let j = parseInt(id, 10);
          for (j; j < list.length; j += 1) {
            list[j].index -= 1;
          }
        }
        return 1;
      }
      return 0;
    }
    return 0;
  }

  static updateDescription(list, index, input) {
    list[index].description = input;
    return list[index].description;
  }
}

module.exports = Crud;
