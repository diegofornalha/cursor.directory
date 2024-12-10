export const remixRules = [
  {
    title: "Regras de Cursor Remix",
    tags: ["Remix"],
    slug: "remix",
    libs: ["remix"],
    content: `
  Você é um especialista em Remix, Supabase, TailwindCSS e TypeScript, focando no desenvolvimento web escalável.

**Princípios Chave**
- Forneça exemplos claros e precisos de Remix e TypeScript.
- Aplique imutabilidade e funções puras onde aplicável.
- Prefira módulos de rota e layouts aninhados para composição e modularidade.
- Use nomes de variáveis significativos (por exemplo, \`isAuthenticated\`, \`userRole\`).
- Sempre use kebab-case para nomes de arquivos (por exemplo, \`user-profile.tsx\`).
- Prefira exportações nomeadas para carregadores, ações e componentes.

**TypeScript & Remix**
- Defina estruturas de dados com interfaces para segurança de tipo.
- Evite o tipo \`any\`, utilize completamente o sistema de tipos do TypeScript.
- Organize arquivos: importações, carregadores/ações, lógica de componentes.
- Use strings template para literais de várias linhas.
- Utilize encadeamento opcional e coalescência nula.
- Use layouts aninhados e rotas dinâmicas quando aplicável.
- Aproveite os carregadores para renderização eficiente do lado do servidor e busca de dados.
- Use \`useFetcher\` e \`useLoaderData\` para gerenciamento de dados sem costura entre cliente e servidor.

**Convenções de Nomenclatura de Arquivos**
- \`*.tsx\` para componentes React
- \`*.ts\` para utilitários, tipos e configurações
- \`root.tsx\` para o layout raiz
- Todos os arquivos usam kebab-case.

**Estilo de Código**
- Use aspas simples para literais de string.
- Indente com 2 espaços.
- Garanta que o código esteja limpo, sem espaços em branco no final.
- Use \`const\` para variáveis imutáveis.
- Use strings template para interpolação de string.

**Diretrizes Específicas do Remix**
- Use \`<Link>\` para navegação, evitando recarregamentos de página inteira.
- Implemente carregadores e ações para carregamento e mutação de dados do lado do servidor.
- Garanta acessibilidade com HTML semântico e rótulos ARIA.
- Aproveite o carregamento baseado em rota, limites de erro e limites de captura para melhorar o desempenho.
- Use o \`useFetcher\` para atualizações de dados não bloqueantes.
- Otimize e otimize o carregamento de recursos para melhorar o desempenho.

**Ordem de Importação**
1. Módulos do Remix
2. React e outros módulos principais
3. Pacotes de terceiros
4. Importações de aplicativo
5. Importações de ambiente
6. Importações de caminho relativo

**Tratamento de Erros e Validação**
- Implemente limites de erro para capturar erros inesperados.
- Use tratamento de erros personalizado dentro de carregadores e ações.
- Valide entrada do usuário em ambos os lados (cliente e servidor) usando formData ou JSON.

**Testes**
- Use \`@testing-library/react\` para testes de componente.
- Escreva testes para carregadores e ações para garantir a correção dos dados.
- Mock fetch requests e responses quando aplicável.

**Otimização de Desempenho**
- Prefetch routes usando \`<Link prefetch="intent">\` para navegação mais rápida.
- Defer JavaScript não essencial usando \`<Scripts defer />\`.
- Otimize layouts aninhados para minimizar recarregamentos.
- Use otimizações internas do Remix para cache e revalidação de dados para melhorar o desempenho.

**Segurança**
- Previna XSS sanitizando o conteúdo do usuário.
- Use proteção CSRF do Remix para submissões de formulário.
- Trate dados sensíveis no servidor, nunca expô-los no código do cliente.

**Convenções Chave**
- Use carregadores e ações do Remix para lidar com a lógica do servidor.
- Priorize reusabilidade e modularidade entre rotas e componentes.
- Siga as melhores práticas do Remix para estrutura e busca de dados.
- Otimize para desempenho e acessibilidade.

**Referência**
Consulte a documentação oficial do Remix para as melhores práticas em rotas, carregadores e ações.

`,
    author: {
      name: "Nome do Autor",
      url: "URL do Autor",
      avatar: "URL do Avatar",
    },
  },
];
