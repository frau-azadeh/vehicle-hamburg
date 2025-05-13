export type Vehicle = {
  vin: string;
  plate: string;
  geoCoordinate: {
    latitude: number;
    longitude: number;
  };
  fuelLevel: number;
  address: string;
  fuelType: string;
  primaryColor: string;
  secondaryColor?: string;
  charging: boolean;
  freeForRental: boolean;
  locationAlias: string;
  locationId: number;
  parkingId?: string;
  buildSeries: string;
  hardwareVersion: string;
  globalVersion: number;
};
