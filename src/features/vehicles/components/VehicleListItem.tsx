import Card from '@/features/vehicles/components/ui/Card';
import { Vehicle } from '@/features/vehicles/types';

export type VehicleListItemProps = {
  vehicle: Vehicle;
  selected: boolean;
  onClick: () => void;
  refEl: (el: HTMLLIElement | null) => void;
};

const VehicleListItem = ({
  vehicle,
  selected,
  onClick,
  refEl,
}: VehicleListItemProps) => {
  return (
    <li
      ref={refEl}
      onClick={onClick}
      className="cursor-pointer transition px-2 md:px-4"
    >
      <Card>
        <div>
          <p>{vehicle.vin}</p>
        </div>
      </Card>
    </li>
  );
};

export default VehicleListItem;
