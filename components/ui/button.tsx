import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  showIcon?: boolean;
}

export function Button({
  variant = "primary",
  fullWidth = false,
  showIcon = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded-md font-medium transition duration-200 gap-2";

  const variantStyles = {
    primary: "bg-[#1959AC] text-white hover:bg-[#0546D2]",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-900 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} } ${className}`}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="sm:h-5 sm:w-5 h-2 w-2" />}
    </button>
  );
}
