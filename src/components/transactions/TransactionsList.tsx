import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { RootState } from '../../store/reducers';
import { Colors } from '../../styles/colors';
import Heading from '../styled/Heading';
import TransactionItem from './TransactionItem';

function TransactionsList() {
  const {
    transactions: { items },
  } = useSelector((state: RootState) => state);

  if (!items.length) {
    return null;
  }

  return (
    <Wrapper>
      <Heading>All transactions</Heading>
      <List>
        {items.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 30px 60px 30px 200px;
  background-color: ${Colors.light};
  width: 50%;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export default TransactionsList;
