
// import {
//   Search,
//   Menu,
//   ArrowUpRight,
//   Clock3,
//   Zap,
//   Radio,
//   ChevronRight,
// } from "lucide-react";

import { LuArrowUpRight, LuChevronRight, LuClock3, LuMenu, LuRadio, LuSearch, LuZap } from "react-icons/lu";

const trendingNews = [
  {
    id: 1,
    category: "INTELIGÊNCIA ARTIFICIAL",
    title: "A nova geração de IA está transformando a forma como trabalhamos",
    time: "Há 12 min",
  },
  {
    id: 2,
    category: "ESPAÇO",
    title: "Novas descobertas ampliam os limites da exploração espacial",
    time: "Há 28 min",
  },
  {
    id: 3,
    category: "SEGURANÇA DIGITAL",
    title: "O futuro da proteção de dados na era da hiperconectividade",
    time: "Há 46 min",
  },
];

const latestNews = [
  {
    id: 1,
    category: "TECNOLOGIA",
    title: "O avanço dos computadores está mudando o cenário tecnológico",
    source: "Tech Journal",
    time: "Há 15 min",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "CIÊNCIA",
    title: "Pesquisadores exploram novas fronteiras da inovação científica",
    source: "Science Daily",
    time: "Há 32 min",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "MUNDO",
    title: "Como as grandes cidades estão se preparando para o futuro",
    source: "Global News",
    time: "Há 51 min",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Todas",
  "Tecnologia",
  "Ciência",
  "Mundo",
  "Economia",
  "Games",
];

export default function Test() {
  return (
    <main className="min-h-screen bg-[#080B12] text-slate-100">
      {/* Cabeçalho */}
      <header className="border-b border-white/10 bg-[#080B12]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <LuZap size={23} />
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight">
                NEXUS<span className="text-cyan-400">.</span>
              </h1>
              <p className="text-[9px] tracking-[0.25em] text-slate-500">
                NEWS NETWORK
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#destaque" className="text-cyan-400">
              Início
            </a>
            <a href="#ultimas" className="transition hover:text-white">
              Últimas notícias
            </a>
            <a href="#categorias" className="transition hover:text-white">
              Categorias
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Pesquisar notícias"
              className="rounded-xl border border-white/10 p-2.5 transition hover:border-cyan-400/50"
            >
              <LuSearch size={19} />
            </button>

            <button
              aria-label="Abrir menu"
              className="rounded-xl border border-white/10 p-2.5 md:hidden"
            >
              <LuMenu size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        {/* Barra de informações */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <LuRadio size={15} className="text-cyan-400" />
            Central de notícias
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            INFORMAÇÃO EM TEMPO REAL
          </div>
        </div>

        {/* Manchete + Em alta */}
        <section
          id="destaque"
          className="grid gap-6 lg:grid-cols-[1.7fr_0.8fr]"
        >
          {/* Manchete principal */}
          <article className="group relative min-h-105 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 sm:min-h-125">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85"
              alt="Planeta Terra iluminado por redes digitais"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#080B12] via-[#080B12]/55 to-[#080B12]/10" />

            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-black/40 px-3 py-2 text-xs font-bold text-cyan-300 backdrop-blur-md sm:left-7 sm:top-7">
              <LuZap size={14} />
              DESTAQUE DO DIA
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Tecnologia • Futuro
              </p>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                O futuro da tecnologia está mais próximo do que imaginamos
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Descubra as tendências e inovações que estão redefinindo
                a maneira como vivemos, trabalhamos e nos conectamos.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <a
                  href="#ultimas"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explorar notícia
                  <LuArrowUpRight size={17} />
                </a>

                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <LuClock3 size={14} />
                  5 min de leitura
                </span>
              </div>
            </div>
          </article>

          {/* Notícias em alta */}
          <aside className="rounded-2xl border border-white/10 bg-[#0D111B] p-5 sm:p-6">
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
              {trendingNews.map((news, index) => (
                <article key={news.id} className="py-5 first:pt-0 last:pb-0">
                  <div className="flex gap-4">
                    <span className="text-3xl font-black text-white/15">
                      0{index + 1}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wider text-cyan-400">
                        {news.category}
                      </p>

                      <h3 className="mt-2 text-sm font-semibold leading-6 transition hover:text-cyan-300">
                        <a href="#ultimas">{news.title}</a>
                      </h3>

                      <p className="mt-3 text-xs text-slate-500">
                        {news.time}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {/* Categorias */}
        <section id="categorias" className="mt-14">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Explore
            </p>
            <h2 className="mt-2 text-2xl font-bold">Navegue por assuntos</h2>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm transition ${
                  index === 0
                    ? "border-cyan-400 bg-cyan-400 text-slate-950"
                    : "border-white/10 bg-white/3 text-slate-400 hover:border-cyan-400/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Últimas notícias */}
        <section id="ultimas" className="mt-12">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Fique por dentro
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Últimas notícias
              </h2>
            </div>

            <a
              href="#ultimas"
              className="flex shrink-0 items-center gap-1 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              Ver todas
              <LuChevronRight size={17} />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D111B] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-bold tracking-wider text-cyan-300 backdrop-blur">
                    {news.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{news.source}</span>
                    <span>•</span>
                    <span>{news.time}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold leading-7 transition group-hover:text-cyan-300">
                    <a href="#destaque">{news.title}</a>
                  </h3>

                  <a
                    href="#destaque"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400"
                  >
                    Ler matéria
                    <LuArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Rodapé */}
        <footer className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm font-bold tracking-widest">
              NEXUS<span className="text-cyan-400">.</span>
              <span className="ml-3 font-normal tracking-normal text-slate-500">
                Informação além do agora.
              </span>
            </p>

            <p className="text-xs text-slate-600">
              Projeto demonstrativo • Notícias fictícias
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}