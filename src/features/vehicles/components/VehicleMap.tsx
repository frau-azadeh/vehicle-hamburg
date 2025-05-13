'use client';

import { useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import { Vehicle } from '@/features/vehicles/types';
import { defaultIcon, selectedIcon } from '@/features/vehicles/map/mapIcons';
import MarkerPopup from './MarkerPopup';
import ForceResizeMap from './ForceResizeMap';

type VehicleMapProps = {
  vehicles: Vehicle[];
  selectedVin: string | null;
  onSelect: (vin: string) => void;
};

function FlyToSelectedAndOpenPopup({
  selectedVin,
  vehicles,
  markerRefs,
}: {
  selectedVin: string | null;
  vehicles: Vehicle[];
  markerRefs: React.RefObject<Record<string, L.Marker | null>>
}) {
  const map = useMap();

  useEffect(() => {
    if (!selectedVin) return;

    const selected = vehicles.find((v) => v.vin === selectedVin);
    const marker = markerRefs.current[selectedVin];

    if (selected && marker) {
      const latlng = L.latLng(
        selected.geoCoordinate.latitude,
        selected.geoCoordinate.longitude
      );

      const point = map.project(latlng, map.getZoom()).subtract([0, 150]);
      const target = map.unproject(point, map.getZoom());

      map.flyTo(target, 17, {
        animate: true,
        duration: 0.75,
      });

      setTimeout(() => {
        marker.openPopup();
      }, 800);
    }
  }, [selectedVin, vehicles, map, markerRefs]);

  return null;
}

const VehicleMap = ({ vehicles, selectedVin, onSelect }: VehicleMapProps) => {
  const markerRefs = useRef<Record<string, L.Marker | null>>({});

  if (!Array.isArray(vehicles) || vehicles.length === 0) {
    return <p className="text-muted italic">Loading map...</p>;
  }

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

      <ForceResizeMap />

      <FlyToSelectedAndOpenPopup
        selectedVin={selectedVin}
        vehicles={vehicles}
        markerRefs={markerRefs}
      />

      {vehicles.map((v) => (
        <Marker
          key={v.vin}
          position={[
            v.geoCoordinate.latitude,
            v.geoCoordinate.longitude,
          ]}
          icon={v.vin === selectedVin ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelect(v.vin),
          }}
          ref={(marker) => {
            if (marker) markerRefs.current[v.vin] = marker;
          }}
        >
          <Popup>
            <MarkerPopup vehicle={v} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default VehicleMap;