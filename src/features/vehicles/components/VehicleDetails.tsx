import Badge from "@/features/vehicles/components/ui/Badge";
import Card from "@/features/vehicles/components/ui/Card";
import { Vehicle } from "@/features/vehicles/types";

import DetailItem from "./DetailItem";
import ShareButton from "./ui/ShareButton";

type VehicleDetailsProps = {
  vehicle: Vehicle | null;
};

const VehicleDetails = ({ vehicle }: VehicleDetailsProps) => {
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
        <ShareButton />
      </div>

      <DetailItem label="VIN" value={vehicle.vin} />
      <DetailItem label="Fuel Level" value={`${vehicle.fuelLevel}%`} />
      <DetailItem label="Fuel Type" value={vehicle.fuelType} />
      <DetailItem label="Color" value={vehicle.primaryColor} />
      <DetailItem label="Address" value={vehicle.address} />

      <DetailItem
        label="Charging"
        value={
          <Badge variant={vehicle.charging ? "success" : "error"}>
            {vehicle.charging ? "Yes" : "No"}
          </Badge>
        }
      />

      <DetailItem
        label="Free For Rental"
        value={
          <Badge variant={vehicle.freeForRental ? "success" : "error"}>
            {vehicle.freeForRental ? "Yes" : "No"}
          </Badge>
        }
      />
    </Card>
  );
};
export default VehicleDetails;
