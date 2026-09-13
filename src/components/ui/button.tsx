import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-kryptonix-green text-ink-950 shadow-[0_12px_28px_rgb(var(--color-bright-gold)/0.28)] hover:-translate-y-0.5 hover:bg-kryptonix-green/90 focus-visible:ring-kryptonix-green",

  secondary:
    "border border-ink-950/15 bg-white text-ink-950 shadow-sm backdrop-blur hover:-translate-y-0.5 hover:border-kryptonix-gold/40 hover:bg-kryptonix-gold/10 focus-visible:ring-kryptonix-blue",

  ghost:
    "text-ink-950 hover:bg-kryptonix-gold/10 hover:text-ink-950 focus-visible:ring-kryptonix-violet",
};

function withTrailingSlash(href?: string) {
  if (
    !href ||
    href === "/" ||
    href.startsWith("#") ||
    !href.startsWith("/")
  ) {
    return href;
  }

  const [path, suffix = ""] = href.split(/(?=[?#])/);
  const looksLikeFile = /\.[a-z0-9]+$/i.test(path);

  if (looksLikeFile || path.endsWith("/")) {
    return href;
  }

  return `${path}/${suffix}`;
}

export function Button({
  className,
  children,
  variant = "primary",
  showArrow = false,
  href,
  ...props
}: ButtonProps) {
  const normalizedHref = withTrailingSlash(href);

  return (
    <a
      href={normalizedHref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-center text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}

      {showArrow ? (
        <ArrowRight
          className="ml-2 h-4 w-4"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}