import { CurrencyActionTypes } from '../types';

export function addConversionRate(payload: number) {
  return {
    type: CurrencyActionTypes.addConversionRate,
    payload,
  };
}
