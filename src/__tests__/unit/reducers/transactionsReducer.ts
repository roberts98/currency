import transactionsReducer, {
  Transaction,
  AddTransaction,
  RemoveTransaction,
} from '../../../store/reducers/transactionsReducer';
import { TransactionsAcionTypes } from '../../../store/types';

describe('tests the transactions reducer', () => {
  const initState = {
    items: [],
  };

  const stateWithOneItem = {
    items: [
      {
        id: '1',
        name: '2',
        eurAmount: 3,
      },
    ],
  };

  const stateWithMoreItems = {
    items: [
      {
        id: '1',
        name: '2',
        eurAmount: 3,
      },
      {
        id: '2',
        name: '3',
        eurAmount: 4,
      },
    ],
  };

  const transactionToAdd: Transaction = {
    id: '1',
    name: '2',
    eurAmount: 3,
  };

  test('should add the transaction to state without transactions', () => {
    const action: AddTransaction = {
      type: TransactionsAcionTypes.addTransaction,
      payload: transactionToAdd,
    };

    expect(transactionsReducer(initState, action)).toEqual({ items: [transactionToAdd] });
  });

  test('should add the transactions to state with existing transactions', () => {
    const action: AddTransaction = {
      type: TransactionsAcionTypes.addTransaction,
      payload: transactionToAdd,
    };

    expect(transactionsReducer(stateWithOneItem, action)).toEqual({
      items: [...stateWithOneItem.items, transactionToAdd],
    });
  });

  test('should remove the transaction with only one transaction in state', () => {
    const action: RemoveTransaction = {
      type: TransactionsAcionTypes.removeTransaction,
      payload: '1',
    };

    expect(transactionsReducer(stateWithOneItem, action)).toEqual({ items: [] });
  });

  test('should remove the transaction with more than one transaction in state', () => {
    const action: RemoveTransaction = {
      type: TransactionsAcionTypes.removeTransaction,
      payload: '1',
    };

    expect(transactionsReducer(stateWithMoreItems, action)).toEqual({
      items: [
        {
          id: '2',
          name: '3',
          eurAmount: 4,
        },
      ],
    });
  });
});
