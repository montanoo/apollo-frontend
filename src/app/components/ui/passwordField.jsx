"use client";

import React from "react";
import { cn } from "@/app/lib/cn";

export function PasswordField({
  label = "Password",
  id,
  error,
  className,
  containerClassName,
  placeholder = "Enter your password",
  ...props
}) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const hasError = Boolean(error);

  const [visible, setVisible] = React.useState(false);

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className="relative">
        <label
          htmlFor={inputId}
          className={cn(
            "absolute -top-3 left-3 px-2 text-sm bg-white",
            hasError ? "text-red-600" : "text-black"
          )}
        >
          {label}
        </label>

        <input
          id={inputId}
          type={visible ? "text" : "password"}
          aria-invalid={hasError || undefined}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-md border px-4 py-3 pr-12 outline-none",
            "bg-white text-zinc-900 placeholder:text-black",
            hasError
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-black focus:ring-2 focus:ring-black",
            className
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-zinc-600 hover:text-zinc-900"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12s3.5-7 9-7 9 7 9 7a16.7 16.7 0 0 1-3.1 3.9"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 4l16 16"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7.2 7.2C5 8.8 3 12 3 12s3.5 7 9 7c2 0 3.7-.6 5.1-1.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
