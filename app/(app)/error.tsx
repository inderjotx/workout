"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { toUserMessage } from "@/lib/errors/app-error";

type AppRouteErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function AppRouteError({ error, reset }: AppRouteErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-xl font-semibold">Unable to load this section</h1>
      <p className="max-w-lg text-sm text-muted-foreground">
        {toUserMessage(error)}
      </p>
      <Button onClick={reset} type="button" variant="outline">
        Retry
      </Button>
    </section>
  );
}
