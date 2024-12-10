import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function incrementUrlClicks(slug: string) {
  await supabase.rpc('increment_url_clicks', { item_slug: slug });
}

export async function incrementCopyClicks(slug: string) {
  await supabase.rpc('increment_content_clicks', { item_slug: slug });
}

export async function incrementWhatsappClicks(slug: string) {
  await supabase.rpc('increment_whatsapp_clicks', { item_slug: slug });
}

export async function getPopularItems(limit = 10) {
  const { data } = await supabase
    .from('click_counts')
    .select('slug, click_content, click_url, click_whatsapp')
    .order('click_content', { ascending: false })
    .order('click_url', { ascending: false })
    .order('click_whatsapp', { ascending: false })
    .limit(limit);

  return data || [];
} 