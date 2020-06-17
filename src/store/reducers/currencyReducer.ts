import { CurrencyActionTypes } from '../types';

interface State {
  conversionRate: number;
}

type AddConversionRateAction = {
  type: CurrencyActionTypes.addConversionRate;
  payload: number;
};

type Action = AddConversionRateAction;

const initState: State = {
  conversionRate: 1,
};

function currencyReducer(state = initState, action: Action): State {
  switch (action.type) {
    case CurrencyActionTypes.addConversionRate:
      return {
        ...state,
        conversionRate: action.payload,
      };
    default:
      return { ...state };
  }
}

export default currencyReducer;
