import * as React from 'react';

type ComponentProps = {
  title: string;
  toggle: () => void;
  remove: () => void;
};

class ItemTodoContentDefault extends React.Component<ComponentProps, {}>{
  render () {
    const { title, toggle, remove } = this.props;
    return (
      <div className="Item__content">
        <input type="checkbox" className="Item__checkbox"/>
        <span className="Item__title">{title}</span>
        <button className="button Item__button" onClick={toggle}>Edit</button>
        <button className="button Item__button" onClick={remove}>Delete</button>
      </div>
    );
  }
}

export default ItemTodoContentDefault;