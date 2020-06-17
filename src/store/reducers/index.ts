import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import transactionsReducer from './transactionsReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  transactions: transactionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
