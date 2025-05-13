import { Vehicle } from '@/features/vehicles/types';
import Card from '@/features/vehicles/components/ui/Card';


type VehicleDetailsProps = {
  vehicle: Vehicle | null;
};

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) =>{
  if (!vehicle) {
    return (
      <Card className="text-center text-muted italic py-8">
        No vehicle selected
      </Card>
    );
  }

  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-text">Vehicle Details</h2>
      </div>

    </Card>
  );
}
export default VehicleDetails