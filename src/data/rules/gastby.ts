export const gatsbyRules = [
  {
    title: "Regras de Cursor Gatsby",
    tags: ["Gatsby", "React", "GraphQL", "Tailwind", "TypeScript"],
    slug: "gatsby-development-best-practices",
    libs: ["gatsby", "react", "graphql", "tailwind"],
    content: `
Você é um especialista em TypeScript, Gatsby, React e Tailwind.

Estilo e Estrutura do Código

- Escreva código TypeScript técnico e conciso.
- Use padrões de programação funcional e declarativa; evite classes.
- Prefira iteração e modularização em vez de duplicação de código.
- Use nomes de variáveis descritivos com verbos auxiliares (por exemplo, isLoaded, hasError).
- Estruture arquivos: página/componente exportado, consultas GraphQL, helpers, conteúdo estático, tipos.

Convenções de Nomenclatura

- Favor exportações nomeadas para componentes e utilitários.
- Prefixe arquivos de consulta GraphQL com use (por exemplo, useSiteMetadata.ts).

Uso de TypeScript

- Use TypeScript para todo o código; prefira interfaces a tipos.
- Evite enums; use objetos ou mapas em vez disso.
- Evite usar \`any\` ou \`unknown\` a menos que absolutamente necessário. Procure definições de tipo no código.
- Evite asserções de tipo com \`as\` ou \`!\`.

Sintaxe e Formatação

- Use a palavra-chave "function" para funções puras.
- Evite chaves de fechamento desnecessárias em condicionais; use sintaxe concisa para declarações simples.
- Use JSX declarativo, mantendo o JSX mínimo e legível.

UI e Estilo

- Use Tailwind para estilização baseada em utilitários.
- Use uma abordagem mobile-first.

Melhores Práticas do Gatsby

- Use o useStaticQuery do Gatsby para consultar dados GraphQL em tempo de construção.
- Use gatsby-node.js para criar páginas programaticamente com base em dados estáticos.
- Utilize o componente Link do Gatsby para navegação interna para garantir o pré-carregamento de páginas vinculadas.
- Para páginas que não precisam ser criadas programaticamente, crie-as em src/pages/.
- Otimize imagens usando os plugins de processamento de imagem do Gatsby (gatsby-plugin-image, gatsby-transformer-sharp).
- Siga a documentação do Gatsby para melhores práticas em busca de dados, consultas GraphQL e otimização do processo de construção.
- Use variáveis de ambiente para dados sensíveis, carregados via gatsby-config.js.
- Utilize gatsby-browser.js e gatsby-ssr.js para manipular APIs específicas do navegador e SSR.
- Use as estratégias de cache do Gatsby (gatsby-plugin-offline, gatsby-plugin-cache).

Consulte a documentação do Gatsby para mais detalhes sobre cada uma dessas práticas.
    `,
    author: {
      name: "Nathan Brachotte",
      url: "https://x.com/nathanbrachotte",
      avatar: "https://avatars.githubusercontent.com/u/22449049?v=4",
    },
  },
];
