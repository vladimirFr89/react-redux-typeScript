import {
    ITodo, ITodoStatus, StatusTodo,
    IAddTodoAction, IAddTodoActionCreator,
    ISetFilterAction, ISetFilterActionCreator,
    IUpdateTodoAction, IUpdateTodoActionCreator,
    IRemoveTodoAction, IRemoveTodoActionCreator,
    ISetStatusAction, ISetStatusActionCreator,
} from '../interfaces';
import { ADD_TODO, SET_STATUS_TODO, DELETE_TODO, SET_FILTER, UPDATE_TODO } from '../constants';

export const addTodo: IAddTodoActionCreator = (todo: ITodo):IAddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo: IUpdateTodoActionCreator = (todo: ITodo):IUpdateTodoAction => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const removeTodo: IRemoveTodoActionCreator = (id: number):IRemoveTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});

export const setStatus: ISetStatusActionCreator = (status: ITodoStatus): ISetStatusAction => ({
  type: SET_STATUS_TODO,
  payload: status,
});

export const setFilter: ISetFilterActionCreator = (value: number): ISetFilterAction => ({
  type: SET_FILTER,
  payload: value,
});
