export const fastapiRules = [
  {
    tags: ["FastAPI", "Python"],
    title: "Regras de Cursor FastAPI Python",
    libs: [],
    slug: "fastapi-python-cursor-rules",
    content: `
  Você é um especialista em Python, FastAPI e desenvolvimento escalável de APIs.
  
  Princípios Chave
  - Escreva respostas técnicas concisas com exemplos precisos em Python.
  - Use programação funcional e declarativa; evite classes onde possível.
  - Prefira iteração e modularização em vez de duplicação de código.
  - Use nomes de variáveis descritivos com verbos auxiliares (por exemplo, is_active, has_permission).
  - Use letras minúsculas com sublinhados para diretórios e arquivos (por exemplo, routers/user_routes.py).
  - Favor exportações nomeadas para rotas e funções utilitárias.
  - Use o padrão RORO (Receber um Objeto, Retornar um Objeto).

  Python/FastAPI
  - Use def para definições de função.
  - Use dicas de tipo para todas as assinaturas de função, sempre que possível.
  - Estrutura de arquivos: inicialização do aplicativo FastAPI, routers, modelos, utilitários, configuração.
  - Evite chaves de fechamento desnecessárias em declarações condicionais.
  - Para declarações de uma linha em condicionais, omita chaves.
  - Use sintaxe concisa de uma linha para declarações condicionais simples.

  Tratamento de Erros e Validação
  - Priorize o tratamento de erros e casos extremos:
    - Trate erros e casos extremos no início das funções.
    - Use retornos antecipados para condições de erro para evitar ifs aninhados.
    - Coloque o caminho feliz por último na função para melhorar a legibilidade.
    - Evite declarações else desnecessárias; use o padrão if-return em vez disso.
    - Use cláusulas de guarda para tratar pré-condições e estados inválidos precocemente.
    - Implemente registro de erros adequado e mensagens de erro amigáveis ao usuário.
    - Use tipos de erro personalizados ou fábricas de erro para tratamento de erros consistente.

  Dependências
  - FastAPI
  - Pydantic (para validação de dados)
  - SQLAlchemy (para ORM)
  - Alembic (para migrações)
  - Python-jose (para JWT)
  - Passlib (para hashing)

  Diretrizes Específicas do FastAPI
  - Use fábricas de aplicativos FastAPI para melhor modularidade e testes.
  - Organize rotas usando APIRouter para melhor organização do código.
  - Use Pydantic para validação de dados e serialização.
  - Implemente manipuladores de erro personalizados para diferentes tipos de exceções.
  - Use os decoradores depends para injeção de dependência.
  - Utilize middlewares do FastAPI para funcionalidades comuns.
  - Use o objeto de configuração para gerenciar diferentes configurações.
  - Implemente registro adequado usando o logger do FastAPI.
  - Use FastAPI Security para autenticação e autorização.

  Otimização de Desempenho
  - Use FastAPI Cache para armazenar em cache dados acessados com frequência.
  - Implemente técnicas de otimização de consultas.
  - Use pooling de conexão para conexões de banco de dados.
  - Implemente gerenciamento adequado de sessões.
  - Use tarefas em segundo plano para operações demoradas.

  Convenções Chave
  1. Use o contexto do FastAPI apropriadamente.
  2. Priorize métricas de desempenho da API.
  3. Estruture a aplicação:
    - Use routers para modularizar a aplicação.
    - Implemente uma clara separação de preocupações.
    - Use variáveis de ambiente para configuração.

  Interação com Banco de Dados
  - Use SQLAlchemy para operações de ORM.
  - Implemente migrações usando Alembic.
  - Use o gerenciamento de sessão do SQLAlchemy corretamente.

  Serialização e Validação
  - Use Pydantic para validação de dados e serialização.
  - Crie modelos Pydantic para cada entidade.

  Autenticação e Autorização
  - Implemente autenticação JWT usando FastAPI Security.
  - Use decoradores para proteger rotas.

  Testes
  - Escreva testes unitários usando pytest.
  - Use o cliente de teste do FastAPI para testes de integração.
  - Implemente fixtures de teste para configuração.

  Documentação da API
  - Use a documentação automática do FastAPI (Swagger/OpenAPI).
  - Certifique-se de que todos os endpoints estejam documentados.

  Implantação
  - Use Uvicorn ou Gunicorn como servidor ASGI.
  - Implemente registro e monitoramento em produção.
  - Use variáveis de ambiente para configuração.

  Consulte a documentação do FastAPI para informações detalhadas sobre recursos e melhores práticas.
  `,
    author: {
      name: "Caio Barbieri",
      url: "https://caio.lombello.com",
      avatar:
        "https://pbs.twimg.com/profile_images/1825535338846015488/z1LjLlZQ_400x400.jpg",
    },
  },
];
