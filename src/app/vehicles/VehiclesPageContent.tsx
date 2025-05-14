'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { VehicleList, VehiclePanel, useVehicles } from '@/features/vehicles';
import VehicleFuelFilterBar from '@/features/vehicles/components/VehicleFuelFilterBar';
import { normalizeFuelType } from '@/features/vehicles/utils/fuelTypeUtils';
import ResetFilters from '@/features/vehicles/components/ui/ResetFilters';

function VehiclesPageContent() {
  const { vehicles, selectedVin, setSelectedVin } = useVehicles();
  const [fuelFilter, setFuelFilter] = useState('ALL');

  const searchParams = useSearchParams();
  const router = useRouter();

  const fuelOptions = useMemo(() => {
    const unique = Array.from(
      new Set(vehicles.map((v) => normalizeFuelType(v.fuelType)))
    );
    return ['ALL', ...unique.filter(Boolean)];
  }, [vehicles]);

  useEffect(() => {
    if (vehicles.length === 0) return;

    const vin = searchParams?.get('vin');
    const fuel = searchParams?.get('fuel')?.toUpperCase();

    const vinExists = vin && vehicles.some((v) => v.vin === vin);

    if (vin && vinExists) {
      setSelectedVin(vin);
    } else if (vin && !vinExists) {
      toast.error('Vehicle not found');
      setSelectedVin(null);
      router.push('/vehicles', { scroll: false });
    }

    if (fuel && fuelOptions.includes(fuel)) {
      setFuelFilter(fuel);
    }
  }, [vehicles, searchParams, fuelOptions, router, setSelectedVin]);

  const updateUrl = (params: URLSearchParams) => {
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleFilterChange = (fuel: string) => {
    setFuelFilter(fuel);
    const params = new URLSearchParams(searchParams?.toString());

    if (fuel === 'ALL') {
      params.delete('fuel');
    } else {
      params.set('fuel', fuel);
    }

    updateUrl(params);
  };

  const handleSelect = (vin: string) => {
    setSelectedVin(vin);
    const params = new URLSearchParams(searchParams?.toString());
    params.set('vin', vin);
    updateUrl(params);
  };

  const handleReset = () => {
    setFuelFilter('ALL');
    setSelectedVin(null);
    router.push('/vehicles', { scroll: false });
  };

  const filteredVehicles = useMemo(() => {
    if (fuelFilter === 'ALL') return vehicles;
    return vehicles.filter((v) => normalizeFuelType(v.fuelType) === fuelFilter);
  }, [vehicles, fuelFilter]);

  return (
    <main className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div className="order-1 lg:order-2">
        <VehiclePanel
          vehicles={vehicles}
          selectedVin={selectedVin}
          onSelect={handleSelect}
        />
      </div>

      <div className="space-y-4 order-2 lg:order-1">
        <h1 className="text-2xl font-bold text-text">Vehicle List</h1>
        <div className="flex items-center justify-between">
          <VehicleFuelFilterBar
            options={fuelOptions}
            selected={fuelFilter}
            onChange={handleFilterChange}
          />
          <ResetFilters onReset={handleReset} />
        </div>

        <VehicleList
          vehicles={filteredVehicles}
          selectedVin={selectedVin}
          onSelect={handleSelect}
        />
      </div>
    </main>
  );
}

export default VehiclesPageContent;
