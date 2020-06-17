import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

import { RootState } from '../../store/reducers';
import { addTransaction } from '../../store/actions/transaction';

function TransactionForm() {
  const dispatch = useDispatch();
  const { conversionRate } = useSelector((state: RootState) => state.currency);
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');

  function resetState() {
    setAmount(0);
    setName('');
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setAmount(Number(value));
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setName(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const transaction = {
      name,
      eurAmount: amount,
      id: uuid(),
    };

    dispatch(addTransaction(transaction));
    resetState();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleNameChange} value={name} type="text" placeholder="Transaction name" />
      <input onChange={handleAmountChange} value={amount} type="number" placeholder="Amount in EUR" />
      <input disabled type="number" value={amount * conversionRate} placeholder="0" />
      <input type="submit" value="Add transaction!" />
    </form>
  );
}

export default TransactionForm;
