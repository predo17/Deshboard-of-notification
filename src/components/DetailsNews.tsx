import { useNewsStore } from "@/store/ZustandNews";
import { BiCalendar } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";

type props = {
  title: string | undefined;
};
export default function DetailsNews({ title }: props) {
  const { news } = useNewsStore();

  const preview = news.find((n) => n.title === decodeURIComponent(title ?? ""));

  if (!preview) return <div>Noticia nao encontrada</div>;

  return (
    <section className="w-full max-w-5xl mx-auto p-4 md:p-6">
      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <GoGlobe className="text-base text-gray-500" />
              <span>{preview?.source_name}</span>
            </div>

            {preview?.source_icon && (
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0">
                <img
                  src={preview?.source_icon}
                  alt={preview?.source_name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
            {preview?.title}
          </h1>
          <div className="flex items-center gap-1.5 text-sm font-normal text-gray-500">
            <BiCalendar className="text-gray-500" />
            <time>
              {preview?.pubDate
                ? new Date(
                    preview.pubDate.replace(" ", "T"),
                  ).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </time>
          </div>
        </header>

        <div className="w-full aspect-video md:max-h-105 overflow-hidden rounded-lg">
          {preview?.image_url && (
            <img
              src={preview?.image_url}
              alt={preview?.title}
              className="w-full h-full object-cover"
            />
          )}
          {!preview?.image_url && (
            <div className="w-full h-full bg-gray-200 rounded-md" />
          )}
        </div>

        <hr className="w-12 my-1" />

        <p className="text-base sm:text-lg leading-relaxed font-normal">
          {preview?.description}
        </p>

        <a
          href={preview?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-start text-sm font-medium bg-blue-500 text-white px-4 py-2 rounded-md w-fit hover:bg-blue-600"
        >
          Leia mais
        </a>
      </article>
    </section>
  );
}
