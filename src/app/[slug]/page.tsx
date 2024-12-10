import { Menu } from "@/components/menu";
import { RuleCard } from "@/components/rule-card";
import { getRuleBySlug, rules } from "@/data";
import { Metadata } from 'next';

interface PageParams {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const rule = await getRuleBySlug(params.slug);

  return {
    title: rule ? `${rule.title} rule by ${rule.author?.name}` : 'Rule not found',
    description: rule?.content,
  };
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return rules.map((rule) => ({
    slug: rule.slug,
  }));
}

interface PageProps {
  params: PageParams;
}

export default async function Page(props: PageProps) {
  const rule = await getRuleBySlug(props.params.slug);

  if (!rule) {
    return <div>Rule not found</div>;
  }

  return (
    <>
      <div className="hidden md:flex mt-12 sticky top-12 h-[calc(100vh-3rem)]">
        <Menu />
      </div>

      <main className="flex-1 p-6 pt-16">
        <RuleCard rule={rule} isPage={true} />
      </main>
    </>
  );
}

export const revalidate = 86400;
