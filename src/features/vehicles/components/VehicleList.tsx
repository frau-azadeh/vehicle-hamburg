import { useRef, useEffect } from 'react';
import { Vehicle } from '@/features/vehicles/types';
import VehicleListItem from './VehicleListItem';

type VehicleListProps = {
  vehicles: Vehicle[];
  selectedVin: string | null;
  onSelect: (vin: string) => void;
};

const VehicleList = ({ vehicles, selectedVin, onSelect }: VehicleListProps) => {
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    if (selectedVin && itemRefs.current[selectedVin]) {
      itemRefs.current[selectedVin]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedVin]);

  if (!vehicles.length) {
    return (
      <div className="text-sm text-muted italic p-4 text-center">
        No vehicles found.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm">
      <ul className="space-y-3 max-h-[750px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-card p-2">
        {vehicles.map((v) => (
          <VehicleListItem
            key={v.vin}
            vehicle={v}
            selected={v.vin === selectedVin}
            onClick={() => onSelect(v.vin)}
            refEl={(el) => (itemRefs.current[v.vin] = el)}
          />
        ))}
      </ul>
    </div>
  );  
}
export default VehicleList