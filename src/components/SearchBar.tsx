import React from "react";

const SearchBar = () => {
  return (
    <div className="pb-3 pt-1.5 sticky top-0 bg-white-mat z-10">
      <div
        className="group search-bar group border p-1 flex items-center rounded-full bg-gray-200 text-gray-dark focus-within:bg-transparent focus-within:border-primary-base focus-within:text-primary-base"
        tabIndex={1}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          className="my-2 mx-3 fill-current"
        >
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
        <input
          type="text"
          className="search-input flex-1 bg-transparent text-gray-700 outline-none placeholder-gray-dark"
          placeholder="Search Twitter"
        />
      </div>
    </div>
  );
};

export default SearchBar;
