"use client";

import type * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "subtle" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function GlassButton({
  className,
  variant = "subtle",
  size = "default",
  children,
  ...props
}: GlassButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "default":
        return "bg-white/20 hover:bg-white/30 text-white border-white/30";
      case "subtle":
        return "bg-white/10 hover:bg-white/20 text-white/90 border-white/20";
      case "outline":
        return "bg-transparent hover:bg-white/10 text-white border-white/40";
      default:
        return "bg-white/20 hover:bg-white/30 text-white border-white/30";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-8 px-3 text-xs";
      case "lg":
        return "h-12 px-8 text-lg";
      default:
        return "h-10 px-4 text-sm";
    }
  };

  return (
    <Button
      className={cn(
        "relative border shadow-lg backdrop-blur-md backdrop-saturate-150",
        "transition-all duration-300 ease-out",
        "before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-30",
        getVariantClasses(),
        getSizeClasses(),
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
