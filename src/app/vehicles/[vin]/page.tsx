import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { Vehicle } from '@/features/vehicles/types';
import ClientView from './ClientView';

async function getVehicleByVin(vin: string): Promise<Vehicle | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/vehicles`, { cache: 'no-store' });

  if (!res.ok) return null;

  const vehicles: Vehicle[] = await res.json();
  return vehicles.find((v) => v.vin === vin) ?? null;
}

type PageProps = {
  params: Promise<{ vin: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { vin } = await params;
  const vehicle = await getVehicleByVin(vin);

  if (!vehicle) {
    return {
      title: 'Vehicle not found | Bahman',
    };
  }

  return {
    title: `Vehicle ${vehicle.vin} | Bahman`,
    description: `Details for ${vehicle.plate} parked at ${vehicle.address}`,
  };
}

export default async function VehicleDetailsPage({ params }: PageProps) {
  const { vin } = await params;
  const vehicle = await getVehicleByVin(vin);

  if (!vehicle) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-text text-center">Vehicle Details</h1>
      <ClientView vehicle={vehicle} />
    </div>
  );
}
