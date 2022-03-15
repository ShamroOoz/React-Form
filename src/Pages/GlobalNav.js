import React from "react";
import { NavLink } from "react-router-dom";
import { AnnotationIcon } from "@heroicons/react/solid";

const GlobalNav = () => {
  const isActive = ({ isActive }) =>
    [
      isActive ? "mr-5 hover:text-gray-500" : "mr-5 hover:text-indigo-500",
      isActive ? "text-indigo-500" : null,
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <AnnotationIcon className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />
          <span class="ml-3 text-xl">AllAbout Form</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink className={isActive} to="/">
            First Link
          </NavLink>
          <NavLink className={isActive} to="/">
            Second Link
          </NavLink>
          <NavLink className={isActive} to="/">
            Third Link
          </NavLink>
          <NavLink className={isActive} to="/">
            Fourth Link
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default GlobalNav;
