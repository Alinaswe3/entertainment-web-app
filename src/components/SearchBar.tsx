import { IconSearch } from "@/components/Icons";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <button className="searchbar__button">
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
        />
      </div>
    </div>
  );
};

export default SearchBar;
