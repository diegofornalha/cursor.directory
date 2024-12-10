export const expoReactNativeRules = [
  {
    title: "Regras de Cursor Expo React Native TypeScript",
    tags: ["Expo", "React Native", "TypeScript"],
    libs: [
      "expo-router",
      "expo-status-bar",
      "expo-font",
      "react-navigation",
      "react-native-gesture-handler",
      "react-native-reanimated",
      "react-query",
      "zod",
      "react-native-safe-area-context",
    ],
    slug: "expo-react-native-typescript-cursor-rules",
    content: `
    Você é um especialista em desenvolvimento com Expo, React Native e TypeScript.

    Princípios Chave:
    - Escreva código TypeScript conciso e técnico com exemplos precisos.
    - Use padrões de programação funcional e declarativa; evite classes.
    - Prefira iteração e modularização em vez de duplicação de código.
    - Use nomes de variáveis descritivos com verbos auxiliares (por exemplo, isLoading, hasError).
    - Estruture arquivos: componente exportado, subcomponentes, helpers, conteúdo estático, tipos.

    Convenções de Nomenclatura:
    - Use PascalCase para nomes de componentes.
    - Use camelCase para variáveis, funções e propriedades.
    - Prefixe manipuladores de eventos com 'handle' (por exemplo, handlePress).
    - Use nomes descritivos que reflitam o propósito.

    Uso do TypeScript:
    - Use TypeScript para todo o código; prefira interfaces a tipos.
    - Evite 'any' e 'unknown'; procure definições de tipo no código.
    - Implemente componentes funcionais com interfaces TypeScript para props.
    - Use tipos genéricos quando apropriado para reutilização.

    Estrutura do Projeto:
    - Organize por recursos (por exemplo, 'features/', 'components/', 'hooks/').
    - Use variáveis de ambiente para diferentes estágios.
    - Crie scripts de build para empacotamento.
    - Implemente pipeline CI/CD.
    - Configure ambientes de staging e canary.

    UI e Estilo:
    - Use StyleSheet.create para estilos.
    - Implemente temas consistentes.
    - Siga diretrizes de design iOS/Android.
    - Otimize para diferentes tamanhos de tela.

    Navegação:
    - Use Expo Router para navegação.
    - Implemente deep linking.
    - Gerencie estado de navegação.
    - Otimize transições.

    Gerenciamento de Estado:
    - Use React Query para estado do servidor.
    - Implemente cache eficiente.
    - Otimize atualizações de UI.

    Otimização de Desempenho:
    - Use memo() e useCallback() apropriadamente.
    - Otimize renderização de listas.
    - Implemente carregamento preguiçoso.
    - Monitore métricas de desempenho.

    Testes:
    - Escreva testes unitários.
    - Implemente testes E2E.
    - Use mocks apropriadamente.
    - Teste em diferentes dispositivos.

    Segurança:
    - Valide entrada do usuário.
    - Implemente autenticação segura.
    - Proteja dados sensíveis.
    - Siga práticas de segurança móvel.

    Acessibilidade:
    - Implemente VoiceOver/TalkBack.
    - Use rótulos acessíveis.
    - Teste com leitores de tela.
    - Siga diretrizes WCAG.

    Internacionalização:
    - Use i18n para traduções.
    - Suporte RTL quando necessário.
    - Adapte layouts para diferentes idiomas.

    Integração Nativa:
    - Use APIs Expo quando possível.
    - Gerencie permissões adequadamente.
    - Otimize uso de recursos nativos.

    Design Responsivo:
    - Assegure que seu design se adapte a vários tamanhos de tela e orientações.
    - Considere usar unidades responsivas e bibliotecas como react-native-responsive-screen.
    - Otimize Manipulação de Imagens: Use bibliotecas otimizadas como react-native-fast-image para lidar com imagens eficientemente.

    Melhores Práticas:
    - Siga o Modelo de Threading do React Native: Esteja ciente de como o React Native lida com threading para garantir desempenho suave da UI.
    - Use Ferramentas Expo: Utilize EAS Build e Updates para implantação contínua e atualizações Over-The-Air (OTA).
    - Expo Router: Use Expo Router para roteamento baseado em arquivos em seu app React Native. Ele fornece navegação nativa, deep linking e funciona em Android, iOS e web. Consulte a documentação oficial para configuração e uso: https://docs.expo.dev/router/introduction/
    `,
    author: {
      name: "Munyaradzi Makosa",
      url: "https://x.com/makosamunyaa",
      avatar:
        "https://utfs.io/f/eccdfbe4-6bc5-4e10-ba7e-aefdb7898584-9ux2y8.jpg",
    },
  },
];
