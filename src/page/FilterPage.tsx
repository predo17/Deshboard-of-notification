
import News from "@/components/News";
import { useNewsStore } from "@/store/ZustandNews";
import { normalizeFilterValue } from "@/utils/filter";
import { useSearchParams } from "react-router-dom";

export default function FilterPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";
  const normalizedQuery = normalizeFilterValue(query);
  const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const { news } = useNewsStore();
  const matchingArticles = normalizedQuery
    ? news.filter((article) => {
        const searchableText = [
          article.title,
          article.description,
          article.source_name,
          ...(Array.isArray(article.category) ? article.category : []),
        ]
          .filter(Boolean)
          .join(" ");
        const normalizedText = normalizeFilterValue(searchableText);

        return searchTerms.every((term) => normalizedText.includes(term));
      })
    : [];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10">
      <h1 className="text-2xl font-bold">
        {query ? `Resultados para "${query}"` : "Pesquisar notícias"}
      </h1>
      <News
        articles={matchingArticles}
      />
    </main>
  );
}
