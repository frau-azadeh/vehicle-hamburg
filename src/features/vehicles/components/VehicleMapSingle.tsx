'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Vehicle } from '@/features/vehicles/types';
import MarkerPopup from './MarkerPopup';
import { selectedIcon } from '@/features/vehicles/map/mapIcons';

type VehicleMapSingleProps = {
  vehicle: Vehicle;
};

const VehicleMapSingle = ({ vehicle }: VehicleMapSingleProps) => {
  useEffect(() => {
    const proto = L.Icon.Default.prototype as unknown as {
      _getIconUrl?: () => void;
    };
    if (proto._getIconUrl) delete proto._getIconUrl;
  }, []);

  const position: [number, number] = [
    vehicle.geoCoordinate.latitude,
    vehicle.geoCoordinate.longitude,
  ];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="h-[300px] w-full rounded-lg shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={selectedIcon}>
        <Popup>
          <MarkerPopup vehicle={vehicle} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default VehicleMapSingle;
