import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiUser, FiLogIn } from "react-icons/fi";
const Header = () => {
  const signed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full max-w-7xl items-center justify-between px-4 mx-auto">
        <Link to="/">
          <img src={logo} alt="logo do site" />
        </Link>
        <Link to="/dashboard">
          <FiUser size={24} color="#000" />
        </Link>
      </header>
    </div>
  );
};

export default Header;
