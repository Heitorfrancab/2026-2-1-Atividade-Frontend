"use client";

import { useEffect, useState } from "react";
import type { Quote } from "@/types/quote";
import { getQuotes as fetchApiQuotes } from "@/lib/quotes";
import { getQuotes, saveQuotes } from "@/lib/storage";

export function useQuotes() {
  const [apiQuotes, setApiQuotes] = useState<Quote[]>([]);
  const [localQuotes, setLocalQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const api = await fetchApiQuotes();
      const local = getQuotes();

      setApiQuotes(api);
      setLocalQuotes(local);
      setLoading(false);
    }

    load();
  }, []);

  function createQuote(quote: string, author: string) {
    const newQuote: Quote = {
      id: Date.now(),
      quote,
      author,
    };

    const updated = [newQuote, ...localQuotes];
    setLocalQuotes(updated);
    saveQuotes(updated);
  }

  function updateQuote(id: number, quote: string, author: string) {
    const updated = localQuotes.map((q) =>
      q.id === id ? { ...q, quote, author } : q,
    );

    setLocalQuotes(updated);
    saveQuotes(updated);
  }

  function deleteQuote(id: number) {
    const updated = localQuotes.filter((q) => q.id !== id);
    setLocalQuotes(updated);
    saveQuotes(updated);
  }

  const allQuotes = [
    ...localQuotes,
    ...apiQuotes.filter(
      (q) => !localQuotes.find((lq) => lq.id === q.id),
    ),
  ];

  return {
    loading,
    quotes: allQuotes,
    localQuotes,
    createQuote,
    updateQuote,
    deleteQuote,
  };
}