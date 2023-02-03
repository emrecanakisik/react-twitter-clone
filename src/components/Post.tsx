import React, { FC } from "react";
import barney from "../barney-stinson.jpg";

type post = {
  displayName?: string;
  username?: string;
  timestamp?: any;
  textContent?: string;
};

type postIcon = {
  path: string;
  hoverFillColor: string;
  hoverTextColor: string;
  hoverBgColor: string;
  sideNumValue?: number;
};

const PostIcon: FC<postIcon> = ({
  path,
  hoverFillColor,
  hoverBgColor,
  sideNumValue,
  hoverTextColor,
}) => {
  return (
    <button className="group flex items-center">
      <svg
        width="31"
        height="31"
        viewBox="0 0 24 24"
        className={`fill-gray-dark right-2 top-2 p-1.5 mr-1 mt-0.5 rounded-full ${hoverFillColor} ${hoverBgColor} duration-150`}
      >
        <g>
          <path d={path}></path>
        </g>
      </svg>
      <span
        className={`text-xs font-medium text-gray-600 ${hoverTextColor} duration-150`}
      >
        {sideNumValue ? sideNumValue + "K" : ""}
      </span>
    </button>
  );
};

const post: FC<post> = ({ displayName, username, timestamp, textContent }) => {
  return (
    <div className="border flex flex-col px-2">
      <div className="flex">
        <img
          src={barney}
          alt=""
          className="w-12 h-12 ml-1.5 mr-2 mt-1 rounded-full overflow-hidden"
        />
        <div className="content flex-1">
          <div className="dname-uname-tstmp-icon flex items-center justify-between w-full">
            <div className="dname-uname-tstmp flex items-center">
              <h1 className="px-0.5 font-medium">{displayName}</h1>
              <span className="px-0.5 text-gray-600">@{username}</span>
              <span className="w-0.5 h-0.5 mx-0.5 bg-gray-500 rounded-full"></span>
              <span className="px-0.5 text-gray-600">{timestamp}</span>
            </div>
            <button>
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                className="fill-gray-dark right-2 top-2 p-2 mt-0.5 rounded-full hover:fill-primary-base hover:bg-primary-light duration-150"
              >
                <g>
                  <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                </g>
              </svg>
            </button>
          </div>
          <p className="text-gray-800 leading-5">{textContent}</p>
        </div>
      </div>
      <div className="bottom-icons flex items-center justify-evenly px-2 pb-1 left-0">
        <PostIcon
          hoverTextColor="group-hover:text-blue-400"
          hoverFillColor="group-hover:fill-blue-400"
          hoverBgColor="group-hover:bg-blue-50"
          sideNumValue={22}
          path="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
        />
        <PostIcon
          hoverTextColor="group-hover:text-green-500"
          hoverFillColor="group-hover:fill-green-500"
          hoverBgColor="group-hover:bg-green-50"
          sideNumValue={22}
          path="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
        />
        <PostIcon
          hoverTextColor="group-hover:text-pink-600"
          hoverFillColor="group-hover:fill-pink-600"
          hoverBgColor="group-hover:bg-pink-50"
          sideNumValue={22}
          path="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
        />
        <PostIcon
          hoverTextColor="group-hover:text-blue-400"
          hoverFillColor="group-hover:fill-blue-400"
          hoverBgColor="group-hover:bg-blue-50"
          sideNumValue={22}
          path="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
        />
        <PostIcon
          hoverTextColor="group-hover:text-blue-400"
          hoverFillColor="group-hover:fill-blue-400"
          hoverBgColor="group-hover:bg-blue-50"
          path="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
        />
      </div>
    </div>
  );
};

export default post;
