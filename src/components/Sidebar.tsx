import { filter_news } from "@/utils/filter";
import { MenuButton } from "@/utils/Help";
import { useEffect } from "react";

interface props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}
export default function Sidebar({ isSidebarOpen, toggleSidebar }: props) {
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isSidebarOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isSidebarOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out"
        onClick={toggleSidebar}
      />

      <aside
        className={`fixed top-0 left-0 w-60 h-full z-50 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex items-center gap-2 p-4 text-black">
          <MenuButton
            toggleSidebar={toggleSidebar}
            className="text-[#3F72AF]"
          />
        </div>

        <ul className="flex flex-col gap-2 p-4">
          {filter_news.map((n, index) => (
            <li key={index}>
              <a
                href={`/filter/${n}`}
                className="block p-2 rounded hover:bg-gray-100 transition-colors"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
