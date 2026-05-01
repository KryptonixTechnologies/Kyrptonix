import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      data-reveal
      className={cn(
        "glass-panel glow-edge rounded-lg transition duration-200 hover:border-white/20",
        className,
      )}
      {...props}
    />
  );
}
