import React from "react";

interface TypographyProps {
  variant?: "heading" | "subheading";
  className?: string;
  children: React.ReactNode;
}

export function Typography({
  variant = "heading",
  className = "",
  children,
}: TypographyProps) {
  const baseClass =
    variant === "heading"
      ? "font-heading sm:text-[42px] text-[15px] font-bold tracking-tight text-text"
      : "font-subheading sm:text-[18px] text-[8px] sm:leading-6 leading-[8px]  font-regular tracking-tight text-text";

  return <h1 className={`${baseClass} ${className}`}>{children}</h1>;
}
