import { City } from '../types/city';
import { CityNames } from '../constants';

export const CITIES: City[] = [
  {
    id: 1,
    name: CityNames.Paris,
    coords: [52.38, 4.9],
    zoom: 12,
  },
  {
    id: 2,
    name: CityNames.Cologne,
    coords: [52.22, 4.54],
    zoom: 10,
  },
  {
    id: 3,
    name: CityNames.Brussels,
    coords: [52.22, 4.54],
    zoom: 10,
  },
  {
    id: 4,
    name: CityNames.Amsterdam,
    coords: [52.22, 4.54],
    zoom: 10,
  },
  {
    id: 5,
    name: CityNames.Hamburg,
    coords: [52.22, 4.54],
    zoom: 10,
  },
  {
    id: 6,
    name: CityNames.Dusseldorf,
    coords: [52.22, 4.54],
    zoom: 10,
  },
];
