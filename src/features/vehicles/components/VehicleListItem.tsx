import { clsx } from 'clsx';
import Link from 'next/link';
import { memo } from 'react';

import Card from '@/features/vehicles/components/ui/Card';
import FuelBadge from '@/features/vehicles/components/ui/FuelBadge';
import InfoRow from '@/features/vehicles/components/ui/InfoRow';
import { Vehicle } from '@/features/vehicles/types';

export type VehicleListItemProps = {
  vehicle: Vehicle;
  selected: boolean;
  onClick: () => void;
  refEl: (el: HTMLLIElement | null) => void;
};

const VehicleListItem = ({ vehicle, selected, onClick, refEl }: VehicleListItemProps) => {
  return (
    <li
      ref={refEl}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      className={clsx(
        'cursor-pointer transition px-2 md:px-4 outline-none',
        selected && 'animate-highlight'
      )}
    >
      <Card
        className={clsx(
          'hover:shadow-md transition-all duration-200 rounded-xl',
          selected
            ? 'bg-card ring-2 ring-primary border border-primary/40'
            : 'bg-card border border-border hover:border-primary/40'
        )}
      >
        <div className="space-y-1 text-text">
          <InfoRow label="VIN" value={vehicle.vin} />
          <InfoRow label="Address" value={vehicle.address} muted />
          <p className="text-sm">
            Fuel Level: <FuelBadge level={vehicle.fuelLevel} />
          </p>

          <Link
            href={`/vehicles/${vehicle.vin}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
          >
            View Details →
          </Link>
        </div>
      </Card>
    </li>
  );
};

export default memo(VehicleListItem);
