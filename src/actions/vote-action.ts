"use server";

import { supabase } from "@/lib/supabase";
import { headers } from "next/headers";
import { z } from "zod";
import { actionClient } from "./safe-action";

export const voteAction = actionClient
  .schema(
    z.object({
      slug: z.string(),
    }),
  )
  .action(async ({ parsedInput: { slug } }) => {
    try {
      const headersList = await headers();
      const clientIP = headersList.get("x-forwarded-for") || '';

      // Verificar se o IP já votou
      const { data: existingVote, error: voteCheckError } = await supabase
        .from('rule_votes')
        .select()
        .match({ slug, ip: clientIP })
        .single();

      if (voteCheckError && voteCheckError.code !== 'PGRST116') {
        throw voteCheckError;
      }

      if (existingVote) {
        return { success: false, message: "Você já votou nesta regra" };
      }

      // Registrar o voto
      const { error: voteError } = await supabase
        .from('rule_votes')
        .insert([{ slug, ip: clientIP }]);

      if (voteError) throw voteError;

      // Incrementar ou criar contagem
      const { error: countError } = await supabase
        .from('rule_counts')
        .upsert({
          slug,
          count: 1,
          views: 0
        }, {
          onConflict: 'slug',
          count: 'exact'
        });

      if (countError) throw countError;

      return { success: true, message: "Voto registrado com sucesso" };

    } catch (error) {
      console.error('Erro ao processar voto:', error);
      return { 
        success: false, 
        message: "Erro ao processar voto. Tente novamente mais tarde." 
      };
    }
  });
