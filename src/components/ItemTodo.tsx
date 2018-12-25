import * as React from 'react';
import {connect} from 'react-redux';
import {removeTodo, setStatus, updateTodo} from '../actions';
import {Dispatch} from 'redux';
import {IRemoveTodoAction, ISetStatusAction, ITodo, ITodoStatus, IUpdateTodoAction, StatusTodo} from '../interfaces';

import ItemTodoContentDefault from './ItemTodoContentDefault';
import ItemTodoContentEdit from './ItemTodoContentEdit';

type State = {
  isEdit: boolean;
};

interface OwnProps {
  todo: ITodo;
}

interface DispatchProps {
  updateTodo: typeof updateTodo;
  removeTodo: typeof removeTodo;
  setStatus: typeof setStatus;
}

type Props = OwnProps & DispatchProps;

class ItemTodo extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  toggleEditState = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  updateTodo = (value: string) => {
    const { todo, updateTodo } = this.props;
    console.log(`updated ${todo.id} ${value}`);
    updateTodo({ ...todo, label: value });
  }

  removeTodo = () => {
    const { todo, removeTodo } = this.props;
    console.log(`remove ${todo.id} ${todo.label}`);
    removeTodo(todo.id);
  }

  changeTodoStatus = () => {
    const { todo, setStatus } = this.props;
    console.log(`changeState ${todo.id} ${todo.label} ${todo.status}`);
    setStatus({ id: todo.id, status: todo.status === StatusTodo.NEW ? StatusTodo.DONE : StatusTodo.NEW });
  }

  render () {
    const { isEdit } = this.state;
    const { todo } = this.props;
    return (
      <div className="Item">
        { isEdit ? (
          <ItemTodoContentEdit title={todo.label} update={this.updateTodo} toggle={this.toggleEditState}/>
        ) : (
          <ItemTodoContentDefault
              title={todo.label}
              status={todo.status}
              changeStatus={this.changeTodoStatus}
              remove={this.removeTodo}
              toggle={this.toggleEditState}/>
        ) }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IUpdateTodoAction | IRemoveTodoAction | ISetStatusAction >): DispatchProps => ({
  updateTodo: (value: ITodo) => {
    return dispatch(updateTodo(value));
  },

  removeTodo: (id: number) => {
    return dispatch(removeTodo(id));
  },

  setStatus: (status: ITodoStatus) => {
    return dispatch(setStatus(status));
  },
});

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(ItemTodo);
