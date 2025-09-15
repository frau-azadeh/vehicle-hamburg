import { NextResponse } from "next/server";

import vehicles from "@/data/vehicles.json";

export function GET() {
  return NextResponse.json(vehicles);
}
