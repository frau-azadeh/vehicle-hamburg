export function normalizeFuelType(value?: string): string {
  return value?.trim().toUpperCase() || "UNKNOWN";
}

export function formatFuelLabel(value: string): string {
  return value
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
}
