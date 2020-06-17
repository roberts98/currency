import React from 'react';
import { Provider } from 'react-redux';

import makeStore from './store';
import { Header } from './components/layout';
import Conversion from './components/Conversion';
import { TransactionForm, TransactionsList, TransactionsSum, BiggestTransaction } from './components/transactions';

function App() {
  return (
    <Provider store={makeStore()}>
      <div className="App">
        <Header />
        <Conversion />
        <TransactionForm />
        <TransactionsList />
        <TransactionsSum />
        <BiggestTransaction />
      </div>
    </Provider>
  );
}

export default App;
