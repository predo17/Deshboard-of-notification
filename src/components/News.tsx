import { useNewsStore } from "@/store/ZustandNews";
import { useEffect } from "react";
import { GoGlobe } from "react-icons/go";

export default function News() {
  const { news, getNews, status, error } = useNewsStore();
  const articles = Array.isArray(news) ? news : [];

  useEffect(() => {
    if (articles.length === 0) getNews();
  }, [articles.length, getNews]);

  if (status === "loading") return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col w-full max-w-4xl gap-5">
      {articles.map((n) => (
        <div
          key={n.article_id}
          className="flex gap-4 p-2 bg-white rounded-md shadow-md"
        >
          <div className="w-full max-w-60 h-50 ">
            <img
              src={n.image_url}
              alt={n.title}
              className="w-full h-full object-cover rounded-md"
            />
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
              <div className="w-8 h-8">
                <img
                  src={n.source_icon}
                  alt={n.source_name}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
