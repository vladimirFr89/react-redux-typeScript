import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, ITodo } from '../interfaces';

import ItemTodo from './ItemTodo';

interface MapStateToProps {
  todos: ITodo[];
}

type ComponentProps = MapStateToProps;

class TodoList extends React.Component<ComponentProps, {}>{
  render() {
    const { todos } = this.props;
    const items = todos.map((todo: ITodo) => {
      return (<li key={String(todo.id)}><ItemTodo todo={todo} /></li>);
    });
    return (
      <ul className="List">
        {items}
      </ul>
    );
  }
}

const mapStateToProps = (state: IAppState): MapStateToProps => ({
  todos: state.todos,
});

export default connect<MapStateToProps>(mapStateToProps)(TodoList);
