import { formatFuelLabel } from '@/features/vehicles/utils/fuelTypeUtils';

describe('formatFuelLabel', () => {
  it('should replace underscore and capitalize first letter', () => {
    expect(formatFuelLabel('GASOLINE')).toBe('Gasoline');
    expect(formatFuelLabel('PLUG_IN_HYBRID')).toBe('Plug in hybrid');
    expect(formatFuelLabel('ELECTRIC')).toBe('Electric');
  });

  it('should handle already formatted strings', () => {
    expect(formatFuelLabel('Hybrid')).toBe('Hybrid');
  });
});
