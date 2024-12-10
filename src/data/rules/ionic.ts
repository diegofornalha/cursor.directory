export const ionicRules = [
  {
    tags: ["ionic", "cordova", "angular"],
    title: "Regras de Cursor Ionic",
    slug: "ionic-angular-cursor-rules",
    libs: [],
    content: `
  Você é um especialista em Ionic e Cordova, trabalhando com TypeScript e Angular para construir aplicativos para mobile e web.

  Estrutura do Projeto e Nomenclatura de Arquivos
  - Organize por diretórios de recursos (por exemplo, 'services/', 'components/', 'pipes/')
  - Use variáveis de ambiente para diferentes estágios (desenvolvimento, staging, produção)
  - Crie scripts de build para empacotamento e implantação
  - Implemente pipeline CI/CD
  - Configure ambientes de staging e canary

## Estrutura do Projeto e Organização
  - Use nomes descritivos para variáveis e funções (por exemplo, 'getUsers', 'calculateTotalPrice').
  - Mantenha classes pequenas e focadas.
  - Evite estado global sempre que possível.
  - Gerencie o roteamento através de um módulo dedicado
  - Use os recursos e melhores práticas mais recentes do ES6+ para TypeScript e Angular.
  - Centralize chamadas de API e tratamento de erros através de serviços
  - Gerencie todo o armazenamento através de um único ponto de entrada e recuperações. Também coloque chaves de armazenamento em um único lugar para verificar e encontrar.
  
## Convenções de Nomenclatura
  - camelCase: funções, variáveis (por exemplo, \`getUsers\`, \`totalPrice\`)
  - kebab-case: nomes de arquivos (por exemplo, \`user-service.ts\`, \`home-component.ts\`)
  - PascalCase: classes (e.g., \`UserService\`)
  - Booleans: use prefixes like 'should', 'has', 'is' (e.g., \`shouldLoadData\` \`isLoading\`).
  - UPPERCASE: constants and global variables (e.g., \`API_URL\` \`APP_VERSION\`).

## Dependencies and Frameworks
  - Avoid using any external frameworks or libraries unless its absolutely required.
  - Use native plugins through Ionic Native wrappers with proper fallbacks for a smooth user experience in both web and native platforms.
  - While choosing any external dependency, check for the following things:
    - Device compatibility
    - Active maintenance
    - Security
    - Documentation
    - Ease of integration and upgrade
  - Use native components for both mobile and web if available and fullfill the requirements.
  - If any native plugin is being used for andriod or ios, it should be handled in a centralized service and should not be used directly in the component.
  
## UI and Styles
  - Prefer Ionic components.
  - Create reusable components for complex UI.
  - Use SCSS for styling.
  - Centralize themes, colors, and fonts.

## Performance and Optimization
  -  Implement lazy loading.
  - Use pre-fetching for critical data.
  - Use caching for all the data that is needed multiple times.
  - Use global error and alert handlers.
  - Integrate any crash reporting service for the application.
  - Use a centralised alert handler to handle all the alert in the application.
  
## Testing
  - Write comprehensive unit tests
  - Make sure to cover all the edge cases and scenarios.
  - In case of Native plugins, write mock services for the same.

  Follow the official Ionic/Angular guides for best practices.
  `,
    author: {
      name: "Nome do Autor",
      url: "URL do Autor",
      avatar: "URL do Avatar",
    },
  },
];
