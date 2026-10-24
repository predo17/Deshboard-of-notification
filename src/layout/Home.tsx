import type { Article } from "@/types/ArticleType";
import { LuZap } from "react-icons/lu";
import { Link } from "react-router-dom";

interface Props {
  featuredArticles: Article[];
}

export default function Home({ featuredArticles }: Props) {
  const [mainArticle, ...secondaryArticles] = featuredArticles;

  return (
    <main className="flex justify-center items-center h-full py-20">
      {mainArticle && (
        <div className="grid grid-cols-[1.5fr_0.9fr] w-full max-w-6xl gap-5">
          <Link
            to={`/details/${encodeURIComponent(mainArticle.title)}`}
            className="group relative w-full max-w-200 h-full min-h-100 overflow-hidden rounded-2xl bg-white shadow-md"
          >
            <img
              src={mainArticle.image_url}
              alt={mainArticle.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 z-0"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#080B12]/50 via-[#080B12]/15 to-[#080B12]/10" />

            <h1 className="absolute left-4 bottom-4 text-2xl font-bold text-white">
              {mainArticle.title}
            </h1>
          </Link>

          <aside className="rounded-2xl border border-white/10 bg-gray-50 shadow-md p-5 sm:p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Em destaque
                </p>
                <h2 className="mt-2 text-xl font-bold">Em alta agora</h2>
              </div>

              <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-400">
                <LuZap size={19} />
              </div>
            </div>

            <div className="divide-y divide-white/10">
              {secondaryArticles.map((article) => (
                <article
                  key={article.article_id}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex gap-4">
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wider text-cyan-400">
                        {article.source_name}
                      </p>

                      <h3 className="mt-2 text-sm font-semibold leading-6 transition hover:text-cyan-500">
                        <Link
                          to={`/details/${encodeURIComponent(article.title)}`}
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="mt-3 text-xs text-slate-500">
                        {article.pubDate}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
