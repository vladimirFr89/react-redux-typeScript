import * as React from 'react';

type ComponentProps = {
  title: string;
  toggle: () => void;
  update: (value: string) => void;
};

type State = {
  title: string;
};

class ItemTodoContentEdit extends React.Component<ComponentProps, State>{
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      title: this.props.title,
    };
  }

  updateTodo = () => {
    const { title } = this.state;
    const { update, toggle } = this.props;
    update(title);
    toggle();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      title: e.target.value,
    });
  }

  render() {
    const { title } = this.state;
    const { toggle } = this.props;
    return(
      <div className="Item__content">
        <input className="Item__input" type="text" value={title} onChange={this.handleChange} />
        <div className="Item__buttons">
          <button type="button" className="button Item__button" onClick={this.updateTodo}>Save</button>
          <button type="button" className="button Item__button" onClick={toggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default ItemTodoContentEdit;
