"use client";

import { useEffect } from "react";
import { cn } from "@/lib/utils";

type Floating3DObjectsProps = {
  variant?: "hero" | "security" | "team";
  className?: string;
};

export function Floating3DObjects({ variant = "hero", className }: Floating3DObjectsProps) {
  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      document.documentElement.style.setProperty("--mouse-x", x.toFixed(4));
      document.documentElement.style.setProperty("--mouse-y", y.toFixed(4));
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return (
    <div className={cn("floating-3d-scene", `floating-3d-scene--${variant}`, className)} aria-hidden="true">
      <span className="floating-3d-object floating-3d-object--bot" />
      <span className="floating-3d-object floating-3d-object--orb" />
      <span className="floating-3d-object floating-3d-object--duck" />
      <span className="floating-3d-object floating-3d-object--shield" />
      <span className="floating-3d-sparkle floating-3d-sparkle--one" />
      <span className="floating-3d-sparkle floating-3d-sparkle--two" />
      <span className="floating-3d-sparkle floating-3d-sparkle--three" />
    </div>
  );
}
