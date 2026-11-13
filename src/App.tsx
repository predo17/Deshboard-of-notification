import { Routes, Route, useLocation } from "react-router-dom";
import NewsPageDatails from "./page/NewsPageDatails";
import { useEffect, useState } from "react";
import Header from "./layout/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./page/HomePage";
import Footer from "./layout/Footer";
import { useNewsStore } from "./store/ZustandNews";
import CategoryNews from "./page/CategoryNews";
import FilterPage from "./page/FilterPage";

function LoadApp() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebarOpen = () => setIsSidebarOpen(!isSidebarOpen);

  const { getNews, error, status } = useNewsStore();

  if (status === "loading") {
    return <div className="w-screen h-screen bg-white" />;
  }
  if (status === "error") {
    return <div role="alert" className="rounded-md bg-red-50 p-4 text-red-700">
          <p>Não foi possível carregar as notícias: {error}</p>
          <button
            type="button"
            className="mt-2 underline"
            onClick={() => getNews()}
          >
            Tentar novamente
          </button>
        </div>;
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebarOpen}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticia/:title" element={<NewsPageDatails />} />
        <Route path="/:category" element={<CategoryNews />} />
        <Route path="/:category/noticia/:title" element={<NewsPageDatails />} />
        <Route path="/busca" element={<FilterPage />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return <LoadApp />;
}

export default App;
