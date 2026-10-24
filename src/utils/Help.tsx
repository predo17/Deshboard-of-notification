import { MdMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface props {
  toggleSidebar: () => void;
  closeSidebar?: () => void;
  className?: string;
}

export function MenuButton({
  toggleSidebar,
  closeSidebar,
  className: style,
}: props) {
  const navigate = useNavigate();

  function handleGoBack() {
    closeSidebar?.();
    navigate(-1);
  }

  return (
    <>
      <button onClick={toggleSidebar} className="mt-1">
        <MdMenu className={`lg:text-4xl cursor-pointer ${style}`} />
      </button>
      <button onClick={handleGoBack} className={`text-2xl font-bold ${style}`}>
        News Screen
      </button>
    </>
  );
}
