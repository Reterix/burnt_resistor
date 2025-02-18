import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  return (
    <header className="absolute z-999 p-8 cursor-pointer">
      <img src="src/assets/logo.png" className="h-8" onClick={() => nav("/")} />
    </header>
  );
};

export default Header;
