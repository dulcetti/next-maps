import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Location } from 'components/map/interface';

export default function MyMap({ latitude, longitude }: Location) {
  const mapEvents = useMap();
  useEffect(() => {
    if (latitude && longitude) {
      mapEvents.setView([latitude, longitude], 14);
    }
  }, [latitude, longitude]);

  return null;
}
