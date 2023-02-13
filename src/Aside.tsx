import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import TrendTags from "./components/TrendTags";
import FooterItem from "./components/FooterItem";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { hashtagsRef } from "./firebase";

const Aside = () => {
  const [data] = useCollectionData(hashtagsRef);
  const NumOfHastagsValue = (numOfHashtags: number) => {
    const strngHashtagsValue = numOfHashtags.toString();
    if (numOfHashtags >= 1000000) {
      return `${strngHashtagsValue.at(0)}.${strngHashtagsValue.at(1)}M`;
    } else if (numOfHashtags >= 100000) {
      return `${strngHashtagsValue.slice(0, 3)}K`;
    } else if (numOfHashtags >= 10000) {
      return `${strngHashtagsValue.slice(0, 2)}K`;
    } else if (numOfHashtags >= 1000) {
      return `${strngHashtagsValue.slice(0, 1)}.${strngHashtagsValue.slice(
        1,
        4
      )}K`;
    } else {
      return numOfHashtags;
    }
  };
  useEffect(() => {
    console.log(NumOfHastagsValue(576));
  });

  return (
    <aside className="w-96 pb-1.5 px-4">
      <SearchBar />
      <div className="sticky -top-36">
        <div className="timeline mb-4 bg-gray-lightest rounded-2xl overflow-hidden">
          <h1 className="timeline-title m-3.5 text-xl font-bold">
            Trends for you
          </h1>
          {data
            ?.sort((a, b) => {
              return b.numOfHashtags - a.numOfHashtags;
            })
            .map((tagitem) => (
              <TrendTags
                trending_in={tagitem.trending_in}
                topic={tagitem.topic}
                numOfHashtags={NumOfHastagsValue(tagitem.numOfHashtags)}
              />
            ))}
          <a
            href="i/trends"
            className="block text-primary-base p-3.5 hover:bg-gray-extralight duration-200"
          >
            Show more
          </a>
        </div>
        <div className="footer flex flex-wrap px-2">
          <FooterItem
            title="Terms of Service"
            className="text-sm text-gray-dark hover:underline mr-3"
            itemType="a"
          />
          <FooterItem
            title="Privacy Policy"
            className="text-sm text-gray-dark hover:underline mr-3"
            itemType="a"
          />
          <FooterItem
            title="Cookie Policy"
            className="text-sm text-gray-dark hover:underline mr-3"
            itemType="a"
          />
          <FooterItem
            title="Accessibility"
            className="text-sm text-gray-dark hover:underline mr-3"
            itemType="a"
          />
          <FooterItem
            title="Ads info"
            className="text-sm text-gray-dark hover:underline mr-3"
            itemType="a"
          />
          <FooterItem
            title="More"
            className="text-sm text-gray-dark hover:underline mr-20"
            itemType="button"
          />
          <FooterItem
            title="© 2023 Twitter, Inc."
            className="text-sm text-gray-dark"
            itemType="h1"
          />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
