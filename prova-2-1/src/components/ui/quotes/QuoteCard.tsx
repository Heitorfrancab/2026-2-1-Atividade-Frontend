"use client";

import type { Quote } from "@/types/quote";
import { QuoteDialog } from "./QuoteDialog";
import { Button } from "@/components/ui/button";

type Props = {
  quote: Quote;
  onDelete: (id: number) => void;
  onUpdate: (id: number, quote: string, author: string) => void;
};

export function QuoteCard({ quote, onDelete, onUpdate }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
      <p className="text-lg">"{quote.quote}"</p>
      <p className="text-sm text-zinc-400 mt-1">— {quote.author}</p>

      <div className="mt-4 flex gap-2">
        <QuoteDialog
          mode="edit"
          quote={quote}
          onSave={(q, a) => onUpdate(quote.id, q, a)}
        />

        <Button
          variant="destructive"
          onClick={() => onDelete(quote.id)}
        >
          Excluir
        </Button>
      </div>
    </div>
  );
}