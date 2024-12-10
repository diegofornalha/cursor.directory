import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function incrementUrlClicks(slug: string) {
  try {
    await supabase.rpc('increment_url_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing URL clicks:', error);
  }
}

export async function incrementCopyClicks(slug: string) {
  try {
    await supabase.rpc('increment_content_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing content clicks:', error);
  }
}

export async function incrementWhatsappClicks(slug: string) {
  try {
    await supabase.rpc('increment_whatsapp_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing WhatsApp clicks:', error);
  }
}

export async function getPopularItems(limit = 10) {
  try {
    const { data, error } = await supabase
      .from('rule_counts')
      .select('slug, click_content, click_url, click_whatsapp')
      .order('click_content', { ascending: false })
      .order('click_url', { ascending: false })
      .order('click_whatsapp', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching popular items:', error);
    return [];
  }
} 