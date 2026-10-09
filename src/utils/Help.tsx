import { MdMenu } from "react-icons/md";

interface props {
  toggleSidebar: () => void
  className?: string;

}

export function MenuButton({ toggleSidebar, className: style }: props) {
  return (
    <>
      <button onClick={toggleSidebar} className="mt-1">
        <MdMenu className={`lg:text-4xl cursor-pointer ${style}`} />
      </button>
      <a href="/" className={`text-2xl font-bold ${style}`}>
        News Screen
      </a>
    </>
  );
}
