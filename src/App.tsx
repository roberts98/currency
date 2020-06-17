import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import makeStore from './store';
import { Header } from './components/layout';
import Conversion from './components/Conversion';
import { TransactionForm, TransactionsList, TransactionsSum, BiggestTransaction } from './components/transactions';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={makeStore()}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Conversion />
        <TransactionForm />
        <Flex>
          <TransactionsList />
          <BiggestTransaction />
        </Flex>
        <TransactionsSum />
      </div>
    </Provider>
  );
}

const Flex = styled.div`
  display: flex;
`;

export default App;
