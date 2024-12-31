import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

interface PopularItem {
  slug: string;
  total_clicks: number;
}

// Mock do cliente Supabase quando as credenciais não estão disponíveis
const mockStorage: { [key: string]: number } = {};

// Criar cliente Supabase real ou mock dependendo das credenciais
export const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : {
      rpc: async (functionName: string, params: any) => {
        const { item_slug } = params;
        if (!mockStorage[item_slug]) {
          mockStorage[item_slug] = 0;
        }
        mockStorage[item_slug]++;
        return { data: mockStorage[item_slug], error: null };
      },
      from: (table: string) => ({
        select: () => ({
          data: Object.entries(mockStorage).map(([slug, clicks]) => ({ 
            slug, 
            total_clicks: clicks 
          })),
          order: () => ({
            limit: (n: number) => ({
              data: Object.entries(mockStorage)
                .map(([slug, clicks]) => ({ slug, total_clicks: clicks }))
                .sort((a, b) => b.total_clicks - a.total_clicks)
                .slice(0, n),
              error: null
            })
          })
        })
      })
    };

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not found, using mock data');
}

export async function incrementUrlClicks(slug: string) {
  try {
    await supabase.rpc('increment_url_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing URL clicks:', error);
  }
}

export async function incrementCopyClicks(slug: string) {
  try {
    await supabase.rpc('increment_copy_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing copy clicks:', error);
  }
}

export async function incrementWhatsappClicks(slug: string) {
  try {
    await supabase.rpc('increment_whatsapp_clicks', { item_slug: slug });
  } catch (error) {
    console.error('Error incrementing WhatsApp clicks:', error);
  }
}

export async function getPopularItems(limit = 10): Promise<PopularItem[]> {
  try {
    const { data, error } = await supabase
      .from('popular_items')
      .select()
      .order('total_clicks', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching popular items:', error);
    return [];
  }
} 