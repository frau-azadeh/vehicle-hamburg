"use client";

import Button from "@/features/vehicles/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center text-text">
      <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 className="mb-2 text-2xl font-semibold">Oops! Not Found</h2>
      <p className="mb-6 text-muted">
        We couldn’t find what you were looking for.
      </p>

      <Button
        variant="outline"
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm"
        aria-label="Go back to previous page"
      >
        <ArrowLeft size={16} />
        Go Back
      </Button>
    </div>
  );
}

export default NotFound;
