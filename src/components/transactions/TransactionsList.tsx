import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers';
import { removeTransaction } from '../../store/actions/transaction';

function TransactionsList() {
  const dispatch = useDispatch();
  const {
    transactions: { items },
    currency: { conversionRate },
  } = useSelector((state: RootState) => state);

  function handleRemoveClick(id: string) {
    dispatch(removeTransaction(id));
  }

  return (
    <div>
      {items.map((item) => (
        <div>
          <h3>
            {item.eurAmount}EUR - {item.name} - {item.eurAmount * conversionRate}PLN
          </h3>
          <button onClick={() => handleRemoveClick(item.id)}>Remove me</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionsList;
