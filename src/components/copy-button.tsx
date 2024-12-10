"use client";

import { Check, Copy, Link, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { incrementUrlClicks, incrementCopyClicks, incrementWhatsappClicks } from '@/lib/supabase';

interface CopyButtonProps {
  content: string;
  slug: string;
  type: 'url' | 'content' | 'whatsapp';
}

export function CopyButton({ content, slug, type }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleAction = async () => {
    if (type === 'whatsapp') {
      await incrementWhatsappClicks(slug);
      const whatsappUrl = `https://api.whatsapp.com/send?text=Confira esse prompt: ${encodeURIComponent(content)}`;
      window.open(whatsappUrl, '_blank');
      return;
    }

    await navigator.clipboard.writeText(content);
    
    if (type === 'url') {
      await incrementUrlClicks(slug);
      toast("Link copiado!");
    } else {
      await incrementCopyClicks(slug);
      toast("Regra copiada! Adicione um arquivo .cursorrules ao seu projeto e cole a regra.");
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleAction}
      className="text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center"
      type="button"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : type === 'url' ? (
        <Link className="w-4 h-4" />
      ) : type === 'whatsapp' ? (
        <Share2 className="w-4 h-4" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
    </button>
  );
}
