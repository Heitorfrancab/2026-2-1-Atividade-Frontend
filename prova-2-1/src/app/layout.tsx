import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quotes Hub - POS",
  description: "Sistema de frases com autenticação e CRUD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}