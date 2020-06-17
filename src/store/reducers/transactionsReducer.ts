import { TransactionsAcionTypes } from '../types';

export interface Transaction {
  id: string;
  name: string;
  eurAmount: number;
}

interface State {
  items: Transaction[];
}

export type AddTransaction = {
  type: TransactionsAcionTypes.addTransaction;
  payload: Transaction;
};

export type RemoveTransaction = {
  type: TransactionsAcionTypes.removeTransaction;
  payload: string;
};

type Action = AddTransaction | RemoveTransaction;

const initState: State = {
  items: [],
};

function transactionsReducer(state = initState, action: Action): State {
  switch (action.type) {
    case TransactionsAcionTypes.addTransaction:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case TransactionsAcionTypes.removeTransaction:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return { ...state };
  }
}

export default transactionsReducer;
