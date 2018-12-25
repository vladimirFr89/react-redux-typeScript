import * as React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import { IAddTodoAction, ITodo } from '../interfaces';
import { Dispatch } from 'redux';

type DispatchProps = {
  addTodo: typeof addTodo;
};

type State = {
  title: string;
};

type ComponentProps = DispatchProps;

class ItemTodoCreate extends React.Component<ComponentProps, State>{
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleClick = () => {
    const { title } = this.state;
    if (title.length) {
      const newTodo: ITodo = {
        id: Date.now(),
        label: title,
        status: 0,
      };
      this.props.addTodo(newTodo);
      this.setState({
        title: '',
      });
    }
  }

  render () {
    const { title } = this.state;
    return (
      <div className="Item" >
        <input className="Item__input" type="text" value={title} onChange={this.handleChange}/>
        <button type="button" className="button Item__button" onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAddTodoAction>): DispatchProps => ({
  addTodo: (value: ITodo) => {
    return dispatch(addTodo(value));
  },
});

export default connect<{}, DispatchProps>(null, mapDispatchToProps)(ItemTodoCreate);
