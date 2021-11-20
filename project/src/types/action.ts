import { Offer } from './offer';

export const enum ActionTypes {
  'SwitchCity' = 'switchCity',
  'LoadOffers' = 'loadOffers',
}

export type switchCityAction = {
  type: ActionTypes.SwitchCity,
  payload: number
}

export type loadOffersAction = {
  type: ActionTypes.LoadOffers,
  payload: Offer[]
}

export type Action = switchCityAction | loadOffersAction;
