export interface CoflowRule {
  title: string;
  slug: string;
  tags: string[];
  libs: string[];
  content: string;
  author: {
    name: string;
    url: string;
    avatar: string;
  };
}

const API_URL = 'https://api.coflow.com.br';

// Dados mockados para usar enquanto a API não está disponível
const mockRules: CoflowRule[] = [
  {
    title: "Next.js TypeScript Rules",
    slug: "nextjs-typescript-rules",
    tags: ["Next.js", "TypeScript"],
    libs: ["React", "Tailwind", "shadcn/ui"],
    content: `Você é um especialista em Next.js e TypeScript.

Princípios:
- Use TypeScript para todo o código
- Prefira Server Components quando possível
- Implemente boas práticas de SEO
- Mantenha o código limpo e organizado`,
    author: {
      name: "MTZN",
      url: "https://mtzn.pl",
      avatar: "https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png"
    }
  },
  {
    title: "React Best Practices",
    slug: "react-best-practices",
    tags: ["React", "JavaScript"],
    libs: ["React", "Redux", "React Query"],
    content: `Você é um especialista em React.

Princípios:
- Use hooks para gerenciamento de estado
- Implemente componentes reutilizáveis
- Siga os princípios do Clean Code
- Otimize o desempenho`,
    author: {
      name: "MTZN",
      url: "https://mtzn.pl",
      avatar: "https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png"
    }
  }
];

export async function fetchRules(): Promise<CoflowRule[]> {
  try {
    // Tenta buscar da API primeiro
    const response = await fetch(`${API_URL}/rules`);
    if (!response.ok) {
      // Se falhar, retorna os dados mockados
      console.log('Using mock data as API is not available');
      return mockRules;
    }
    const data = await response.json();
    return data.map((rule: any) => ({
      title: rule.title,
      slug: rule.slug,
      tags: rule.tags || [],
      libs: rule.libs || [],
      content: rule.content,
      author: {
        name: rule.author?.name || 'Unknown',
        url: rule.author?.url || '#',
        avatar: rule.author?.avatar || 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'
      }
    }));
  } catch (error) {
    // Em caso de erro, retorna os dados mockados
    console.log('Using mock data as API is not available');
    return mockRules;
  }
}

export async function fetchRuleBySlug(slug: string): Promise<CoflowRule | null> {
  try {
    // Tenta buscar da API primeiro
    const response = await fetch(`${API_URL}/rules/${slug}`);
    if (!response.ok) {
      // Se falhar, busca nos dados mockados
      const mockRule = mockRules.find(rule => rule.slug === slug);
      return mockRule || null;
    }
    const rule = await response.json();
    return {
      title: rule.title,
      slug: rule.slug,
      tags: rule.tags || [],
      libs: rule.libs || [],
      content: rule.content,
      author: {
        name: rule.author?.name || 'Unknown',
        url: rule.author?.url || '#',
        avatar: rule.author?.avatar || 'https://e7.pngegg.com/pngimages/613/636/png-clipart-computer-icons-user-profile-male-avatar-avatar-heroes-logo.png'
      }
    };
  } catch (error) {
    // Em caso de erro, busca nos dados mockados
    const mockRule = mockRules.find(rule => rule.slug === slug);
    return mockRule || null;
  }
} 