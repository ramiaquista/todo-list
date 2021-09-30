import addItem from './addItem';

jest.mock('./addItem');

const task1 = {
  description: '1',
  completed: false,
  index: 0,
};
const task2 = {
  description: 'Hello World',
  completed: false,
  index: 1,
};
const toDoTasks = () => [task1, task2];

describe('DOM Testing', () => {
  test('Adding new task to the DOM', () => {
    const testTask = '<li class="task" id="0"><input type="checkbox" class="checkBox" id="unmarked"><label contenteditable="false">1</label><i class="fas fa-ellipsis-v" id="move"></i><i class="fas fa-trash-alt hidden"></i></li>';
    expect(addItem(toDoTasks(), task1, 0)).toBe(testTask);
  });
  test('Adding new task to the DOM', () => {
    const testTask = '<li class="task" id="1"><input type="checkbox" class="checkBox" id="unmarked"><label contenteditable="false">Hello World</label><i class="fas fa-ellipsis-v" id="move"></i><i class="fas fa-trash-alt hidden"></i></li>';
    expect(addItem(toDoTasks(), task2, 1)).toBe(testTask);
  });
});
