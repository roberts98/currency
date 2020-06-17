import { createStore } from 'redux';

import rootReducer from './reducers';

function makeStore() {
  const store = createStore(rootReducer);

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;

export default makeStore;
