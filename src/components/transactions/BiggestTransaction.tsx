import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import { getBiggestTransaction } from '../../store/selectors/transactions';

function BiggestTransaction() {
  const { items } = useSelector((state: RootState) => state.transactions);
  const biggestTransaction = getBiggestTransaction(items);

  if (!biggestTransaction) {
    return null;
  }

  return (
    <div>
      <h3>BiggestTransaction</h3>
      {biggestTransaction.name}
      {biggestTransaction.eurAmount}
    </div>
  );
}

export default BiggestTransaction;
