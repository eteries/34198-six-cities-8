import { MapIcons } from './types/map-icons';

export const enum Routes {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id'
}

export const enum CityNames {
  'Paris' = 'Paris',
  'Amsterdam' = 'Amsterdam',
  'Cologne' = 'Cologne',
  'Brussels' = 'Brussels',
  'Hamburg' = 'Hamburg',
  'Dusseldorf' = 'Dusseldorf'
}

export const DEFAULT_CITY_ID = 4;

export const NEAREST_OFFERS_NUM = 3;

export const NEAREST_OFFERS_RADIUS = 4000;

export const enum LeafletSettings {
  Template = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Copyright = '\'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>\''
}

export const Icons: MapIcons = {
  Default: {
    URL: '/img/pin.svg',
    Size: [27,39],
    Anchor: [13,39],
  },
  Active: {
    URL: '/img/pin-active.svg',
    Size: [27,39],
    Anchor: [13,39],
  },
};

export const enum Sortings {
  Default = 'Popular',
  PriceIncrement = 'Price: low to high',
  PriceDecrement = 'Price: high to low',
  RatingDecrement = 'Top rated first',
}
