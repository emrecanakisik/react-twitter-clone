import React from "react";
import Barney from "../barney-stinson.jpg";

const SidebarProfileBtn = () => {
  return (
    <button className="profile-btn hover:bg-gray-200 transform transition-colors duration-300 flex justify-between items-center rounded-full p-2.5 my-3">
      <div className="phto-username flex items-center">
        <div id="photo" className="w-11 h-11 rounded-full overflow-hidden">
          <img src={Barney} alt="" className="w-full h-full" />
        </div>
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

export default SidebarProfileBtn;
