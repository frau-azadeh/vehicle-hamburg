import { Suspense } from "react";

import VehiclesPage from "./VehiclesPageContent";

export default function VehiclesWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VehiclesPage />
    </Suspense>
  );
}
