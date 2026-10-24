## Dashboard de notícias

Aplicação criada com Vite, React, TypeScript e Zustand para consultar e apresentar notícias da NewsData.io. A interface inclui um cabeçalho com menu lateral, uma página inicial com notícias em destaque, uma lista de notícias e uma página para visualizar os detalhes de um artigo.

### Notícias em destaque na Home

A página inicial utiliza as notícias carregadas na store Zustand. Em `src/page/HomePage.tsx`, a constante `FEATURED_ARTICLES_COUNT` define quantas notícias serão separadas para a área de destaque. Atualmente, são selecionadas as quatro primeiras notícias:

- A primeira é apresentada como manchete principal.
- As outras três aparecem na seção **Em alta agora**.
- Os `article_id` das notícias destacadas são enviados para a lista, que as exclui para evitar que os mesmos artigos apareçam duas vezes na Home.

A seleção e a exclusão usam `article_id`, em vez do título. A Home e a lista compartilham os dados da store, sem precisar manter cópias separadas das notícias ou fazer uma chamada extra à API. Para alterar a quantidade de destaques, ajuste `FEATURED_ARTICLES_COUNT` em `src/page/HomePage.tsx`.

O arquivo `PLANO_SEPARACAO_NOTICIAS.txt` contém uma explicação complementar do problema e dessa abordagem.
