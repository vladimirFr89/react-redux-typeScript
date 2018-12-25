import { Reducer } from 'redux';
import { IAddTodoAction, ITodo, IUpdateTodoAction, IRemoveTodoAction, ISetStatusAction } from '../interfaces';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_STATUS_TODO } from '../constants';

type TodoAction = IAddTodoAction & IUpdateTodoAction & IRemoveTodoAction & ISetStatusAction;

export const todos: Reducer<ITodo[], TodoAction> = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log('todos add');
      return [...state, action.payload];

    case UPDATE_TODO:
      console.log('todos update');
      return state.map((todo:ITodo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, label: action.payload.label };
        }
        return { ...todo };
      });

    case DELETE_TODO:
      console.log('todos delete');
      return state.filter((todo: ITodo) => { return todo.id !== action.payload; });

    case SET_STATUS_TODO:
      console.log('todos setStatus');
      return state.map((todo:ITodo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: action.payload.status };
        }
        return { ...todo };
      });

  }
  return state;
};
