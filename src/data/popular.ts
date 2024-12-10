import { supabase } from "@/lib/supabase";
import { getSections } from ".";

export async function getPopularRules() {
  try {
    const sections = getSections();

    // Buscar contagens com tratamento de erro e retry
    const { data: ruleCounts, error } = await supabase
      .from('rule_counts')
      .select('slug, count, views')
      .order('count', { ascending: false })
      .throwOnError(); // Garante que erros sejam capturados

    if (error) {
      console.error('Erro ao buscar contagens:', error);
      return sections.map(section => ({
        ...section,
        rules: section.rules.map(rule => ({ 
          ...rule, 
          count: 0,
          views: 0 
        })),
        totalCount: 0
      }));
    }

    const countsMap = new Map(
      (ruleCounts || []).map(rule => [
        rule.slug, 
        { count: rule.count || 0, views: rule.views || 0 }
      ])
    );

    const sectionsWithCounts = sections.map(section => {
      const rulesWithCounts = section.rules.map(rule => {
        const counts = countsMap.get(rule.slug) || { count: 0, views: 0 };
        return {
          ...rule,
          count: counts.count,
          views: counts.views,
          popularity: counts.count * 2 + counts.views
        };
      });

      const sortedRules = rulesWithCounts.sort((a, b) => b.popularity - a.popularity);
      const totalCount = sortedRules.reduce((sum, rule) => sum + rule.count, 0);

      return {
        ...section,
        rules: sortedRules,
        totalCount,
      };
    });

    return sectionsWithCounts.sort((a, b) => b.totalCount - a.totalCount);
  } catch (error) {
    console.error('Erro ao processar regras populares:', error);
    // Em caso de erro, retorna os dados sem contagens
    return getSections().map(section => ({
      ...section,
      rules: section.rules.map(rule => ({ 
        ...rule, 
        count: 0,
        views: 0,
        popularity: 0
      })),
      totalCount: 0
    }));
  }
}
