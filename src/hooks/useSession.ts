import { useState } from "react";

const SESSION_KEY = "acme-dental-session-id";

/** Generate a UUID v4 (crypto-safe). */
function generateId(): string {
  return crypto.randomUUID();
}

/**
 * Persist and retrieve a session ID from localStorage.
 * A new ID is generated on first visit.
 */
export function useSession(): string {
  const [sessionId] = useState<string>(() => {
    const stored = localStorage.getItem(SESSION_KEY);
    if (stored) return stored;

    const id = generateId();
    localStorage.setItem(SESSION_KEY, id);
    return id;
  });

  return sessionId;
}
