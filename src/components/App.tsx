import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, ISetFilterAction, StatusTodo } from '../interfaces';
import { setFilter } from '../actions';
import { Dispatch } from 'redux';

import TodoList from './TodoList';
import ItemTodoCreate from './ItemTodoCreate';

interface MapStateToProps {
  filter: number;
}

interface DispatchProps {
  setFilter: typeof setFilter;
}

type ComponentProps = MapStateToProps & DispatchProps;

class App extends React.Component<ComponentProps, {}>{

  setFilterAll = () => {
    this.props.setFilter(StatusTodo.ALL);
  }

  setFilterNew = () => {
    this.props.setFilter(StatusTodo.NEW);
  }

  setFilterDone = () => {
    this.props.setFilter(StatusTodo.DONE);
  }

  render() {
    const { filter } = this.props;
    return (
        <div>
          <TodoList/>
          <ItemTodoCreate />
          <span>{name} поставил фильтр {filter}</span>
          <button onClick={this.setFilterAll}>ALL</button>
          <button onClick={this.setFilterNew}>NEW</button>
          <button onClick={this.setFilterDone}>DONE</button>
        </div>
    );
  }
}

const mapStateToProps = (state: IAppState): MapStateToProps => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch: Dispatch<ISetFilterAction>): DispatchProps => ({
  setFilter: (value: number) => {
    return dispatch(setFilter(value));
  },
});

export default connect<MapStateToProps, DispatchProps, {}, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
