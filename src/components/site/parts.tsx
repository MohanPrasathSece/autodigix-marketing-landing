import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Cta({
  children = "Reserve My Seat — ₹39",
  className,
  size = "md",
  variant = "primary",
  href = "#register",
}: {
  children?: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "inverse";
  href?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl font-semibold tracking-tight transition-all duration-300",
        size === "sm" && "px-4 py-2.5 text-[13px]",
        size === "md" && "px-6 py-3.5 text-[15px]",
        size === "lg" && "px-8 py-4.5 text-base",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:bg-[oklch(0.54_0.22_262)]",
        variant === "inverse" &&
          "bg-background text-navy shadow-[var(--shadow-lift)] hover:-translate-y-0.5",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-xs", className)}>{children}</p>;
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>{children}</div>;
}
