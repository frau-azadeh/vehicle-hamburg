'use client';

import { Vehicle } from '@/features/vehicles/types';
import VehicleDetails from '@/features/vehicles/components/VehicleDetails';

type Props = {
  vehicle: Vehicle;
};

function ClientView({ vehicle }: Props) {
  return (
    <div className="space-y-6">
      <VehicleDetails vehicle={vehicle} />
    </div>
  );
}
export default ClientView;
