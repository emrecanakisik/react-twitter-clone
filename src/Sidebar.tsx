import React, { useState } from "react";
import NavLink from "./components/NavLinks";
import { navIconList } from "./components/NavLinks";
import SidebarProfileBtn from "./components/SidebarProfileBtn";

const Sidebar = () => {
  const [activeBtn, setActiveBtn] = useState("Home");
  const navItemClick = (name: string) => {
    setActiveBtn(name);
  };
  return (
    <div className="sticky top-0 h-screen w-72 px-3 flex flex-col justify-between">
      <ul className="flex flex-col">
        {navIconList.map((icon) => (
          <NavLink
            name={icon.name}
            path={icon.path}
            color={icon.color}
            hoverBgColor={icon.hoverBgColor}
            activeBtn={activeBtn}
            navLinksClick={navItemClick}
          />
        ))}
        <button className=" bg-primary-base hover:bg-primary-dark transform transition-colors duration-300 py-3 my-4 w-11/12 rounded-full font-bold text-lg text-white-mat">
          Tweet
        </button>
      </ul>
      <SidebarProfileBtn />
    </div>
  );
};

export default Sidebar;
