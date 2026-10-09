import { MenuButton } from "@/utils/Help";

interface props {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: props) {
  return (
    <header className="flex items-center justify-center p-4 bg-[#3F72AF] border-b border-gray-200 sticky top-0">
      <div className="w-full flex items-center gap-2 z-50">
        <MenuButton toggleSidebar={toggleSidebar} className="text-white" />
      </div>
    </header>
  );
}
