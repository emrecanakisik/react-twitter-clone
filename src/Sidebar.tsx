import React from "react";
import NavLink from "./components/NavLinks";
import { navIconList } from "./components/NavLinks";

const SidebarProfileBtn = () => {
  return (
    <button className="profile-btn hover:bg-gray-200 transform transition-colors duration-300 flex justify-between items-center rounded-full p-2.5 my-3">
      <div className="phto-username flex items-center">
        <div
          id="photo"
          className="w-11 h-11 rounded-full border border-red-700"
        ></div>
        <div className="name-username flex flex-col items-start ml-3">
          <h1 className="font-semibold text-base">name</h1>
          <h2 className="text-base text-gray-600 font-normal">@username</h2>
        </div>
      </div>
      <svg width="19" height="19" viewBox="0 0 24 24">
        <g>
          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </g>
      </svg>
    </button>
  );
};

const Sidebar = () => {
  return (
    <div className="border-solid border w-72 px-3 border-indigo-600 flex flex-col justify-between">
      <ul className="flex flex-col">
        {navIconList.map((icon) => (
          <NavLink
            name={icon.name}
            path={icon.path}
            color={icon.color}
            hoverBgColor={icon.hoverBgColor}
          />
        ))}
        <button className=" bg-primary-base hover:bg-primary-dark transform transition-colors duration-300 py-3 my-4 w-11/12 rounded-full font-bold text-lg text-white">
          Tweet
        </button>
      </ul>
      <SidebarProfileBtn />
    </div>
  );
};

export default Sidebar;
