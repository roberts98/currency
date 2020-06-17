import { getBiggestTransaction, getSumOfAllTransactions } from '../../../store/selectors/transactions';
import { Transaction } from '../../../store/reducers/transactionsReducer';

const fakeTransactions: Transaction[] = [
  {
    id: '1',
    name: '1',
    eurAmount: 1,
  },
  {
    id: '2',
    name: '2',
    eurAmount: 2,
  },
  {
    id: '3',
    name: '3',
    eurAmount: 3,
  },
];

describe('tests the getSumOfAllTransactions selector', () => {
  test('returns 0 if no transactions', () => {
    const sum = getSumOfAllTransactions([]);

    expect(sum).toBe(0);
  });

  test('returns correct sum for given transactions', () => {
    const sum = getSumOfAllTransactions(fakeTransactions);

    expect(sum).toBe(6);
  });
});

describe('tests the getBiggsetTransaction selector', () => {
  test('returns null if no transactions', () => {
    const biggestTransaction = getBiggestTransaction([]);

    expect(biggestTransaction).toBe(null);
  });

  test('returns the biggest transaction for given transactions', () => {
    const biggestTransaction = getBiggestTransaction(fakeTransactions);

    expect(biggestTransaction).toEqual({
      id: '3',
      name: '3',
      eurAmount: 3,
    });
  });
});
