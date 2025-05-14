import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import vehicles from '@/data/vehicles.json';
import ClientView from './ClientView';

type PageProps = {
  params: { vin: string };
};

export function generateMetadata({ params }: PageProps): Metadata {
  const vehicle = vehicles.find((v) => v.vin === params.vin);

  if (!vehicle) {
    return {
      title: 'Vehicle not found | Bahman',
    };
  }

  return {
    title: `Vehicle ${vehicle.vin} | Bahman`,
    description: `Details for vehicle ${vehicle.vin} parked at ${vehicle.address}`,
  };
}

function VehicleDetailsPage({ params }: PageProps) {
  const vehicle = vehicles.find((v) => v.vin === params.vin);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-text text-center">Vehicle Details</h1>
      <ClientView vehicle={vehicle} />
    </div>
  );
}

export default VehicleDetailsPage;
