import { addTransaction, removeTransaction } from '../../../store/actions/transaction';

describe('tests the transactions actions', () => {
  test('tests the addTransaction action', () => {
    const action = addTransaction({
      id: '1',
      name: 'Test',
      eurAmount: 1,
    });

    expect(action).toEqual({
      type: 'addTransaction',
      payload: {
        id: '1',
        name: 'Test',
        eurAmount: 1,
      },
    });
  });

  test('tests the removeTransaction action', () => {
    const action = removeTransaction('1');

    expect(action).toEqual({
      type: 'removeTransaction',
      payload: '1',
    });
  });
});
