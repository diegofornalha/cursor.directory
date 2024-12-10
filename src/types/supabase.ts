export interface PopularItem {
  id: string;
  slug: string;
  views: number;
  title: string;
  tags: string[];
  libs: string[];
  content: string;
  author_name: string;
  author_url: string;
  author_avatar: string;
  created_at: string;
  updated_at: string;
}

export interface ClickCount {
  slug: string;
  click_content: number;
  click_url: number;
  click_whatsapp: number;
} 