'use client';

import dynamic from 'next/dynamic';
import { Vehicle } from '@/features/vehicles/types';
import VehicleDetails from '@/features/vehicles/components/VehicleDetails';

const VehicleMapSingle = dynamic(
  () => import('@/features/vehicles/components/VehicleMapSingle'),
  { ssr: false }
);

type Props = {
  vehicle: Vehicle;
};

function ClientView({ vehicle }: Props) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg overflow-hidden shadow-md">
        <VehicleMapSingle vehicle={vehicle} />
      </div>

      <VehicleDetails vehicle={vehicle} />
    </div>
  );
}
export default ClientView;
