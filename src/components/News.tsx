import { useNewsStore } from "@/store/ZustandNews";
import { useEffect } from "react";
import { IoGlobeOutline } from "react-icons/io5";

export default function News() {
  const { news, getNews, status, error } = useNewsStore();
  const articles = Array.isArray(news) ? news : [];

  useEffect(() => {
    if (articles.length === 0) getNews();
  }, [articles.length, getNews]);

  if (status === "loading") return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {articles.map((n) => (
        <li key={n.article_id}>
          <div className="relative flex items-center gap-4 mb-4.5 py-4 px-3.5 border border-[#64d8f7] rounded-lg">
            <div className="flex items-center">
              <span className="absolute top-3 right-3 border w-22 h-8.5 flex items-center justify-center text-[#02beed] font-medium span-shape oxanium">
                news
              </span>

              <div className="flex gap-9 items-center">
                <div className="h-50 w-90 border border-[#a5b3c1]">
                  <img
                    src={n.image_url || ""}
                    alt=""
                    className="h-full w-full "
                  />
                </div>
                <div className="w-full">
                  <div className="w-[95%] border-b border-[#a5b3c1] mt-2">
                    <h2 className="font-bold mb-2 oxanium max-w-90">
                      {" "}
                      {n.title}
                    </h2>
                    <p className=" line-clamp-3 mb-4.5 font-light text-sm segoeui text-[#a5b3c1]">
                      {n.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-1.5 mt-4 pr-2">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1.25 border border-[#64d7f798] rounded">
                        <IoGlobeOutline size={20} />
                      </div>
                      <h3 className="md:text-[15px]">{n.source_name || ""} </h3>
                    </div>
                    <div className=" border border-[#64d7f798] p-1.5 source-icon-shape">
                      <div className="h-8.5 w-8.5">
                        <img
                          src={n.source_icon || ""}
                          alt=""
                          className="h-full w-full rounded-full"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
