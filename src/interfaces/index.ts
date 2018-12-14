import { Action } from 'redux';
import { ADD_TODO, SET_FILTER } from '../constants';

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
  (todo: ITodo):IAddTodoAction;
}

/** Интерфейс для action установки фильтра*/
export interface ISetFilterAction extends Action<typeof SET_FILTER> {
  payload: number;
}

/** Интерфейс для actionCreator установки фильтра*/
export interface ISetFilterActionCreator {
  (value: number): ISetFilterAction;
}
