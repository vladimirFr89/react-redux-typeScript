import { Action } from 'redux';
import { ADD_TODO } from '../constants';

export interface IAppState {
  todos: ITodo[];
  filter: number;
}

export interface ITodo {
  id: number;
  label: string;
}

/** Интерфейс для action добавления нового туду */
export interface IAddTodoAction extends Action<typeof ADD_TODO>{
  payload: ITodo;
}

/** Интерфейс для actionCreator */
export interface IAddTodoActionCreator {
  (todo: ITodo):IAddTodoAction;
}
