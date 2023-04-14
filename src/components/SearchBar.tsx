import { IconSearch } from "@/components/Icons";
import { useContext, useRef } from "react";
import Context from "@/context/Context";

const SearchBar = () => {
  const { updateSearch } = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null!);

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
          placeholder="Search for movies or TV series"
          autoComplete="off"
          ref={inputRef}
          onInput={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
