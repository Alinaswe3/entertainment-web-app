import Context from "@/context/Context";
import { useCallback, useState } from "react";
import { CATEGORY_HOME } from "@/utilities/constants";

const ContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(CATEGORY_HOME);
  const [currentSearch, setCurrentSearch] = useState("");
  const [bookmarked, setBookmarked] = useState(new Map());

  const updateTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const updateSearch = (newSearch) => {
    setCurrentSearch(newSearch);
  };

  const updateBookmarked = useCallback((contentId, contentTitle) => {
    if (!bookmarked.has(contentId)) {
      setBookmarked((prevState) => prevState.set(contentId, contentTitle));
    } else {
      setBookmarked((prevState) => {
        prevState.delete(contentId);
        return prevState;
      });
    }
  }, []);

  return (
    <Context.Provider
      value={{
        currentTab,
        currentSearch,
        bookmarked,
        updateSearch,
        updateTab,
        updateBookmarked,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
