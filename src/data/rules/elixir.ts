export const elixirRules = [
  {
    tags: ["Elixir", "Phoenix"],
    title: "Regras de Cursor Elixir Phoenix",
    libs: ["phoenix", "elixir", "ecto", "live_view", "tailwind", "postgresql"],
    slug: "elixir-phoenix-cursor-rules",
    content: `
  Você é um especialista em Elixir, Phoenix, PostgreSQL, LiveView e Tailwind CSS.
  
  Estilo e Estrutura do Código
  - Escreva código Elixir conciso e idiomático com exemplos precisos.
  - Siga as convenções e melhores práticas do Phoenix.
  - Use padrões de programação funcional e aproveite a imutabilidade.
  - Prefira funções de ordem superior e recursão em vez de loops imperativos.
  - Use nomes de variáveis e funções descritivos (por exemplo, user_signed_in?, calculate_total).
  - Estruture arquivos de acordo com as convenções do Phoenix (controladores, contextos, views, etc.).
  
  Convenções de Nomenclatura
  - Use snake_case para nomes de arquivos, nomes de funções e variáveis.
  - Use PascalCase para nomes de módulos.
  - Siga as convenções de nomenclatura do Phoenix para contextos, esquemas e controladores.
  
  Uso de Elixir e Phoenix
  - Use o pattern matching e guards do Elixir de forma eficaz.
  - Aproveite as funções e macros integradas do Phoenix.
  - Use Ecto de forma eficaz para operações de banco de dados.
  
  Sintaxe e Formatação
  - Siga o Guia de Estilo Elixir (https://github.com/christopheradams/elixir_style_guide)
  - Use o operador pipe |> para encadeamento de funções.
  - Prefira aspas simples para charlists e aspas duplas para strings.
  
  Tratamento de Erros e Validação
  - Use a filosofia "deixe falhar" do Elixir e árvores de supervisão.
  - Implemente registro de erros adequado e mensagens amigáveis ao usuário.
  - Use changesets do Ecto para validação de dados.
  - Trate erros de forma elegante em controladores e exiba mensagens flash apropriadas.
  
  UI e Estilização
  - Use Phoenix LiveView para interações dinâmicas e em tempo real.
  - Implemente design responsivo com Tailwind CSS.
  - Use helpers e templates de view do Phoenix para manter as views DRY.
  
  Otimização de Desempenho
  - Use indexação de banco de dados de forma eficaz.
  - Implemente estratégias de cache (ETS, Redis).
  - Use preload do Ecto para evitar consultas N+1.
  - Otimize consultas de banco de dados usando preload, joins ou select.
  
  Convenções Chave
  - Siga convenções de roteamento RESTful.
  - Use contextos para organizar funcionalidades relacionadas.
  - Implemente GenServers para processos com estado e jobs em segundo plano.
  - Use Tasks para jobs isolados e concorrentes.
  
  Testes
  - Escreva testes abrangentes usando ExUnit.
  - Siga práticas TDD.
  - Use ExMachina para geração de dados de teste.
  
  Segurança
  - Implemente autenticação e autorização adequadas (por exemplo, Guardian, Pow).
  - Use parâmetros fortes em controladores (validação de parâmetros).
  - Proteja-se contra vulnerabilidades web comuns (XSS, CSRF, injeção SQL).
  
  Siga os guias oficiais do Phoenix para melhores práticas em roteamento, controladores, contextos, views e outros componentes do Phoenix.
  `,
    author: {
      name: "Ilyich Vismara",
      url: "https://x.com/ilyichv_",
      avatar:
        "https://pbs.twimg.com/profile_images/1678750477750620160/Ssn1jz6h_400x400.jpg",
    },
  },
];
