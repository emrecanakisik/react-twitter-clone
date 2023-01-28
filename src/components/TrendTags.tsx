import React from "react";
import { FC } from "react";

type TrendTags = {
  trendTopic?: string;
  tag?: string;
  numOfTweets?: number;
};

const TrendTags: FC<TrendTags> = ({ trendTopic, tag, numOfTweets }) => {
  return (
    <a
      href=""
      className="relative flex flex-col px-3.5 py-2 hover:bg-gray-extralight duration-200"
    >
      <span className="text-sm font-medium text-gray-500 tracking-tight leading-5">
        {trendTopic}
      </span>
      <h1 className="font-bold leading-4">{tag}</h1>
      <span className="text-sm font-medium text-gray-500 tracking-tight leading-5">
        {numOfTweets} Tweets
      </span>

      <button>
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="fill-gray-dark absolute right-2 top-2 p-1.5 rounded-full hover:fill-primary-base hover:bg-primary-light duration-150"
        >
          <g>
            <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
          </g>
        </svg>
      </button>
    </a>
  );
};

export default TrendTags;
