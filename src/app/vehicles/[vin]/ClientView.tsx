'use client';

import dynamic from 'next/dynamic';
import { Vehicle } from '@/features/vehicles/types';
import VehicleDetails from '@/features/vehicles/components/VehicleDetails';
import Button from '@/features/vehicles/components/ui/Button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const VehicleMapSingle = dynamic(() => import('@/features/vehicles/components/VehicleMapSingle'), {
  ssr: false,
});

type ClientViewProps = {
  vehicle: Vehicle;
};

function ClientView({ vehicle }: ClientViewProps) {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="rounded-lg overflow-hidden shadow-md">
        <VehicleMapSingle vehicle={vehicle} />
      </div>

      <VehicleDetails vehicle={vehicle} />

      <div className="flex justify-center pt-4">
        <Button
          variant="outline"
          onClick={() => router.push('/vehicles')}
          className="text-sm flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to List
        </Button>
      </div>
    </div>
  );
}

export default ClientView;
