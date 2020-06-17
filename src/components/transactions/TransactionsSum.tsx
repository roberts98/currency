import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { getSumOfAllTransactions } from '../../store/selectors/transactions';

function TransactionsSum() {
  const {
    transactions: { items },
    currency: { conversionRate },
  } = useSelector((state: RootState) => state);
  const sum = getSumOfAllTransactions(items);
  return (
    <div>
      {sum}EUR - {sum * conversionRate}PLN
    </div>
  );
}

export default TransactionsSum;
