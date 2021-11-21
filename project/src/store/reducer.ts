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
    case ActionTypes.SortOffersByDefault:
      return {...state, offers: offers.filter(({city}) => city.id === action.payload)};
    case ActionTypes.SortOffersByPriceIncrement:
      return {...state, offers: [...state.offers].sort((offerA, offerB) => offerA.price - offerB.price)};
    case ActionTypes.SortOffersByPriceDecrement:
      return {...state, offers: [...state.offers].sort((offerA, offerB) => offerB.price - offerA.price)};
    case ActionTypes.SortOffersByRatingDecrement:
      return {...state, offers: [...state.offers].sort((offerA, offerB) => offerB.rating - offerA.rating)};
    default:
      return state;
  }
};

export { reducer };
