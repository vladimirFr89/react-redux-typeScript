import { Action } from 'redux';
import { ADD_TODO, SET_FILTER, UPDATE_TODO, DELETE_TODO, SET_STATUS_TODO } from '../constants';

export interface IAppState {
  todos: ITodo[];
  filter: number;
}

export interface ITodo {
  id: number;
  label: string;
  status: number;
}

/** Интерфейс для action добавления нового туду */
export interface IAddTodoAction extends Action<typeof ADD_TODO>{
  payload: ITodo;
}

/** Интерфейс для actionCreator добавления нового туду*/
export interface IAddTodoActionCreator {
  (todo: ITodo): IAddTodoAction;
}

/** Интерфейс для action обновления существующего туду*/
export interface IUpdateTodoAction extends Action<typeof UPDATE_TODO>{
  payload: ITodo;
}

/** Интерфейс для actionCreator обновления существующего туду*/
export interface IUpdateTodoActionCreator {
  (todo: ITodo): IUpdateTodoAction;
}

/** Интерфейс для action удаления туду из списка*/
export interface IRemoveTodoAction extends Action<typeof DELETE_TODO>{
  payload: number;
}

/** Интерфейс для actionCreator удаления туду из списка*/
export interface IRemoveTodoActionCreator {
  (id: number): IRemoveTodoAction;
}

export interface ITodoStatus {
  id: number;
  status: number;
}

/** Интерфейс для action установки статуса туду*/
export interface ISetStatusAction extends Action<typeof SET_STATUS_TODO>{
  payload: ITodoStatus;
}

/** Интерфейс для actionCreator установки статуса туду*/
export interface ISetStatusActionCreator {
  (status:ITodoStatus): ISetStatusAction;
}

/** Интерфейс для action установки фильтра*/
export interface ISetFilterAction extends Action<typeof SET_FILTER> {
  payload: number;
}

/** Интерфейс для actionCreator установки фильтра*/
export interface ISetFilterActionCreator {
  (value: number): ISetFilterAction;
}
