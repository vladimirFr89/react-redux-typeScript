import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Hello from './components/Hello';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Hello name="TypeScript" enthusiasmLevel={100}/>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
