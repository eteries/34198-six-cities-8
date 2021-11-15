import { LatLngExpression } from 'leaflet';

export type City = {
  id: number,
  name: 'Paris' | 'Amsterdam' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf',
  coords: LatLngExpression,
  zoom: number
}
