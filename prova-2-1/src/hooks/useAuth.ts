"use client";

import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import { saveUser, getUser, removeUser } from "@/lib/storage";
import { useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function signIn(username: string, password: string) {
    setLoading(true);

    try {
      const user = await login(username, password);
      saveUser(user);
      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    removeUser();
    router.push("/auth");
  }

  function user() {
    return getUser();
  }

  return { signIn, signOut, user, loading };
}