import React from "react";
import { NavLink } from "react-router-dom";

const GlobalNav = () => {
  const isActive = ({ isActive }) =>
    [
      isActive
        ? "  border-blue-500  "
        : " border-transparent hover:text-gray-800 hover:border-blue-500 ",
      "transition-colors text-gray-800 duration-200  transform  border-b-2 mx-1.5 sm:mx-6 ",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink to="/" className={isActive}>
          Home
        </NavLink>

        <NavLink to="basic-form" className={isActive}>
          Basic
        </NavLink>
      </div>
    </nav>
  );
};

export default GlobalNav;
