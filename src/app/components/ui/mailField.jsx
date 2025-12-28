"use client";
import React from "react";
import { cn } from "@/app/lib/cn";

export function MailField({
  label = "Email",
  id,
  error,
  className,
  containerClassName, // ✅ nombre correcto
  ...props
}) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const hasError = Boolean(error);

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className="relative">
        <label
          htmlFor={inputId}
          className={cn(
            "absolute -top-3 left-3 px-2 text-sm",
            "bg-white",
            hasError ? "text-red-600" : "text-black dark:text-black"
          )}
        >
          {label}
        </label>

        <input
          id={inputId}
          aria-invalid={hasError || undefined}
          className={cn(
            "w-full rounded-md border px-4 py-3 outline-none",
            "bg-white text-black dark:bg-zinc-50",
            "text-black dark:text-white-50",
            "caret-zinc-900 dark:caret-zinc-50s",
            "placeholder:text-black dark:placeholder:text-black",
            hasError
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700",
            className
          )}
          {...props}
        />
      </div>

      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
