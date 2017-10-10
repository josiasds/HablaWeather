import React from 'react';
import {Provider} from 'react-redux';

import App from './containers/App';
import configureStore from './store/configure';

export default () => {
  const store = configureStore({});

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
