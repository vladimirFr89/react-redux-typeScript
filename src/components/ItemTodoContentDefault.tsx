import * as React from 'react';
import { StatusTodo } from '../interfaces';

type ComponentProps = {
  title: string;
  status: StatusTodo;
  toggle: () => void;
  remove: () => void;
  changeStatus: () => void;
};

class ItemTodoContentDefault extends React.Component<ComponentProps, {}>{
  render () {
    const { title, status, toggle, remove, changeStatus } = this.props;
    const isChecked: boolean = !!status;
    return (
      <div className="Item__content">
        <input type="checkbox" className="Item__checkbox" onChange={changeStatus} checked={isChecked}/>
        <span className="Item__title">{title}</span>
        <button className="button Item__button" onClick={toggle}>Edit</button>
        <button className="button Item__button" onClick={remove}>Delete</button>
      </div>
    );
  }
}

export default ItemTodoContentDefault;
