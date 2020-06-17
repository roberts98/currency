import { TransactionsAcionTypes } from '../types';

import { Transaction } from '../reducers/transactionsReducer';

export function addTransaction(payload: Transaction) {
  return {
    type: TransactionsAcionTypes.addTransaction,
    payload,
  };
}

export function removeTransaction(payload: string) {
  return {
    type: TransactionsAcionTypes.removeTransaction,
    payload,
  };
}
