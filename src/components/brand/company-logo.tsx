import Image from "next/image";
import { cn } from "@/lib/utils";

type CompanyLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "header" | "footer";
};

const logoSizes = {
  header: "h-11 w-36 sm:h-12 sm:w-40",
  footer: "h-16 w-48",
};

export function CompanyLogo({ className, priority = false, variant = "header" }: CompanyLogoProps) {
  return (
    <span
      className={cn(
        "relative block overflow-hidden rounded-md border border-white/10 bg-white/[0.03] shadow-[0_0_32px_rgba(47,129,247,0.12)]",
        logoSizes[variant],
        className,
      )}
    >
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
