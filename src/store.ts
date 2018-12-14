import {
  applyMiddleware,
  createStore } from 'redux';

import { createLogger } from 'redux-logger';
import { todo } from './reducers/todo';
import { addTodo } from './actions';

const logger = createLogger();
const store = createStore(todo, applyMiddleware(logger));

store.dispatch(addTodo({ id: 1, label: 'learn typeScript 3.1' }));

export default store;
