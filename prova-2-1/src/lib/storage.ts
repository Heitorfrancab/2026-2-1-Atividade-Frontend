import type { User } from "@/types/auth";
import type { Quote } from "@/types/quote";

const USER_KEY = "quotes:user";
const QUOTES_KEY = "quotes:local";

export function saveUser(user: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
  const data = localStorage.getItem(USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export function saveQuotes(quotes: Quote[]) {
  localStorage.setItem(QUOTES_KEY, JSON.stringify(quotes));
}

export function getQuotes(): Quote[] {
  const data = localStorage.getItem(QUOTES_KEY);
  return data ? JSON.parse(data) : [];
}