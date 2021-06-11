import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import { MapProps } from './interface';
import MyMap from './map';

export default function Map({ places }: MapProps) {
  const [latitude, changeLatitude] = useState(-18);
  const [longitude, changeLongitude] = useState(-50);

  useEffect(() => {
    const latitude = places[0].location?.latitude || 0;
    const longitude = places[0].location?.longitude || 0;

    changeLatitude(latitude);
    changeLongitude(longitude);
  }, [places]);

  return (
    <MapContainer center={[latitude, longitude]} zoom={4} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyMap latitude={latitude} longitude={longitude} />
      {places?.map(({ id, name }) => {
        return <Marker position={[latitude, longitude]} title={name} key={`place-${id}`} />;
      })}
    </MapContainer>
  );
}
