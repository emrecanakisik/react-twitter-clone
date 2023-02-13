import React, { useEffect, useState, FC } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db, hashtagsRef } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

type TrendTags = {
  topic: string;
  numOfHashtags: number | string;
  trending_in: string;
};

const TrendTags: FC<TrendTags> = ({ topic, numOfHashtags, trending_in }) => {
  return (
    <a
      href=""
      className="relative flex flex-col px-3.5 py-2 hover:bg-gray-extralight duration-200"
    >
      <span className="text-sm font-medium text-gray-500 tracking-tight leading-5">
        Trending in {trending_in}
      </span>
      <h1 className="font-bold leading-4">{topic}</h1>
      <span className="text-sm font-medium text-gray-500 tracking-tight leading-5">
        {numOfHashtags} Tweets
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
