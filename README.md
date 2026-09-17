## Estrutura do projeto

Criei uma estrutura inicial com Vite + React + TypeScript para ter uma base moderna e rápida para desenvolvimento.

### 2. Definição do tipo de notícia
No arquivo [src/types/ArticleType.ts](src/types/ArticleType.ts), criei a interface `Article` para modelar os dados recebidos da API. Isso foi importante porque ajuda a manter o código mais seguro e previsível, evitando erros ao trabalhar com propriedades como `article_id`,`title`, `description`, `image_url`, `link`, `source_name` e `soucer_icon`