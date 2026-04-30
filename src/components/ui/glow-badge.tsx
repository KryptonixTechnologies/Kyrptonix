import { cn } from "@/lib/utils";

type GlowBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function GlowBadge({ className, ...props }: GlowBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 shadow-glow backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
