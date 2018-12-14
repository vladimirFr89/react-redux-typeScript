import { Reducer } from 'redux';
import { IAppState, IAddTodoAction } from '../interfaces';
import { ADD_TODO } from '../constants';

export const todo: Reducer<IAppState, IAddTodoAction> = (state = { todos: [], filter: 0 }, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
  }
  return state;
};
