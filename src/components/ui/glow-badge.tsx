import { cn } from "@/lib/utils";

type GlowBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export function GlowBadge({ className, ...props }: GlowBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-kryptonix-gold/30 bg-white/85 px-4 py-2 text-sm font-medium text-ink-950 shadow-[0_10px_28px_rgb(var(--color-gold-accent)/0.14)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
