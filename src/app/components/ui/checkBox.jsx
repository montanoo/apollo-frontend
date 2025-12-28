"use client";

import React from "react";
import { cn } from "@/app/lib/cn";

export function CheckboxField({
  label = "Remember me",
  id,
  className,
  containerClassName,
  ...props
}) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex items-center gap-3", containerClassName)}>
      <input
        id={inputId}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border border-zinc-400 bg-white",
          "accent-blue-600",
          "focus:outline-none focus:ring-2 focus:ring-zinc-300",
          className
        )}
        {...props}
      />
      <label htmlFor={inputId} className="text-sm text-zinc-800 select-none">
        {label}
      </label>
    </div>
  );
}
