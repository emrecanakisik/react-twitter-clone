import React from "react";
import { FC } from "react";

type PostTabTitle = {
  title: string;
  id: string;
};

const PostTab: FC<PostTabTitle> = ({ title, id }) => {
  return (
    <button
      id={id}
      onClick={(event) => isClicked(event.target, id)}
      className="border hover:bg-gray-100 duration-300 border-amber-700 w-1/2 flex flex-col items-center px-3.5 relative"
    >
      <span className="text-base duration-300 font-semibold text-gray-500 relative h-12 flex flex-col items-center pt-3">
        {title}
        <div className="duration-300 bottom-line w-0 h-1 bg-primary-base rounded-full bottom-0 absolute"></div>
      </span>
    </button>
  );
};

let postTabElementSpan = document.querySelector("empty");
let postTabElementSpanDiv = document.querySelector("empty");
let oldElement = document.querySelector("#root");
function isClicked(element: any, id: string) {
  postTabElementSpan?.classList.add("font-semibold");
  postTabElementSpan?.classList.add("text-gray-500");
  postTabElementSpan?.classList.remove("font-bold");
  postTabElementSpan?.classList.remove("text-gray-700");

  postTabElementSpanDiv?.classList.add("w-0");
  postTabElementSpanDiv?.classList.remove("w-full");

  postTabElementSpan = document.querySelector(`#${id} span`);
  postTabElementSpan?.classList.remove("font-semibold");
  postTabElementSpan?.classList.remove("text-gray-500");
  postTabElementSpan?.classList.add("font-bold");
  postTabElementSpan?.classList.add("text-gray-700");

  postTabElementSpanDiv = document.querySelector(`#${id} span div`);
  postTabElementSpanDiv?.classList.remove("w-0");
  postTabElementSpanDiv?.classList.add("w-full");

  oldElement = document.querySelector(`#${id}`);
}

const Content = () => {
  return (
    <div className="border-solid border flex-1 border-indigo-600">
      <h1 className="text-xl font-bold border p-4">Home</h1>
      <div className="post-tabs flex border border-emerald-700">
        <PostTab title="For you" id="postTab1" />
        <PostTab title="Following" id="postTab2" />
      </div>
    </div>
  );
};

export default Content;
