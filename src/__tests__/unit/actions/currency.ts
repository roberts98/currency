import { addConversionRate } from '../../../store/actions/currency';

describe('tests the currency actions', () => {
  test('tests the addConversionRate action', () => {
    const action = addConversionRate(1);

    expect(action).toEqual({
      type: 'addConversionRate',
      payload: 1,
    });
  });
});
