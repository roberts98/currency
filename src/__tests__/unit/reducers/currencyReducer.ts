import currencyReducer from '../../../store/reducers/currencyReducer';
import { CurrencyActionTypes } from '../../../store/types';

describe('tests the currency reducer', () => {
  test('should add the conversion rate', () => {
    const initState = {
      conversionRate: 1,
    };

    expect(currencyReducer(initState, { type: CurrencyActionTypes.addConversionRate, payload: 2 })).toEqual({
      conversionRate: 2,
    });
  });
});
