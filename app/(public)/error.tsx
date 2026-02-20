"use client";

import { useEffect } from "react";

import { toUserMessage } from "@/lib/errors/app-error";

type PublicErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PublicError({ error, reset }: PublicErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-4 py-10 text-center">
      <h1 className="text-xl font-semibold">Something went wrong</h1>
      <p className="text-sm text-muted-foreground">{toUserMessage(error)}</p>
      <button
        className="rounded-md border px-4 py-2 text-sm"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </main>
  );
}
