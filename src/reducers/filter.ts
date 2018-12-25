import { Reducer } from 'redux';

import { ISetFilterAction, StatusTodo } from '../interfaces';

import { SET_FILTER } from '../constants';

export const filter: Reducer<StatusTodo, ISetFilterAction> = (state = StatusTodo.NEW, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
  }
  return state;
};
