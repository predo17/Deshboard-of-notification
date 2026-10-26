## Dashboard de notícias

Aplicação criada com Vite, React, TypeScript e Zustand para consultar e apresentar notícias da NewsData.io. A interface inclui um cabeçalho com menu lateral, uma página inicial com notícias em destaque, uma lista de notícias e uma página para visualizar os detalhes de um artigo.

### Armazenamento e expiração das notícias

As notícias são mantidas na store do Zustand e persistidas no `localStorage` pelo middleware `persist`, usando a chave `news-storage`. Assim, os dados continuam disponíveis depois que o usuário fecha e reabre o navegador.

Junto com o estado persistido, o armazenamento personalizado grava um horário de expiração correspondente à próxima meia-noite no horário local do navegador. Quando o app é aberto, a persistência verifica esse prazo: se já tiver vencido, remove o valor salvo e a store começa sem as notícias antigas. Como o componente `News` chama `getNews` quando a lista está vazia, o app pode então buscar notícias atualizadas da API.

A expiração é verificada durante a leitura dos dados persistidos, normalmente ao iniciar ou recarregar o app. Se a página permanecer aberta durante a meia-noite, os dados que já estão na memória não são removidos naquele instante; serão verificados na próxima leitura do armazenamento. A lógica está em `src/store/ZustandNews.ts`, e a busca quando a lista está vazia está em `src/components/News.tsx`.
