const crud = require('./tasks-handler');

const testArray = () => [];

const testArray2 = () => [{
  description: 'Lorem Ipsum',
  completed: false,
  index: 0,
}];

describe('Adding new tasks', () => {
  test('Adding Hi Task', () => {
    expect(crud.addTask(testArray(), 'Hi')).toBe(1);
  });
  test('Adding an empty new task', () => {
    expect(crud.addTask(testArray(), '')).toBe(0);
  });
});

describe('Removing tasks', () => {
  test('Remove one task on an empty array', () => {
    expect(crud.removeTask(testArray(), '0')).toBe(0);
  });
  test('Remove one task with -1 id', () => {
    expect(crud.removeTask(testArray2(), '-1')).toBe(0);
  });
  test('Remove one task', () => {
    expect(crud.removeTask(testArray2(), '0')).toBe(1);
  });
});

describe('Updating tasks', () => {
  test('compare the same string is inserted', () => {
    expect(crud.updateDescription(testArray2(), 0, 'Alex') === 'Alex').toBe(true);
  });
  test('unupdated description', () => {
    expect(crud.updateDescription(testArray2(), 0, 'Alex') === 'Hello World').toBe(false);
  });
  test('compare the same string is inserted', () => {
    expect(crud.updateDescription(testArray2(), 0, 'Hello World')).toBe('Hello World');
  });
});
