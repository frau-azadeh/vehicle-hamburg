import { useEffect, useState } from 'react';
import { Vehicle } from '../vehicles/types';

 function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [selectedVin, setSelectedVin] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/vehicles')
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);

  const selectedVehicle = vehicles.find((v) => v.vin === selectedVin) || null;

  return {
    vehicles,
    selectedVin,
    setSelectedVin,
    selectedVehicle,
  };
}
export default useVehicles