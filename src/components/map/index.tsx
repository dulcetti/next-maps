import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { MapProps } from './interface';

export default function Map({ places }: MapProps) {
  return (
    <MapContainer center={[0, 0]} zoom={3} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, slug, name, location }, index) => {
        const { latitude, longitude } = location;
        return <Marker position={[latitude, longitude]} title={name} key={index} />;
      })}
    </MapContainer>
  );
}
