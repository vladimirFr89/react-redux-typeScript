import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, ITodo, StatusTodo } from '../interfaces';

import ItemTodo from './ItemTodo';

type ComponentProps = IAppState;

class TodoList extends React.Component<ComponentProps, {}>{
  render() {
    const { todos, filter } = this.props;
    const items = todos.map((todo: ITodo) => {
      if (filter === StatusTodo.ALL) {
        return (<li key={String(todo.id)}><ItemTodo todo={todo} /></li>);
      }

      if (todo.status === filter) {
        return (<li key={String(todo.id)}><ItemTodo todo={todo} /></li>);
      }
    });
    return (
      <ul className="List">
        {items}
      </ul>
    );
  }
}

const mapStateToProps = (state: IAppState): IAppState => ({
  todos: state.todos,
  filter: state.filter,
});

export default connect<IAppState>(mapStateToProps)(TodoList);
