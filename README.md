## Dashboard de notificações

Projeto criado com Vite, React, TypeScript e Zustand. A aplicação consulta a API da NewsData.io e exibe as notícias recebidas na tela.

## Como o fluxo funciona

1. O componente `NewsPage` renderiza o componente `News`.
2. Quando `News` é montado, o `useEffect` chama `getNews` se ainda não houver notícias carregadas.
3. `getNews`, localizado no store do Zustand, faz uma requisição `fetch` para a URL definida em `VITE_NEWS_URL`.
4. Enquanto a requisição está em andamento, o estado `status` recebe o valor `loading` e a tela mostra `Carregando...`.
5. Se a resposta for bem-sucedida, os itens de `data.results` são armazenados em `news` e o status passa para `success`.
6. Se a API responder com erro ou em um formato inválido, o status passa para `error` e a mensagem é exibida na tela.
7. Com os dados carregados, `News` percorre o array de artigos e renderiza título, descrição, imagem, fonte e ícone da fonte.

## Estrutura dos arquivos documentados

### `src/types/ArticleType.ts`

Define a interface `Article`, que descreve o formato esperado para cada notícia recebida:

- `article_id`: identificador do artigo, usado também como chave do elemento React.
- `title`: título da notícia.
- `description`: descrição ou resumo.
- `image_url`: endereço da imagem principal.
- `link`: endereço da notícia original.
- `source_name`: nome da fonte da notícia.
- `source_icon`: endereço do ícone da fonte.

Essa tipagem ajuda o TypeScript a identificar propriedades inválidas durante o desenvolvimento.

### `src/store/ZustandNews.ts`

Centraliza os dados e o estado da requisição usando Zustand.

O tipo `NewsState` define:

- `news`: lista de artigos carregados.
- `getNews`: função assíncrona responsável pela chamada à API.
- `status`: situação atual da requisição (`idle`, `loading`, `success` ou `error`).
- `error`: mensagem do erro, quando a requisição falha, ou `null` quando não há erro.

Antes da chamada, o store limpa o erro anterior e define `status` como `loading`. Depois, valida dois pontos da resposta:

1. `response.ok` precisa ser verdadeiro. Caso contrário, uma mensagem com o status HTTP é gerada, como `A API retornou o erro 401`.
2. `data.results` precisa ser um array. Isso evita que a aplicação tente renderizar uma estrutura inesperada.

Quando ocorre uma exceção, o `catch` limpa as notícias, define `status` como `error` e salva uma mensagem compreensível em `error`.

### `src/components/News.tsx`

É o componente responsável por buscar e apresentar as notícias.

O `useNewsStore` fornece `news`, `getNews`, `status` e `error`. O `useEffect` executa a busca quando a lista está vazia. A interface possui três estados principais:

- `loading`: mostra o texto de carregamento.
- `error`: mostra a mensagem retornada pelo store.
- sucesso: lista os artigos dentro de elementos `<li>`.

Os valores opcionais das imagens usam `|| ""` para evitar que uma URL ausente seja enviada diretamente ao atributo `src`.

### `src/page/NewsPage.tsx`

Funciona como uma página simples da aplicação e encapsula o componente `News`. Essa separação permite que a página receba futuramente outros componentes, filtros ou controles sem concentrar tudo em um único arquivo.

## Configuração da API

A URL é definida no arquivo `.env`:

```env
VITE_NEWS_URL="https://newsdata.io/api/1/latest?apikey=SUA_CHAVE&country=br&language=pt"
```

O prefixo `VITE_` permite que a variável seja lida no código do frontend através de `import.meta.env.VITE_NEWS_URL`. Depois de alterar o `.env`, é necessário reiniciar o servidor de desenvolvimento.

Os parâmetros usados na URL são:

- `apikey`: chave de autenticação da NewsData.io.
- `country=br`: filtra notícias do Brasil.
- `language=pt`: filtra notícias em português.

Uma resposta `401 Unauthorized` normalmente indica que a chave está ausente, inválida, expirada ou foi enviada com um parâmetro incorreto. Nesse projeto, a chave precisa estar associada ao parâmetro `apikey`.

> Atenção: variáveis `VITE_*` são incorporadas ao código enviado para o navegador. Portanto, a chave ficará visível para usuários da aplicação. Para produção, o ideal é fazer a requisição em um backend ou função serverless e manter a chave somente no servidor.

## Como executar

Instale as dependências e inicie o servidor:

```bash
pnpm install
pnpm dev
```

Outros comandos disponíveis:

```bash
pnpm build   # verifica os tipos e cria o build de produção
pnpm lint    # executa o ESLint
pnpm preview # visualiza o build de produção localmente
```