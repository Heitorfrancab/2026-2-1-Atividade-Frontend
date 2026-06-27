"use client";

import { useAuth } from "@/hooks/useAuth";
import { useQuotes } from "@/hooks/useQuotes";
import { QuoteCard } from "@/components/quotes/QuoteCard";
import { QuoteDialog } from "@/components/quotes/QuoteDialog";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const {
    quotes,
    loading,
    createQuote,
    updateQuote,
    deleteQuote,
  } = useQuotes();

  useEffect(() => {
    if (!user()) {
      router.push("/auth");
    }
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-white">Carregando...</div>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6">
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard Quotes</h1>

        <button
          onClick={signOut}
          className="bg-zinc-800 px-4 py-2 rounded"
        >
          Sair
        </button>
      </header>

      {/* BOTÃO CRIAR (MODAL) */}
      <div className="mb-6">
        <QuoteDialog
          mode="create"
          onSave={createQuote}
        />
      </div>

      {/* LISTA */}
      <div className="grid md:grid-cols-2 gap-4">
        {quotes.map((q) => (
          <QuoteCard
            key={q.id}
            quote={q}
            onDelete={deleteQuote}
            onUpdate={updateQuote}
          />
        ))}
      </div>
    </main>
  );
}