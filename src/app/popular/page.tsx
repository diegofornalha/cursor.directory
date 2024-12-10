import { Menu } from "@/components/menu";
import { type Rule, RuleCard } from "@/components/rule-card";
import { Tabs } from "@/components/tabs";
import { getPopularItems } from '@/lib/supabase';
import { getRuleBySlug } from "@/data";

export default async function PopularPage() {
  const popularItems = await getPopularItems();
  const popularRules = (await Promise.all(
    popularItems
      .sort((a, b) => {
        // Soma total de interações para cada item
        const totalA = (a.click_content || 0) + (a.click_url || 0) + (a.click_whatsapp || 0);
        const totalB = (b.click_content || 0) + (b.click_url || 0) + (b.click_whatsapp || 0);
        return totalB - totalA; // Ordena do maior para o menor
      })
      .map(async (item) => {
        const rule = await getRuleBySlug(item.slug);
        return rule;
      })
  )).filter((rule): rule is Rule => rule !== null);

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-4 md:pt-16 space-y-8">
        <Tabs />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {popularRules.map((rule) => (
            <RuleCard key={rule.slug} rule={rule} />
          ))}
        </div>
      </main>
    </>
  );
}
