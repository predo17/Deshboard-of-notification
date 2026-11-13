import ChagerFilter from "@/components/ChagerFilter";
import { MenuButton } from "@/utils/Help";

interface props {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: props) {
  return (
    <header className="flex items-center justify-center p-4 bg-[#3F72AF] sticky top-0 z-50">
      <div className="w-full flex items-center gap-2">
        <MenuButton toggleSidebar={toggleSidebar} className="text-white" />
      </div>

      <div>
        <ChagerFilter />
      </div>

    </header>
  );
}
