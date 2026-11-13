import { useState, type FormEvent } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function ChagerFilter() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const query = search.trim();
    if (!query) return;

    navigate(`/busca?q=${encodeURIComponent(query)}`);
  }

  return (
    <form className="relative w-full flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquisar notícias..."
        className="flex-1 w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200 tracking-wide"
        aria-label="Pesquisar notícias"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        aria-label="Buscar"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <BiSearch className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  );
}
