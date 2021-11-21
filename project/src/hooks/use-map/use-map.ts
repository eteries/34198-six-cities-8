import leaflet, { Map } from 'leaflet';
import { MutableRefObject, useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import { LeafletSettings } from '../../constants';
import { City } from '../../types/city';

function init(container:HTMLElement, {coords, zoom}: City): Map {
  const instance = leaflet
    .map(container)
    .setView(coords, zoom);

  leaflet
    .tileLayer(LeafletSettings.Template, {attribution: LeafletSettings.Copyright})
    .addTo(instance);

  return instance;
}

function useMap(mapRef: MutableRefObject<HTMLElement | null>, area: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if(map === null && mapRef !== null) {
      setMap(init(mapRef.current as HTMLElement, area));
    } else if (map !== null) {
      map.setView(area.coords, area.zoom);
    }
  }, [map, mapRef, area]);

  return map;
}

export default useMap;
