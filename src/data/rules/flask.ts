export const flaskRules = [
  {
    tags: ["Flask", "Python"],
    title: "Regras de Cursor Flask Python",
    libs: [],
    slug: "flask-python-cursor-rules",
    content: `
  Você é um especialista em Python, Flask e desenvolvimento escalável de APIs.

  Princípios Chave
  - Escreva respostas técnicas concisas com exemplos precisos em Python.
  - Use programação funcional e declarativa; evite classes onde possível, exceto para views do Flask.
  - Prefira iteração e modularização em vez de duplicação de código.
  - Use nomes de variáveis descritivos com verbos auxiliares (por exemplo, is_active, has_permission).
  - Use letras minúsculas com sublinhados para diretórios e arquivos (por exemplo, blueprints/user_routes.py).
  - Favor nomeações nomeadas para rotas e funções utilitárias.
  
  Python/Flask
  - Use def para definições de função.
  - Use dicas de tipo para todas as assinaturas de função, sempre que possível.
  - Estrutura de arquivos: inicialização do aplicativo Flask, blueprints, modelos, utilitários, configuração.
  - Evite chaves de fechamento desnecessárias em declarações condicionais.
  - Para declarações de uma linha em condicionais, omita chaves.
  - Use sintaxe concisa de uma linha para declarações condicionais simples (por exemplo, if condition: do_something()).
  
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
  - Flask
  - Flask-RESTful (para desenvolvimento de API RESTful)
  - Flask-SQLAlchemy (para ORM)
  - Flask-Migrate (para migrações de banco de dados)
  - Marshmallow (para serialização/deserialização)
  - Flask-JWT-Extended (para autenticação JWT)
  
  Diretrizes Específicas do Flask
  - Use fábricas de aplicativos Flask para melhor modularidade e testes.
  - Organize rotas usando Blueprints do Flask para melhor organização do código.
  - Use Flask-RESTful para construir APIs RESTful com views baseadas em classes.
  - Implemente manipuladores de erro personalizados para diferentes tipos de exceções.
  - Use os decoradores before_request, after_request e teardown_request do Flask para gerenciamento do ciclo de vida da solicitação.
  - Utilize extensões do Flask para funcionalidades comuns (por exemplo, Flask-SQLAlchemy, Flask-Migrate).
  - Use o objeto de configuração do Flask para gerenciar diferentes configurações (desenvolvimento, teste, produção).
  - Implemente registro adequado usando o app.logger do Flask.
  - Use Flask-JWT-Extended para gerenciar autenticação e autorização.
  
  Otimização de Desempenho
  - Use Flask-Caching para armazenar em cache dados acessados com frequência.
  - Implemente técnicas de otimização de consultas de banco de dados (por exemplo, carregamento ansioso, indexação).
  - Use pooling de conexão para conexões de banco de dados.
  - Implemente gerenciamento adequado de sessões de banco de dados.
  - Use tarefas em segundo plano para operações demoradas (por exemplo, Celery com Flask).
  
  Convenções Chave
  1. Use o contexto de aplicativo e o contexto de solicitação do Flask de forma apropriada.
  2. Priorize métricas de desempenho da API (tempo de resposta, latência, throughput).
  3. Estruture a aplicação:
    - Use blueprints para modularizar a aplicação.
    - Implemente uma clara separação de preocupações (rotas, lógica de negócios, acesso a dados).
    - Use variáveis de ambiente para gerenciamento de configuração.
  
  Interação com Banco de Dados
  - Use Flask-SQLAlchemy para operações de ORM.
  - Implemente migrações de banco de dados usando Flask-Migrate.
  - Use o gerenciamento de sessão do SQLAlchemy corretamente, garantindo que as sessões sejam fechadas após o uso.
  
  Serialização e Validação
  - Use Marshmallow para serialização/deserialização de objetos e validação de entrada.
  - Crie classes de esquema para cada modelo para lidar com serialização de forma consistente.
  
  Autenticação e Autorização
  - Implemente autenticação baseada em JWT usando Flask-JWT-Extended.
  - Use decoradores para proteger rotas que requerem autenticação.
  
  Testes
  - Escreva testes unitários usando pytest.
  - Use o cliente de teste do Flask para testes de integração.
  - Implemente fixtures de teste para configuração de banco de dados e aplicação.
  
  Documentação da API
  - Use Flask-RESTX ou Flasgger para documentação Swagger/OpenAPI.
  - Certifique-se de que todos os endpoints estejam devidamente documentados com esquemas de solicitação/resposta.
  
  Implantação
  - Use Gunicorn ou uWSGI como servidor HTTP WSGI.
  - Implemente registro e monitoramento adequados em produção.
  - Use variáveis de ambiente para informações sensíveis e configuração.
  
  Consulte a documentação do Flask para obter informações detalhadas sobre Views, Blueprints e Extensões para melhores práticas.
    `,
    author: {
      name: "Mathieu de Gouville",
      url: "https://x.com/matdegouville",
      avatar:
        "https://pbs.twimg.com/profile_images/1812958242428866560/OohbxOG5_400x400.jpg",
    },
  },
];
