import React, { useEffect } from "react";
import PostTab from "./components/PostTab";
import { db } from "./firebase";
import SendPost from "./SendPost";

const Content = () => {
  return (
    <div className="border-solid border flex-1 border-indigo-600">
      <div className="header bg-white-transparent5 backdrop-blur-sm sticky top-0">
        <h1 className="text-xl font-bold p-4 bg-transparent">Home</h1>
        <div className="post-tabs flex bg-transparent">
          <PostTab title="For you" id="postTab1" />
          <PostTab title="Following" id="postTab2" />
        </div>
      </div>
      <SendPost />
    </div>
  );
};

export default Content;
