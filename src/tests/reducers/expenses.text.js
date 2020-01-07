import expensesReducer from '../../reducers/expeneses';

test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});
