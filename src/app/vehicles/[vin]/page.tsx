import { notFound } from 'next/navigation';
import vehicles from '@/data/vehicles.json';
import ClientView from './ClientView';

type PageProps = {
  params: {
    vin: string;
  };
};

export default function VehicleDetailsPage({ params }: PageProps) {
  const vehicle = vehicles.find((v) => v.vin === params.vin);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-2xl font-bold text-text text-center">
        Vehicle Details
      </h1>
      <ClientView vehicle={vehicle} />
    </div>
  );
}
