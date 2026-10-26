import type { Article } from "@/types/ArticleType";
import { create } from "zustand";
import { createJSONStorage, persist, type StateStorage } from "zustand/middleware";

type NewsState = {
  news: Article[];
  getNews: () => Promise<void>;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

const storageUntilMidnight: StateStorage = {
  getItem: (name) => {
    const serialized = localStorage.getItem(name);
    if (serialized === null) return null;

    const stored: unknown = JSON.parse(serialized);
    if (
      typeof stored !== "object" ||
      stored === null ||
      !("value" in stored) ||
      typeof stored.value !== "string" ||
      !("expiresAt" in stored) ||
      typeof stored.expiresAt !== "number"
    ) {
      localStorage.removeItem(name);
      return null;
    }

    if (Date.now() >= stored.expiresAt) {
      localStorage.removeItem(name);
      return null;
    }

    return stored.value;
  },
  setItem: (name, value) => {
    const expiresAt = new Date();
    expiresAt.setHours(24, 0, 0, 0);

    localStorage.setItem(
      name,
      JSON.stringify({ value, expiresAt: expiresAt.getTime() }),
    );
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useNewsStore = create<NewsState>()(
  persist(
    (set) => ({
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
          const validNews = data.results.filter(
            (item: Article) =>
              typeof item.description === "string" &&
              item.description.trim() !== "",
          );
          set({
            news: validNews,
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
    }),
    {
      name: "news-storage",
      storage: createJSONStorage(() => storageUntilMidnight),
    },
  ),
);
