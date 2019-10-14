import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/app';
import './index.html';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LastLocationProvider>
        <App />
      </LastLocationProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
