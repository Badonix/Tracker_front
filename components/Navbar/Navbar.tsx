import Link from "next/link";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { isLoggedIn, handleLogout, currentRoute } = useNavbar();
  return (
    <nav className="fixed w-full top-0 left-0 shadow-lg navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-100 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="" href="#">
                About
              </Link>
            </li>
            <li>
              <Link href="#">Docs</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn text-xl btn-ghost hover:bg-transparent">
          Tracker
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="" href="#">
              About
            </Link>
          </li>
          <li>
            <Link href="#">Docs</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {isLoggedIn ? (
          <>
            <Link
              href="/dashboard"
              className={`btn btn-primary mr-4 ${currentRoute != "/dashboard" && "btn-outline"}`}
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} className="btn mr-4">
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link href="/register" className="btn">
              Register
            </Link>
            <Link href="/login" className="btn">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
