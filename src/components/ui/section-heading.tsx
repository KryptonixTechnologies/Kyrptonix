import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div data-reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-kryptonix-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-normal text-ink-950 sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}
