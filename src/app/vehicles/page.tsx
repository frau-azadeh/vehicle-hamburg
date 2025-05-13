'use client';

import { useState, useMemo } from 'react';
import {
  VehicleList,
  VehiclePanel,
  useVehicles,
} from '@/features/vehicles';
import VehicleFuelFilterBar from '@/features/vehicles/components/VehicleFuelFilterBar';
import ResetFilters from '@/features/vehicles/components/ui/ResetFilters';
import { normalizeFuelType } from '@/features/vehicles/utils/fuelTypeUtils';

function VehiclesPage() {
  const { vehicles, selectedVin, setSelectedVin } = useVehicles();
  const [fuelFilter, setFuelFilter] = useState('ALL');

  const fuelOptions = useMemo(() => {
    const unique = Array.from(
      new Set(vehicles.map((v) => normalizeFuelType(v.fuelType)))
    );
    return ['ALL', ...unique.filter(Boolean)];
  }, [vehicles]);

  const handleFilterChange = (fuel: string) => {
    setFuelFilter(fuel);
  };

  const handleReset = () => {
    setFuelFilter('ALL');
    setSelectedVin(null);
  };

  const filteredVehicles = useMemo(() => {
    if (fuelFilter === 'ALL') return vehicles;
    return vehicles.filter(
      (v) => normalizeFuelType(v.fuelType) === fuelFilter
    );
  }, [vehicles, fuelFilter]);

  return (
    <main className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Map + Details */}
      <div className="order-1 lg:order-2">
        <VehiclePanel
          vehicles={vehicles}
          selectedVin={selectedVin}
          onSelect={(vin) => setSelectedVin(vin)}
        />
      </div>

      {/* List + Filter */}
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
          onSelect={(vin) => setSelectedVin(vin)}
        />
      </div>
    </main>
  );
}

export default VehiclesPage;
