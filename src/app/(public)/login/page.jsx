import React from "react";
import { MailField } from "@/app/components/ui/mailField";
import { PasswordField } from "@/app/components/ui/passwordField";
import { CheckboxField } from "@/app/components/ui/checkBox";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <section className="w-full max-w-sm space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm text-gray-600">
            Login to access your travelwise account
          </p>
        </div>

        <div className="space-y-4">
          <MailField
            label="Email"
            type="email"
            placeholder="Enter your email"
            containerClassName=""
          />

          <PasswordField
            label="Password"
            placeholder="Enter your password"
            containerClassName=""
          />
        </div>

        <div className="space-y-2">
          <CheckboxField label="Remember me"/>
        </div>

        <div className="space-y-4">
          <Link
            href="/Dashboard"
            className="font-bold block w-full rounded-lg bg-bgbuttons text-white text-center py-3
            hover:opacity-90 focus:ring-2 focus:ring-black/30"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
}
