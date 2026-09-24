import type { Article } from "@/types/ArticleType";
import { create } from "zustand";
// import { persist } from "zustand/middleware";

type NewsState = {
  news: Article[];
  getNews: () => Promise<void>;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

export const useNewsStore = create<NewsState>()((set) => ({
  news: [],
  status: "idle",
  error: null,
  getNews: async () => {
    set({
      status: "loading",
      error: null,
    });
    try {
      const response = await fetch(import.meta.env.VITE_NEWS_URL);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || `A API retornou o erro ${response.status}`,
        );
      }

      if (!Array.isArray(data?.results)) {
        throw new Error("A API retornou notícias em um formato inválido");
      }

      set({
        news: data.results,
        status: "success",
      });
    } catch (err) {
      set({
        news: [],
        status: "error",
        error:
          err instanceof Error
            ? err.message
            : "Ops, não conseguimos carregar as notícias",
      });
    }
  },
}));

// persist(
//   (set) => ({
//     news: [],
//     status: "idle",
//     error: null,
//     getNews: async () => {
//       set({
//         status: "loading",
//         error: null,
//       });
//       try {
//         const response = await fetch(import.meta.env.VITE_NEWS_URL);
//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data?.message || `A API retornou o erro ${response.status}`,
//           );
//         }

//         if (!Array.isArray(data?.results)) {
//           throw new Error("A API retornou notícias em um formato inválido");
//         }

//         set({
//           news: data.results,
//           status: "success",
//         });
//       } catch (err) {
//         set({
//           news: [],
//           status: "error",
//           error:
//             err instanceof Error
//               ? err.message
//               : "Ops, não conseguimos carregar as notícias",
//         });
//       }
//     },
//   }),
//   {
//     name: "news-storage",
//   },
// ),
