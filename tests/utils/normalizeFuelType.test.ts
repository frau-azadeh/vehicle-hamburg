import { normalizeFuelType } from '../../src/features/vehicles/utils/fuelTypeUtils';

describe('normalizeFuelType', () => {
  it('should trim and convert to uppercase', () => {
    expect(normalizeFuelType(' electric ')).toBe('ELECTRIC');
    expect(normalizeFuelType('Diesel')).toBe('DIESEL');
    expect(normalizeFuelType(' gasoline')).toBe('GASOLINE');
  });

  it('should handle empty input', () => {
    expect(normalizeFuelType('')).toBe('UNKNOWN');
  });

  it('should handle mixed-case input', () => {
    expect(normalizeFuelType('HyBrId')).toBe('HYBRID');
  });
});
