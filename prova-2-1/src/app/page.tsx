import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 text-center">
      <h1 className="text-5xl font-bold text-white">Quotes Hub</h1>

      <p className="mt-4 text-zinc-400">
        Sistema de autenticação + CRUD de frases
      </p>

      <p className="mt-2 text-zinc-500">
        Heitor de França Barboza
      </p>

      <Link
        href="/auth"
        className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-500"
      >
        Entrar
      </Link>
    </main>
  );
}