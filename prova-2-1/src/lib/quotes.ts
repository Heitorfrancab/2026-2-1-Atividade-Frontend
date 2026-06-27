import type { Quote } from "@/types/quote";

export async function getQuotes(): Promise<Quote[]> {
  try {
    const res = await fetch("https://dummyjson.com/quotes");

    if (!res.ok) {
      throw new Error("Erro ao buscar quotes");
    }

    const data = await res.json();

    // DummyJSON retorna { quotes: [...] }
    return data.quotes.map((q: any) => ({
      id: q.id,
      quote: q.quote,
      author: q.author,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}