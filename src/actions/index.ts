import { IAddTodoAction, IAddTodoActionCreator, ITodo } from '../interfaces';
import { ADD_TODO } from '../constants';

export const addTodo: IAddTodoActionCreator = (todo: ITodo):IAddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
})
