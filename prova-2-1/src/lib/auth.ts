import type { User } from "@/types/auth";

export async function login(username: string, password: string) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Login inválido");

  const data = await res.json();

  const user: User = {
    id: data.id,
    username: data.username,
    token: data.token,
  };

  return user;
}