import useMap from '../../hooks/use-map/use-map';
import { useEffect, useRef } from 'react';
import { City } from '../../types/city';
import { Icons, NEAREST_OFFERS_RADIUS } from '../../constants';
import { Circle, Icon, Marker } from 'leaflet';
import { Point } from '../../types/point';

type MapProps = {
  area: City,
  points: Point[],
  activePointID?: number | null,
  circle?: boolean,
  className?: string
}

function setIcon(id: string): Icon {
  return new Icon({
    iconUrl: Icons[id].URL,
    iconSize: Icons[id].Size,
    iconAnchor: Icons[id].Anchor,
  });
}

function Map({area, points, activePointID = null, circle = false, className = ''}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, area);
  const defaultIcon = setIcon('Default');
  const activeIcon = setIcon('Active');

  useEffect(() => {
    points.forEach(({location, id})=> {
      if (map) {
        const marker = new Marker([location.latitude, location.longitude]);

        marker.setIcon((id === activePointID) ? activeIcon : defaultIcon);

        marker.addTo(map);

        if (circle) {
          const newCircle = new Circle(area.coords, {radius: NEAREST_OFFERS_RADIUS, opacity: 0.3});
          newCircle.addTo(map);
        }
      }
    });
  }, [map, points, activePointID]);

  return (
    <section className={`map ${className}`} style={{height: '100%', minHeight: '500px', width: '100%'}} ref={mapRef}>
    </section>
  );
}

export default Map;
