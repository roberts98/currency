import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import { getSumOfAllTransactions } from '../../store/selectors/transactions';
import Heading from '../styled/Heading';
import { round2Decimals } from '../../utils/numbers';

function TransactionsSum() {
  const {
    transactions: { items },
    currency: { conversionRate },
  } = useSelector((state: RootState) => state);
  const sum = getSumOfAllTransactions(items);

  return (
    <Wrapper>
      <Heading>Sum of all transactions</Heading>
      <Text>
        {round2Decimals(sum)}€ - {round2Decimals(sum * conversionRate)}PLN
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 40px;
  right: 40px;
  background-color: #fff;
  padding: 20px 40px;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const Text = styled.p`
  font-weight: 500;
`;

export default TransactionsSum;
