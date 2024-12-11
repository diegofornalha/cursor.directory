![hero](image.png)

## Reconhecimento

<a href="https://news.ycombinator.com/item?id=41346156">
  <img
    style="width: 250px; height: 54px;" width="250" height="54"
    alt="Destaque no Hacker News"
    src="https://hackernews-badge.vercel.app/api?id=41346156"
  />
</a>

# Como Contribuir para o Cursor AI

### Este guia irá ajudá-lo a entender como adicionar novas regras ou prompts ao diretório do Cursor AI.

#### 1. Faça um Fork do Repositório

#### 2. Adicionando uma Nova Regra

Se você deseja enviar uma **nova regra** que ainda não existe no diretório do Cursor, siga estes passos:

1. **Localize o Índice de Regras**:  

   Adicione sua nova regra no arquivo `src/data/index.ts`. Por exemplo:
   
   ```typescript
   import { cRules } from "./rules/c";

2. **Crie um Arquivo de Regra**:
    
    Crie um novo arquivo no diretório `src/data/rules/` com o nome apropriado. Por exemplo, se você está adicionando uma regra para Next.js, nomeie o arquivo como `nextjs.ts`.

3. **Defina a Regra**:
   
    Adicione seus prompts dentro do arquivo recém-criado. Consulte as regras existentes para orientações de formatação. Certifique-se de que seus prompts sejam precisos, claros e úteis para os desenvolvedores.

    Seus prompts devem:
      - Ser precisos e relacionados à regra.
      - Ser redigidos de forma clara para ajudar os desenvolvedores a entender e usá-los facilmente.
      - Ser acionáveis, fornecendo etapas ou insights para resolver problemas comuns ou otimizar fluxos de trabalho.
      - Teste seus prompts: Antes de enviar, certifique-se de que seus prompts foram testados e funcionam como esperado no ambiente de desenvolvimento relevante. Isso garante que outros desenvolvedores possam confiar em suas contribuições :) .

#### 3. Adicionando Novos Prompts/Conteúdo a Regras Existentes

Se você deseja adicionar novos prompts a uma regra existente, siga estes passos:

1. **Encontre a Regra Existente**:

    Navegue até o diretório `src/data/rules/` e abra o arquivo relevante para a regra que você deseja atualizar. Por exemplo, se você está adicionando prompts para **Next.js**, abra `nextjs.ts`.

2. **Adicione Seus Novos Prompts**:

    Adicione seus novos prompts abaixo dos existentes. Certifique-se de que suas adições sejam testadas.

#### 4. Parâmetros Importantes em Arquivos de Regras

  Ao criar ou atualizar regras, certifique-se de incluir os seguintes parâmetros para consistência e clareza:

  1. **tags**: Adicione tags específicas de linguagem para categorizar a regra.

      ```
      tags: ["JavaScript", "Next.js"]

  2. **title**: Forneça um título apropriado que descreva a regra.

      ```
        title: "Melhores Práticas do Next.js"

  3. **slug**: Crie um slug único que reflita o propósito da regra.

      ```
        slug: "melhores-praticas-nextjs"

  4. **content**: Escreva o conteúdo do seu prompt aqui. Certifique-se de que seja claro, acionável e útil para os desenvolvedores. Seja conciso, mas forneça detalhes suficientes para ajudar o cursor ai a completar tarefas de forma eficaz...

      ```
        content: `seu prompt incrível`

  5. **author**: Inclua detalhes sobre você como contribuinte. Isso ajuda outros a reconhecer suas contribuições e permite que eles entrem em contato, se necessário.

  
     - **name**: Seu nome completo ou nome de usuário do GitHub.
     - **URL**: Um link para seu GitHub, Twitter, site ou qualquer outro perfil que você queira compartilhar. Isso é opcional, mas recomendado.
     - **avatar**: O caminho da URL para uma imagem ou avatar que o represente. Você pode usar uma foto de um serviço como Gravatar ou qualquer serviço de hospedagem de imagens.

### 5. Crie um PR


## Começando

Primeiro, execute o servidor de desenvolvimento:
