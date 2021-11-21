import { Store } from '../types/store';
import { Action, ActionTypes } from '../types/action';
import { offers } from '../mocks/offers';
import { DEFAULT_CITY_ID } from '../constants';

const initialState: Store = {
  cityID: DEFAULT_CITY_ID,
  offers: offers.filter(({city}) => city.id === DEFAULT_CITY_ID),
};

const reducer = (state = initialState, action: Action): Store => {
  switch (action.type) {
    case ActionTypes.SwitchCity:
      return {...state, cityID: action.payload};
    case ActionTypes.LoadOffers:
      return {...state, offers: offers.filter(({city}) => city.id === action.payload)};
    default:
      return state;
  }
};

export { reducer };
