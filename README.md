## Dashboard de notícias

Aplicação criada com Vite, React, TypeScript e Zustand para consultar e apresentar notícias da NewsData.io. A interface inclui um cabeçalho com menu lateral, uma lista de notícias e uma página para visualizar os detalhes de um artigo.

## Arquivos documentados

### `src/App.tsx`

É o componente principal da aplicação. Ele configura as rotas com React Router, exibe o cabeçalho e o menu lateral e controla se a barra lateral está aberta. Quando a localização da rota muda, a página volta ao topo.

As rotas configuradas são:

- `/`: exibe a página principal de notícias.
- `/details/:title`: exibe a página de detalhes de uma notícia, usando o título como parâmetro.

### `src/layout/Header.tsx`

Renderiza o cabeçalho superior da aplicação. Ele recebe a função `toggleSidebar` e a repassa ao botão de menu, permitindo abrir ou fechar a barra lateral. Também utiliza o componente `MenuButton` para apresentar o ícone e o nome da aplicação.

### `src/components/Sidebar.tsx`

Renderiza o menu lateral que aparece sobre a página. Recebe as propriedades `isSidebarOpen` e `toggleSidebar` para controlar sua visibilidade. Quando o menu está aberto, bloqueia a rolagem do conteúdo de fundo; ao fechar ou desmontar o componente, remove esse bloqueio.

O menu pode ser fechado pelo botão ou clicando na camada escura ao redor. As opções de categorias são geradas a partir da lista exportada por `src/utils/filter.ts` e apontam para endereços no formato `/filter/:categoria`.

> **Observação:** no momento, `src/App.tsx` ainda não declara uma rota `/filter/:categoria`. As opções aparecem no menu, mas é necessário implementar essa rota para que a navegação por categoria exiba resultados filtrados.

### `src/utils/Help.tsx`

Define e exporta o componente `MenuButton`, reutilizado no cabeçalho e na barra lateral. Ele recebe uma função para alternar a exibição do menu e uma propriedade opcional para personalizar as classes visuais. O componente mostra o ícone de menu e o link com o nome “News Screen”.

### `src/components/DetailsNews.tsx`

Apresenta os detalhes de uma notícia. Recebe o título pela propriedade `title`, procura no store do Zustand o artigo correspondente e mostra uma mensagem caso não o encontre.

Quando o artigo existe, a página exibe a fonte, o ícone da fonte (quando disponível), o título, a data formatada em português, a imagem (ou um espaço reservado quando não há imagem), a descrição e um botão “Leia mais” que abre o artigo original em outra aba.

### `src/utils/filter.ts`

Exporta `filter_news`, uma lista de categorias usada pelo `Sidebar` para montar as opções do menu: Política, Tecnologia, Esportes, Cultura, Entretenimento, Economia e Saúde. A lista centraliza os nomes das categorias em um único lugar.

## Fluxo da interface

1. `App` monta o cabeçalho e a barra lateral e define as rotas da aplicação.
2. O cabeçalho e a barra lateral usam `MenuButton` para abrir e fechar o menu.
3. Na página inicial, a lista de notícias é carregada pelo store do Zustand e apresentada ao usuário.
4. Ao acessar a rota de detalhes de um artigo, `DetailsNews` localiza a notícia no store e apresenta suas informações.

## Configuração da API

Defina a URL da API no arquivo `.env`:

```env
VITE_NEWS_URL="https://newsdata.io/api/1/latest?apikey=SUA_CHAVE&country=br&language=pt"
```

O prefixo `VITE_` permite acessar essa variável no frontend por meio de `import.meta.env.VITE_NEWS_URL`. Após alterar o arquivo `.env`, reinicie o servidor de desenvolvimento.

> **Atenção:** variáveis `VITE_*` são incorporadas ao código enviado ao navegador. Para produção, mantenha a chave da API em um backend ou função serverless, em vez de expô-la no frontend.

## Como executar

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Comandos adicionais:

```bash
pnpm build   # verifica os tipos e cria o build de produção
pnpm lint    # executa o ESLint
pnpm preview # visualiza localmente o build de produção
```
