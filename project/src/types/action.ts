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
  payload: number
}

export type Action = switchCityAction | loadOffersAction;
