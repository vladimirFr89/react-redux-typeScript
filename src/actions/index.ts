import {
    IAddTodoAction,
    IAddTodoActionCreator,
    ISetFilterAction,
    ISetFilterActionCreator,
    ITodo, IUpdateTodoAction, IUpdateTodoActionCreator, IRemoveTodoAcrion, IRemoveTodoActionCreator
} from '../interfaces';
import {ADD_TODO, DELETE_TODO, SET_FILTER, UPDATE_TODO} from '../constants';

export const addTodo: IAddTodoActionCreator = (todo: ITodo):IAddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo: IUpdateTodoActionCreator = (todo: ITodo):IUpdateTodoAction => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const removeTodo: IRemoveTodoActionCreator = (id: number):IRemoveTodoAcrion => ({
  type: DELETE_TODO,
  payload: id,
});

export const setFilter: ISetFilterActionCreator = (value: number): ISetFilterAction => ({
  type: SET_FILTER,
  payload: value,
});
