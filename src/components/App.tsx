import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState, ISetFilterAction } from '../interfaces';
import { setFilter } from '../actions';
import { Dispatch } from 'redux';

interface OwnProps {
  name: string;
}

interface MapStateToProps {
  filter: number;
}

interface DispatchProps {
  setFilter: typeof setFilter;
}

type ComponentProps = OwnProps & MapStateToProps & DispatchProps;

class App extends React.Component<ComponentProps, {}>{

  setFilterUp = () => {
    const { filter } = this.props;
    this.props.setFilter(filter + 1);
  }

  render() {
    const { name, filter } = this.props;
    return (
        <div>
          <span>{name} поставил фильтр {filter}</span>
          <button onClick={this.setFilterUp}>SetFilter</button>
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
