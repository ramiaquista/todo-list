// const addTask = require('./tasks-handler');
const crud = require('./tasks-handler');

const testArray = [];
const testArray2 = [{
  description: 'blabla',
  completed: false,
  index: 0,
}];

describe('Adding new tasks', () => {
  test('Adding Hi Task', () => {
    expect(crud.addTask(testArray, 'Hi')).toBe(1);
  });
  test('Adding an empty new task', () => {
    expect(crud.addTask(testArray, '')).toBe(0);
  });
});

describe('Removing tasks', () => {
  test('Remove one task with -1 id', () => {
    expect(crud.removeTask(testArray2, '-1')).toBe(0);
  });
  test('Remove one task', () => {
    expect(crud.removeTask(testArray2, '0')).toBe(1);
  });
});
