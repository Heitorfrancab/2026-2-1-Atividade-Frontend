"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState, useEffect } from "react";
import type { Quote } from "@/types/quote";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  mode: "create" | "edit";
  quote?: Quote;
  onSave: (quote: string, author: string) => void;
};

export function QuoteDialog({ mode, quote, onSave }: Props) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (quote && mode === "edit") {
      setText(quote.quote);
      setAuthor(quote.author);
    }
  }, [quote, mode]);

  function handleSave() {
    onSave(text, author);
    setOpen(false);
    setText("");
    setAuthor("");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 hover:bg-indigo-500">
          {mode === "create" ? "+ Nova frase" : "Editar"}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-900 text-white border-zinc-800">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Criar frase" : "Editar frase"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          <Input
            placeholder="Frase"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <Input
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <Button onClick={handleSave} className="w-full">
            Salvar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}