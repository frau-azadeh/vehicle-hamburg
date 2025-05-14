import { clsx } from 'clsx';
import { Vehicle } from '@/features/vehicles/types';

const MarkerPopup = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="text-sm space-y-1 text-text">
      <p className="font-semibold">{vehicle.vin}</p>
      <p className="text-muted">{vehicle.address}</p>

      <p>
        <span className="text-muted font-medium">Fuel:</span>{' '}
        <span
          className={clsx(
            'font-semibold',
            vehicle.fuelLevel >= 70
              ? 'text-green-600'
              : vehicle.fuelLevel >= 40
                ? 'text-yellow-600'
                : 'text-red-500'
          )}
        >
          {vehicle.fuelLevel}%
        </span>
      </p>

      <p>
        <span className="text-muted font-medium">Type:</span> {vehicle.fuelType}
      </p>

      <p>
        <span className="text-muted font-medium">Charging:</span>{' '}
        <span className={vehicle.charging ? 'text-green-600' : 'text-red-500'}>
          {vehicle.charging ? 'Yes' : 'No'}
        </span>
      </p>

      <p>
        <span className="text-muted font-medium">Rental:</span>{' '}
        <span className={vehicle.freeForRental ? 'text-green-600' : 'text-red-500'}>
          {vehicle.freeForRental ? 'Yes' : 'No'}
        </span>
      </p>
    </div>
  );
};
export default MarkerPopup;
