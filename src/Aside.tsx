import React from "react";
import SearchBar from "./components/SearchBar";
import TrendTags from "./components/TrendTags";
import FooterItem from "./components/FooterItem";

const array = [
  { title: "jaiodjaio" },
  { title: "jaiodjaio" },
  { title: "jaiodjaio" },
  { title: "jaiodjaio" },
  { title: "jaiodjaio" },
  { title: "jaiodjaio" },
];

const Aside = () => {
  return (
    <div className="w-96 pb-1.5 px-4">
      <SearchBar />
      <div className="timeline my-4 bg-gray-lightest rounded-2xl overflow-hidden">
        <h1 className="timeline-title m-3.5 text-xl font-bold">
          Trends for you
        </h1>
        {array.map((title) => (
          <TrendTags
            trendTopic="Trending in Turkey"
            tag={title.title}
            numOfTweets={1151}
          />
        ))}
        <TrendTags
          trendTopic="Trending in Turkey"
          tag="SON DAKIKA"
          numOfTweets={1151}
        />
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
  );
};

export default Aside;
