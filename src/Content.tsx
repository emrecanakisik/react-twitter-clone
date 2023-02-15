import React, { useEffect } from "react";
import PostTab from "./components/PostTab";
import SendPost from "./components/SendPost";
import Post from "./components/Post";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { tweetsRef } from "./firebase";

const Content = () => {
  const [data] = useCollectionData(tweetsRef);

  const postDate = (currentTime: number) => {
    const resultTime = (new Date().getTime() - currentTime) / 1000 / 60 / 60;
    if (resultTime < 1) {
      return Math.floor(resultTime * 60) + "m";
    } else if (resultTime > 23) {
      return Math.floor(resultTime / 24) + "d";
    } else {
      return Math.floor(resultTime) + "h";
    }
  };

  return (
    <div className="border border-x flex-1">
      <div className="header bg-white-transparent5 backdrop-blur-sm sticky top-0">
        <h1 className="text-xl font-bold p-4 bg-transparent">Home</h1>
        <div className="post-tabs flex bg-transparent">
          <PostTab title="For you" id="postTab1" />
          <PostTab title="Following" id="postTab2" />
        </div>
      </div>
      <SendPost />
      {data
        ?.sort((a, b) => {
          return b.id - a.id;
        })
        .map((tweet) => (
          <Post
            key={`tweetNo-${tweet.id}`}
            displayName={tweet.displayName}
            username={tweet.username}
            timestamp={postDate(tweet.time?.toDate().getTime())} //postDate(tweet.time.toDate().getTime())
            textContent={tweet.textContent}
          />
        ))}
    </div>
  );
};

export default Content;
