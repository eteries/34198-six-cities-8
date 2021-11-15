import { PointTuple } from 'leaflet';

export type MapIcons = {
  [name: string]: {
    URL: string,
    Size: PointTuple,
    Anchor: PointTuple
  }
}
