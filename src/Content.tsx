import React from "react";
import { FC } from "react";

type PostTabTitle = {
  title: string;
};

const PostTab: FC<PostTabTitle> = ({ title }) => {
  return (
    <button className="group border border-amber-700 w-1/2 flex flex-col items-center px-3.5 relative">
      <span className="text-base group-focus:font-bold group-focus:text-gray-700 duration-300 font-semibold text-gray-500 relative h-12 flex flex-col items-center pt-3">
        {title}
        <div className="group-focus:w-full duration-300 bottom-line w-0 h-1 bg-primary-base rounded-full bottom-0 absolute"></div>
      </span>
    </button>
  );
};

const Content = () => {
  return (
    <div className="border-solid border flex-1 border-indigo-600">
      <h1 className="text-xl font-bold border p-4">Home</h1>
      <div className="post-tabs flex border border-emerald-700">
        <PostTab title="For you" />
        <PostTab title="Following" />
      </div>
    </div>
  );
};

export default Content;
