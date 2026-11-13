
import News from "@/components/News";
import { useNewsStore } from "@/store/ZustandNews";
import { getCategoryLabel, toCategorySlug } from "@/utils/filter";
import { useParams } from "react-router-dom";

export default function CategoryNews() {
  const { category = "" } = useParams();
  const { news } = useNewsStore();
  const matchingArticles = news.filter(
    (article) =>
      Array.isArray(article.category) &&
      article.category.some(
        (articleCategory) => toCategorySlug(articleCategory) === category,
      ),
  );
  const categoryName =
    matchingArticles[0]?.category.find(
      (articleCategory) => toCategorySlug(articleCategory) === category,
    ) ?? category.replace(/-/g, " ");

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10">
      <h1 className="text-2xl font-bold">
        Notícias: {getCategoryLabel(categoryName)}
      </h1>
      <News
        articles={matchingArticles}
      />
    </main>
  );
}
