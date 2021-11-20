import { Store } from '../types/store';
import { Action, ActionTypes } from '../types/action';

const initialState: Store = {
  cityID: 0,
  offers: [],
};

const reducer = (state = initialState, action: Action): Store => {
  switch (action.type) {
    case ActionTypes.SwitchCity:
      return {...state, cityID: action.payload};
    case ActionTypes.LoadOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export { reducer };
