"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function AuthPage() {
  const { signIn, loading } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="w-[350px] rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="mb-4 text-xl font-bold">Login</h1>

        <input
          className="mb-3 w-full rounded bg-zinc-800 p-2"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="mb-3 w-full rounded bg-zinc-800 p-2"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full rounded bg-indigo-600 p-2 hover:bg-indigo-500"
          onClick={() => signIn(username, password)}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </main>
  );
}