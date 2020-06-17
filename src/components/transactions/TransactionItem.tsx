import React from 'react';
import styled from 'styled-components';

import { Transaction } from '../../store/reducers/transactionsReducer';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Colors } from '../../styles/colors';
import { round2Decimals } from '../../utils/numbers';
import { removeTransaction } from '../../store/actions/transaction';

interface Props {
  item: Transaction;
}

function TransactionItem({ item }: Props) {
  const dispatch = useDispatch();
  const { conversionRate } = useSelector((state: RootState) => state.currency);

  function handleRemove(id: string) {
    dispatch(removeTransaction(id));
  }

  return (
    <Item>
      <ItemName>{item.name}</ItemName>
      <ItemAmount>
        {round2Decimals(item.eurAmount)} € - {round2Decimals(item.eurAmount * conversionRate)}PLN
      </ItemAmount>
      <DeleteBtn onClick={() => handleRemove(item.id)}>X</DeleteBtn>
    </Item>
  );
}

const Item = styled.article`
  box-shadow: 4px 6px 28px rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  margin-bottom: 24px;
  position: relative;
`;

const ItemName = styled.h3`
  color: ${Colors.primary};
`;

const ItemAmount = styled.p`
  font-weight: 500;
`;

const DeleteBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: #f00;
  border: unset;
  background: unset;
  cursor: pointer;
  font-size: 32px;
`;

export default TransactionItem;
