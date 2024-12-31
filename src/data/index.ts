import { fetchRules, fetchRuleBySlug, CoflowRule } from '@/lib/api';

export type Rule = CoflowRule;

export interface Section {
  title: string;
  items: Rule[];
}

export async function getSections(): Promise<Section[]> {
  const rules = await fetchRules();
  
  // Agrupar regras por tags
  const rulesByTag = rules.reduce((acc: { [key: string]: Rule[] }, rule) => {
    rule.tags.forEach(tag => {
      if (!acc[tag]) {
        acc[tag] = [];
      }
      acc[tag].push(rule);
    });
    return acc;
  }, {});

  // Converter para o formato de seções
  return Object.entries(rulesByTag).map(([tag, items]) => ({
    title: tag,
    items
  }));
}

export async function getRuleBySlug(slug: string): Promise<Rule | null> {
  return fetchRuleBySlug(slug);
}
