import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-kyptonix-green text-ink-950 shadow-[0_0_32px_rgba(63,185,80,0.24)] hover:-translate-y-0.5 hover:bg-[#56d364] focus-visible:ring-kyptonix-green",
  secondary:
    "border border-white/18 bg-white/[0.07] text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.11] focus-visible:ring-kyptonix-blue",
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
        "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-center text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
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
