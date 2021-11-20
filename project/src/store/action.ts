import { ActionTypes, loadOffersAction, switchCityAction } from '../types/action';
import { Offer } from '../types/offer';

export const switchCity = (id: number): switchCityAction => ({
  type: ActionTypes.SwitchCity,
  payload: id,
});

export const loadOffers = (offers: Offer[] | []): loadOffersAction => ({
  type: ActionTypes.LoadOffers,
  payload: offers,
});

