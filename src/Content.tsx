import React, { useEffect } from "react";
import PostTab from "./components/PostTab";
import SendPost from "./components/SendPost";
import Post from "./components/Post";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { tweetsRef, db } from "./firebase";

const Content = () => {
  const [data] = useCollectionData(tweetsRef);
  useEffect(() => {
    setTimeout(() => console.log(data), 1000);
  });
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
      <Post
        displayName="emrecan"
        username="emr2004"
        timestamp={15}
        textContent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dolor quasi commodi sequi nemo non iure dolore voluptas eos ut."
      />
      <h1>{}</h1>
      {data?.map((tweet) => (
        <Post
          displayName={tweet.displayName}
          username={tweet.username}
          timestamp={15}
          textContent={tweet.textContent}
        />
      ))}
    </div>
  );
};

export default Content;
