import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold text-center">Welcome</h1>

        {/* Botón de Login */}

        <Link
          href="/login"
          className="font-bold block w-full rounded-lg bg-bgbuttons text-white text-center py-3
        hover:opacity-90 focus:ring-2 focus:ring-black/30"
        >
          Login
        </Link>

        {/* Botón de Sign up */}

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?,{" "}
          <Link
            href="/signup"
            className="font-bold text-textlinks underline underline-offset-4 hover:opacity-80"
          >
            sign up
          </Link>
        </p>
      </section>
    </main>
  );
}
