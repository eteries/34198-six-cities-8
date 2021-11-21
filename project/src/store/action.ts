import { ActionTypes, loadOffersAction, switchCityAction } from '../types/action';

export const switchCity = (id: number): switchCityAction => ({
  type: ActionTypes.SwitchCity,
  payload: id,
});

export const loadOffers = (cityID: number): loadOffersAction => ({
  type: ActionTypes.LoadOffers,
  payload: cityID,
});

