import { Reducer } from 'redux';

import { IAppState, ISetFilterAction } from '../interfaces';

import { SET_FILTER } from '../constants';

export const filter: Reducer<number, ISetFilterAction> = (state = 0, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.payload;
  }
  return state;
};
