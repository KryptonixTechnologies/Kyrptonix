import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-white text-ink-950 shadow-glow-blue hover:bg-slate-200 focus-visible:ring-white",
  secondary:
    "border border-white/15 bg-white/[0.05] text-white backdrop-blur hover:border-white/25 hover:bg-white/[0.09] focus-visible:ring-kyptonix-blue",
  ghost:
    "text-slate-300 hover:bg-white/[0.06] hover:text-white focus-visible:ring-kyptonix-violet",
};

export function Button({
  className,
  children,
  variant = "primary",
  showArrow = false,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
    </a>
  );
}
