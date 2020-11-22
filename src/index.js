import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'store';

import { AppContainer } from 'react-hot-loader';
import App from './App';

import Items from 'components/Items';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <App>
        <h1 style={{ margin: '20px', fontFamily: 'Arial, sans-serif', fontSize: '26px' }}>
          A Nested List Editor
        </h1>
        <Items />
      </App>
    </AppContainer>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  })
}
