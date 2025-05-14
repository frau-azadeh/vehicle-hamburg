'use client';

import dynamic from 'next/dynamic';
import { Vehicle } from '@/features/vehicles/types';
import VehicleDetails from './VehicleDetails';

const VehicleMap = dynamic(() => import('./VehicleMap'), { ssr: false });

type VehiclePanelProps = {
  vehicles: Vehicle[];
  selectedVin: string | null;
  onSelect: (vin: string) => void;
};

const VehiclePanel = ({ vehicles, selectedVin, onSelect }: VehiclePanelProps) => {
  const selectedVehicle = vehicles.find((v) => v.vin === selectedVin) || null;

  return (
    <div className="flex flex-col gap-6 bg-card border border-border shadow-inner rounded-soft p-4 lg:p-6">
      <div className="rounded-lg overflow-hidden shadow-md">
        <VehicleMap vehicles={vehicles} selectedVin={selectedVin} onSelect={onSelect} />
      </div>

      <VehicleDetails vehicle={selectedVehicle} />
    </div>
  );
};
export default VehiclePanel;
