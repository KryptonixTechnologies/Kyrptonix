import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export function Section({ className, ...props }: SectionProps) {
  return <section className={cn("py-20 sm:py-24", className)} {...props} />;
}
