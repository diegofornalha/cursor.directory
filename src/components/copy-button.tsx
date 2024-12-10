"use client";

import { incrementClicks } from '@/lib/supabase';

export function CopyButton({ slug, text }: { slug: string; text: string }) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    await incrementClicks(slug);
  };

  return (
    <button onClick={handleCopy}>
      Copiar
    </button>
  );
}
