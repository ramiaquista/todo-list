const Status = require('./task-status');

test('Box status is marked', () => {
  const box = {
    id: 'marked',
  };
  expect(Status.boxNotMarked(box)).toBe(false);
});

test('Box status is not marked', () => {
  const box = {
    id: 'unmarked',
  };
  expect(Status.boxNotMarked(box)).toBe(true);
});
