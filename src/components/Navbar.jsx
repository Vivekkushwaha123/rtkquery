import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "./Button";

const style = {
  navlink:
    "block font-black py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  text-lg",

  login:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
};

const Navbar = ({ isLoggined }) => {
  const navigate = useNavigate();
  console.log();

  useEffect(() => {
    if (!isLoggined && window.location.href.split("/").includes("register")) {
      navigate("/register");
    } else if (
      window.location.href.split("/").includes("register") &&
      !isLoggined
    ) {
      navigate("/login");
    }
  }, [isLoggined, navigate]);
  return (
    <>
      <nav className="bg-white px-1 sm:px-4 py-1 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Library Management
            </span>
          </NavLink>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            {isLoggined && (
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink to="/" className={style.navlink} aria-current="page">
                    All Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addbook" className={style.navlink}>
                    Add Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/issuedbook" className={style.navlink}>
                    Issued Book
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/issuebook" className={style.navlink}>
                    Issue Book
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
