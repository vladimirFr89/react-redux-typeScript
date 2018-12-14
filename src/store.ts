import {
    applyMiddleware,
    combineReducers,
    createStore,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { createLogger } from 'redux-logger';

import { IAppState } from './interfaces';

import { todos } from './reducers/todos';
import { filter } from './reducers/filter';
import { addTodo, setFilter } from './actions';

const logger = createLogger();

const rootReducer = combineReducers<IAppState>({ todos, filter });
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger),
));

store.dispatch(addTodo({ id: 1, label: 'learn typeScript 3.1', status: 0 }));
store.dispatch(setFilter(1));

export default store;
