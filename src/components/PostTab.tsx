import React, { FC } from "react";

type PostTabTitle = {
  title: string;
  id: string;
};

const PostTab: FC<PostTabTitle> = ({ title, id }) => {
  return (
    <button
      id={id}
      onClick={() => isClicked(id)}
      className="bg-transparent hover:bg-gray-200 duration-300 w-1/2 flex flex-col items-center px-3.5 relative"
    >
      <span className="text-base duration-300 font-semibold text-gray-600 relative h-12 flex flex-col items-center pt-3">
        {title}
        <div className="duration-300 bottom-line w-0 h-1 bg-primary-base rounded-full bottom-0 absolute"></div>
      </span>
    </button>
  );
};

export default PostTab;

let postTabElementSpan = document.querySelector("empty");
let postTabElementSpanDiv = document.querySelector("empty");
let oldElement = document.querySelector("#root");
function isClicked(id: string) {
  postTabElementSpan?.classList.add("font-semibold", "text-gray-600");
  postTabElementSpan?.classList.remove("font-bold", "text-gray-700");

  postTabElementSpanDiv?.classList.add("w-0");
  postTabElementSpanDiv?.classList.remove("w-full");

  postTabElementSpan = document.querySelector(`#${id} span`);
  postTabElementSpan?.classList.remove("font-semibold", "text-gray-600");
  postTabElementSpan?.classList.add("font-bold", "text-gray-700");

  postTabElementSpanDiv = document.querySelector(`#${id} span div`);
  postTabElementSpanDiv?.classList.remove("w-0");
  postTabElementSpanDiv?.classList.add("w-full");

  oldElement = document.querySelector(`#${id}`);
}
