export const enum ActionTypes {
  'SwitchCity' = 'city/switch',
  'LoadOffers' = 'offers/load',
  'SortOffersByDefault' = 'offers/sortByDefault',
  'SortOffersByPriceIncrement' = 'offers/sortByPriceIncrement',
  'SortOffersByPriceDecrement' = 'offers/sortByPriceDecrement',
  'SortOffersByRatingDecrement' = 'offers/sortByRatingDecrement',
}

export type SwitchCityAction = {
  type: ActionTypes.SwitchCity,
  payload: number
}

export type LoadOffersAction = {
  type: ActionTypes.LoadOffers,
  payload: number
}

export type SortOffersByDefaultAction = {
  type: ActionTypes.SortOffersByDefault,
  payload: number
}

export type SortOffersByPriceIncrementAction = {
  type: ActionTypes.SortOffersByPriceIncrement
}

export type SortOffersByPriceDecrementAction = {
  type: ActionTypes.SortOffersByPriceDecrement
}

export type SortOffersByRatingDecrementAction = {
  type: ActionTypes.SortOffersByRatingDecrement
}

export type SortingAction = SortOffersByDefaultAction | SortOffersByPriceIncrementAction | SortOffersByPriceDecrementAction | SortOffersByRatingDecrementAction;

export type Action = SwitchCityAction | LoadOffersAction | SortingAction;
