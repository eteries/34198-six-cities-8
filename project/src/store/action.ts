import { ActionTypes, LoadOffersAction, SortOffersByDefaultAction, SortOffersByPriceIncrementAction, SortOffersByPriceDecrementAction, SortOffersByRatingDecrementAction, SwitchCityAction } from '../types/action';

export const switchCity = (id: number): SwitchCityAction => ({
  type: ActionTypes.SwitchCity,
  payload: id,
});

export const loadOffers = (cityID: number): LoadOffersAction => ({
  type: ActionTypes.LoadOffers,
  payload: cityID,
});

export const sortOffersByDefault = (cityID: number): SortOffersByDefaultAction => ({
  type: ActionTypes.SortOffersByDefault,
  payload: cityID,
});

export const sortOffersByPriceIncrement = (): SortOffersByPriceIncrementAction => ({
  type: ActionTypes.SortOffersByPriceIncrement,
});

export const sortOffersByPriceDecrement = (): SortOffersByPriceDecrementAction => ({
  type: ActionTypes.SortOffersByPriceDecrement,
});

export const sortOffersByRatingDecrement = (): SortOffersByRatingDecrementAction => ({
  type: ActionTypes.SortOffersByRatingDecrement,
});
