import { IconSearch } from "@/components/Icons";
import { useContext, useRef } from "react";
import Context from "@/context/Context";
import {
  CATEGORY_BOOKMARKS,
  CATEGORY_MOVIES,
  CATEGORY_TV_SERIES,
  SEARCH_BOOKMARKS,
  SEARCH_MOVIES,
  SEARCH_MOVIES_OR_TV,
  SEARCH_TV,
} from "@/utilities/constants";

/**
 * A component that renders the search bar component
 * @constructor
 */
const SearchBar = () => {
  const { updateSearch, currentTab } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null!);

  // Choosing the placeholder text to be place on input based
  // on the current tab open
  let placeholderText = SEARCH_MOVIES_OR_TV;
  if (currentTab === CATEGORY_MOVIES) placeholderText = SEARCH_MOVIES;
  if (currentTab === CATEGORY_TV_SERIES) placeholderText = SEARCH_TV;
  if (currentTab === CATEGORY_BOOKMARKS) placeholderText = SEARCH_BOOKMARKS;

  /**
   * Sets the search query on the context based on the user search
   */
  const handleSearch = () => {
    updateSearch(inputRef.current.value);
  };

  return (
    <div className="searchbar">
      <button className="searchbar__button" onClick={handleSearch}>
        <IconSearch cssClass="searchbar__icon" />
      </button>
      <div className="searchbar__input">
        <label htmlFor="search" hidden>
          Search:
        </label>
        <input
          id="search"
          className="heading--medium"
          type="text"
          placeholder={placeholderText}
          autoComplete="off"
          ref={inputRef}
          onInput={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
