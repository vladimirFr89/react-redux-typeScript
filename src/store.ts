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

export default store;
