import News from "@/components/News";
import Home from "@/layout/Home";
import { useNewsStore } from "@/store/ZustandNews";

// const FEATURED_ARTICLES_COUNT = 3;

export default function HomePage() {
  const { news } = useNewsStore();
  const featuredArticles = news.slice(0, 3);
  const featuredArticleIds = featuredArticles.map(
    (article) => article.article_id,
  );

  return (
    <>
      <Home featuredArticles={featuredArticles} />
      <div className="w-full max-w-7xl mx-auto pl-15">
        <News excludeArticleIds={featuredArticleIds} />
      </div>
    </>
  );
}
