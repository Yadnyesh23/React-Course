import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="shadow-lg sticky z-50 top-0">
        <nav className="bg-black border-b border-blue-900 px-4 lg:px-6 py-3">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
            <Link to="/" className="flex items-center">
              <img src="#" className="mr-3 h-12" alt="Logo" />
            </Link>

            <div className="flex items-center lg:order-2">
              <NavLink to='/login' className="text-gray-300 hover:text-blue-400 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition">
                Log in
              </NavLink>

              <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 transition">
                Get started
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-gray-300 ${
                        isActive ? "text-blue-400" : "text-gray-300"
                      } hover:text-blue-400 transition`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-gray-300 ${
                        isActive ? "text-blue-400" : "text-gray-300"
                      } hover:text-blue-400 transition`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `text-gray-300 ${
                        isActive ? "text-blue-400" : "text-gray-300"
                      } hover:text-blue-400 transition`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
