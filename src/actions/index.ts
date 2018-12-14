import {
    IAddTodoAction,
    IAddTodoActionCreator,
    ISetFilterAction,
    ISetFilterActionCreator,
    ITodo,
} from '../interfaces';
import { ADD_TODO, SET_FILTER } from '../constants';

export const addTodo: IAddTodoActionCreator = (todo: ITodo):IAddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const setFilter: ISetFilterActionCreator = (value: number): ISetFilterAction => ({
  type: SET_FILTER,
  payload: value,
});
