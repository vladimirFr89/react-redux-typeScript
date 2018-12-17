import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
import App from './components/App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App name="Vladimir"/>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
