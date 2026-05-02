import Image from "next/image";
import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "header" | "footer";
};

const logoSizes = {
  header: "h-12 w-36",
  footer: "h-16 w-44",
};

export function CompanyLogo({ className, priority = false, variant = "header" }: CompanyLogoProps) {
  return (
    <span className={cn("relative block overflow-hidden rounded-md", logoSizes[variant], className)}>
      <Image
        src="/Kryptonix logo.png"
        alt="Kyptonix Technologies"
        fill
        priority={priority}
        sizes={variant === "header" ? "144px" : "176px"}
        className="object-contain"
      />
    </span>
  );
}
