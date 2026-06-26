import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } =
    useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 px-6">
      <h1 className="text-xl font-semibold">
        B2B SaaS Workspace
      </h1>

      <div className="flex items-center gap-4">
        <span>
          {user?.name}
        </span>

        <button
          onClick={logout}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>

        <Link
          to="/workspace"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Workspace
        </Link>
      </div>
    </header>
  );
};

export default Navbar;