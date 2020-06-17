import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import { addTransaction } from '../../store/actions/transaction';
import { Input, Button } from '../styled';

function TransactionForm() {
  const dispatch = useDispatch();
  const { conversionRate } = useSelector((state: RootState) => state.currency);
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');

  function resetState() {
    setAmount('');
    setName('');
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(value);
    }
  }

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setName(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !amount) {
      return alert('Please provide all neccescary data!');
    }

    const transaction = {
      name,
      eurAmount: Number(amount),
      id: uuid(),
    };

    dispatch(addTransaction(transaction));
    resetState();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormElement>
        <Label htmlFor="name">Transaction name</Label>
        <Input id="name" onChange={handleNameChange} value={name} type="text" placeholder="Transaction name" />
      </FormElement>
      <FormElement>
        <Label htmlFor="eur">Amount in €</Label>
        <Input id="eur" onChange={handleAmountChange} value={amount} type="text" placeholder="Amount in EUR" />
      </FormElement>
      <FormElement>
        <Label htmlFor="pln">Amount in PLN</Label>
        <Input id="pln" disabled type="text" value={(Number(amount) * conversionRate).toString()} placeholder="0" />
      </FormElement>
      <FormElement>
        <Button type="submit">Add transaction</Button>
      </FormElement>
    </Form>
  );
}

const Form = styled.form`
  padding: 60px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormElement = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
`;

export default TransactionForm;
