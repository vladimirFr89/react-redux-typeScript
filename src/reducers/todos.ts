import { Reducer } from 'redux';
import { IAddTodoAction, ITodo } from '../interfaces';
import { ADD_TODO } from '../constants';

export const todos: Reducer<ITodo[], IAddTodoAction> = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
  }
  return state;
};
