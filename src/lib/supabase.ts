import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function incrementClicks(slug: string) {
  await supabase.rpc('increment_clicks', { item_slug: slug });
}

export async function getPopularItems(limit = 10) {
  const { data } = await supabase
    .from('click_counts')
    .select('slug, clicks')
    .order('clicks', { ascending: false })
    .limit(limit);

  return data || [];
} 