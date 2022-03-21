import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  adminIsAuthenticate,
  logout,
} from "../../store/actions/adminUserAction";

function Sidebar({ children }) {
  const dispatch = useDispatch();
  const adminReducer = useSelector((store) => store.adminUserReducer);

  useEffect(() => {
    dispatch(adminIsAuthenticate());
  }, [dispatch]);

  return (
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
      <input type="checkbox" id="menu-open" className="hidden" />
      <header
        className="bg-pink-800 text-gray-100 flex justify-between md:hidden"
        data-dev-hint="mobile menu bar"
      >
        <Link
          to="/admin"
          className="block p-4 text-white font-bold whitespace-nowrap truncate"
        >
          Monomousumi
        </Link>
        <label
          for="menu-open"
          id="mobile-menu-button"
          className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
        >
          <svg
            id="menu-open-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            id="menu-close-icon"
            className="h-6 w-6 transition duration-200 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </header>
      <aside
        id="sidebar"
        className="bg-pink-800 text-gray-100 md:w-60 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
        data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
      >
        <div
          className="flex flex-col space-y-6"
          data-dev-hint="optional div for having an extra footer navigation"
        >
          <Link
            to="/admin"
            className="text-white flex items-center space-x-2 px-4"
            title="Monomousumi"
          >
            <span className="text-2xl font-extrabold whitespace-nowrap truncate border-b-2 border-gray-100">
              Monomousumi
            </span>
          </Link>
          <div data-dev-hint="main navigation">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 hover:text-white"
                  : "flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              }
            >
              <i class="fa-solid fa-house"></i>
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/admin/articles"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 hover:text-white"
                  : "flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
              }
            >
              <i class="fa-solid fa-pen"></i>
              <span>Articles</span>
            </NavLink>
            {adminReducer.user.role === "admin" && (
              <>
                <NavLink
                  to="/admin/grade"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 hover:text-white"
                      : "flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                  }
                >
                  <i class="fa-solid fa-graduation-cap"></i>
                  <span>Grade Selection</span>
                </NavLink>
                <NavLink
                  to="/admin/announce"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center space-x-2 py-2 px-4 transition duration-200 bg-gray-700 hover:text-white"
                      : "flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                  }
                >
                  <i class="fa-solid fa-bullhorn"></i>
                  <span>Announce Result</span>
                </NavLink>
              </>
            )}
            <div
              className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white cursor-pointer"
              onClick={() => dispatch(logout())}
            >
              <i class="fa-solid fa-right-from-bracket"></i>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="py-6 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
