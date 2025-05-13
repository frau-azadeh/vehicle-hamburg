import { normalizeFuelType } from '@/features/vehicles/utils/fuelTypeUtils';

type Vehicle = {
  vin: string;
  fuelType: string;
};

const vehicles: Vehicle[] = [
  { vin: 'VIN1', fuelType: 'Gasoline' },
  { vin: 'VIN2', fuelType: 'Diesel' },
  { vin: 'VIN3', fuelType: 'ELECTRIC' },
  { vin: 'VIN4', fuelType: 'gasoline' },
];

function filterVehiclesByFuelType(vehicles: Vehicle[], filter: string) {
  if (filter === 'ALL') return vehicles;
  return vehicles.filter(
    (v) => normalizeFuelType(v.fuelType) === filter
  );
}

describe('filterVehiclesByFuelType', () => {
  it('should return all vehicles when filter is ALL', () => {
    const result = filterVehiclesByFuelType(vehicles, 'ALL');
    expect(result).toHaveLength(4);
  });

  it('should filter vehicles by GASOLINE', () => {
    const result = filterVehiclesByFuelType(vehicles, 'GASOLINE');
    expect(result).toHaveLength(2);
    expect(result.map(v => v.vin)).toEqual(['VIN1', 'VIN4']);
  });

  it('should filter vehicles by ELECTRIC', () => {
    const result = filterVehiclesByFuelType(vehicles, 'ELECTRIC');
    expect(result).toHaveLength(1);
    expect(result[0].vin).toBe('VIN3');
  });

  it('should return empty if filter doesn’t match anything', () => {
    const result = filterVehiclesByFuelType(vehicles, 'HYBRID');
    expect(result).toHaveLength(0);
  });
});
