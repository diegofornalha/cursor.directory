import { Menu } from "@/components/menu";
import { type Rule, RuleCard } from "@/components/rule-card";
import { Tabs } from "@/components/tabs";
import { getPopularItems } from '@/lib/supabase';
import { getRuleBySlug } from "@/data";

export default async function PopularPage() {
  try {
    const popularItems = await getPopularItems();
    const popularRules = await Promise.all(
      popularItems
        .sort((a, b) => {
          const totalA = (a.click_content || 0) + (a.click_url || 0) + (a.click_whatsapp || 0);
          const totalB = (b.click_content || 0) + (b.click_url || 0) + (b.click_whatsapp || 0);
          return totalB - totalA;
        })
        .map(async (item) => {
          try {
            const rule = await getRuleBySlug(item.slug);
            return rule;
          } catch (error) {
            console.error(`Error fetching rule for slug ${item.slug}:`, error);
            return null;
          }
        })
    );

    const validRules = popularRules.filter((rule): rule is NonNullable<typeof rule> => rule !== null);

    return (
      <>
        <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
          <Menu />
        </div>

        <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
          <Tabs />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {validRules.map((rule) => (
              <RuleCard key={rule.slug} rule={rule} />
            ))}
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error in PopularPage:', error);
    return (
      <div className="flex-1 p-6 pt-4 md:pt-16">
        <h1 className="text-2xl font-bold">Algo deu errado</h1>
        <p>Não foi possível carregar os itens populares. Tente novamente mais tarde.</p>
      </div>
    );
  }
}
