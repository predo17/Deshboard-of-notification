## Dashboard de notícias

Aplicação desenvolvida com Vite, React, TypeScript e Zustand para consultar e apresentar notícias da NewsData.io. A interface reúne notícias em destaque, listagem de artigos, navegação por categorias, pesquisa e visualização dos detalhes de cada notícia.

## Funcionalidades

- **Página inicial:** destaca até três notícias no desktop e apresenta as demais na lista abaixo.
- **Categorias:** o menu lateral cria as opções a partir das categorias presentes nos artigos carregados. Ao selecionar uma categoria, são exibidas as notícias correspondentes.
- **Pesquisa:** o campo no cabeçalho procura notícias pelo título, descrição, fonte e categoria. A pesquisa ignora diferenças de acentuação e maiúsculas/minúsculas e considera todos os termos digitados.
- **Detalhes da notícia:** apresenta fonte, data, imagem, descrição e um link para abrir a publicação original.
- **Cache local com expiração:** o Zustand persiste as notícias no `localStorage` e define a expiração para a próxima meia-noite, no horário local do navegador. Ao ler dados vencidos, o armazenamento é limpo; se a lista estiver vazia, a aplicação pode buscar novamente na API. Isso evita chamadas repetidas durante o período e ajuda a preservar a cota gratuita da API.
- **Estados da API:** durante o carregamento, a aplicação exibe uma tela de espera; se ocorrer um erro, apresenta a mensagem e permite tentar novamente.

## Organização do código

### Aplicação e navegação

- `src/App.tsx`: configura as rotas, monta cabeçalho, menu lateral e rodapé, rola a página para o topo quando a rota muda e apresenta os estados de carregamento e erro.
- `src/page/HomePage.tsx` e `src/layout/Home.tsx`: montam a página inicial e a área de notícias em destaque.
- `src/page/CategoryNews.tsx`: seleciona e exibe artigos da categoria indicada na rota.
- `src/page/FilterPage.tsx`: lê o termo de pesquisa da URL e filtra os artigos carregados.
- `src/page/NewsPageDatails.tsx` e `src/components/DetailsNews.tsx`: localizam e apresentam os detalhes de um artigo.
- `src/layout/Header.tsx` e `src/components/Sidebar.tsx`: implementam o cabeçalho, o campo de pesquisa e a navegação lateral.
- `src/components/ChagerFilter.tsx`: controla o campo de pesquisa e navega para `/busca?q=...` ao enviar um termo.
- `src/layout/Footer.tsx`: apresenta o rodapé da aplicação.
- `src/utils/Help.tsx`: fornece o botão reutilizável de menu e navegação.

### Dados e utilitários

- `src/store/ZustandNews.ts`: mantém o estado das notícias, consulta a API, valida a resposta e persiste os dados no `localStorage` com expiração à meia-noite.
- `src/components/News.tsx`: mostra os artigos em cartões e direciona cada item para sua página de detalhes. Também permite receber uma lista filtrada e excluir artigos já exibidos em destaque.
- `src/types/ArticleType.ts`: define o formato tipado dos artigos, incluindo categorias, fonte, imagem e data.
- `src/utils/filter.ts`: normaliza texto para pesquisa, gera identificadores de rota para categorias e converte nomes conhecidos para rótulos em português.

## Rotas

- `/`: página inicial.
- `/busca?q=termo`: resultados de pesquisa.
- `/:category`: artigos da categoria selecionada.
- `/noticia/:title`: detalhes de uma notícia aberta na página inicial.
- `/:category/noticia/:title`: detalhes de uma notícia acessada dentro de uma categoria.
