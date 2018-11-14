import Logic from './Logic';

it('sums 1 + 1 properly', () => {
  const sum = Logic.sum(1, 1)
  expect(sum).toBe(2)
});
