import { Transaction } from '../reducers/transactionsReducer';

export function getSumOfAllTransactions(transactions: Transaction[]) {
  return transactions.reduce((acc, item) => {
    acc += item.eurAmount;
    return acc;
  }, 0);
}

export function getBiggestTransaction(transactions: Transaction[]) {
  if (!transactions.length) {
    return null;
  }

  return transactions.sort((a, b) => b.eurAmount - a.eurAmount)[0];
}
