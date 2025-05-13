'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const VehicleMap = () => {
  return (
    <MapContainer
      center={[53.5511, 9.9937]} // Hamburg center
      zoom={16}
      scrollWheelZoom={true}
      className="h-[500px] w-full rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default VehicleMap;
