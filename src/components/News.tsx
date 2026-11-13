import { useNewsStore } from "@/store/ZustandNews";
import { useEffect } from "react";
import { GoGlobe } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import type { Article } from "@/types/ArticleType";

interface Props {
  excludeArticleIds?: number[];
  articles?: Article[];
}

export default function News({
  excludeArticleIds = [],
  articles: filteredArticles,
}: Props) {
  const { news, getNews, status } = useNewsStore();
  const allArticles = Array.isArray(news) ? news : [];
  const articlesToShow = (filteredArticles ?? allArticles).filter(
    (article) => !excludeArticleIds.includes(article.article_id),
  );

  const { category } = useParams();

  useEffect(() => {
    if (allArticles.length === 0 && status === "idle") getNews();
  }, [allArticles.length, getNews, status]);

  return (
    <div className="flex flex-col w-full max-w-4xl gap-5">
      {articlesToShow.map((n) => (
        <Link
          to={
            category
              ? `/${encodeURIComponent(category)}/noticia/${encodeURIComponent(n.title)}`
              : `/noticia/${encodeURIComponent(n.title)}`
          }
          aria-label={`Abrir noticia ${n.title}`}
          key={n.article_id}
          className="flex gap-4 p-2 bg-white rounded-md shadow-md"
        >
          <div className="w-full max-w-60 h-50 ">
            {n.image_url && (
              <img
                src={n.image_url}
                alt={n.title}
                className="w-full h-full object-cover rounded-md"
              />
            )}

            {!n.image_url && (
              <div className="w-full h-full bg-gray-200 rounded-md" />
            )}
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-1 flex-col gap-2 pr-8">
              <h2 className="font-bold text-[1.1rem]">{n.title}</h2>
              <p className="text-[1rem] line-clamp-4 ">{n.description}</p>
            </div>

            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <GoGlobe />
                <p className="text-sm">{n.source_name}</p>
              </div>
              {n.source_icon && (
                <div className="w-8 h-8">
                  <img
                    src={n.source_icon}
                    alt={n.source_name}
                    className="w-full h-full rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
