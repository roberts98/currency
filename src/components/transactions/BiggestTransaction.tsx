import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import { getBiggestTransaction } from '../../store/selectors/transactions';
import { Colors } from '../../styles/colors';
import { Heading } from '../styled';
import { TransactionItem } from '.';

function BiggestTransaction() {
  const { items } = useSelector((state: RootState) => state.transactions);
  const biggestTransaction = getBiggestTransaction(items);

  if (!biggestTransaction) {
    return null;
  }

  return (
    <Section>
      <Heading>Biggest Transaction</Heading>
      <TransactionItem item={biggestTransaction} />
    </Section>
  );
}

const Section = styled.section`
  padding-top: 30px;
  padding-right: 200px;
  width: 50%;
  background-color: ${Colors.light};
`;

export default BiggestTransaction;
