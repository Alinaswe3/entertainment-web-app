import Context from "@/context/Context";
import { useCallback, useState } from "react";
import { CATEGORY_HOME } from "@/utilities/constants";

/**
 * A component that provides the context to child components
 * @param children - child components to use context
 * @component
 */
const ContextProvider = ({ children }) => {
  // State managed in context

  // current tab user is on
  const [currentTab, setCurrentTab] = useState(CATEGORY_HOME);

  // current search query
  const [currentSearch, setCurrentSearch] = useState("");

  // A map of all bookmarked content
  const [bookmarked, setBookmarked] = useState(new Map());

  /**
   * Updates the current tab user is on
   * @param newTab - the new tab user has opened
   * useCallback in order to prevent a new update function to be always
   * created
   */
  const updateTab = useCallback((newTab) => {
    setCurrentTab(newTab);
  }, []);

  /**
   * Update the current search query the user has entered
   * @param newSearch - the new search query entered by user
   * useCallback in order to prevent a new update function to be always
   * created
   */
  const updateSearch = useCallback((newSearch) => {
    setCurrentSearch(newSearch);
  }, []);

  /**
   * Updates the map of the bookmarked shows
   * useCallback in order to prevent a new update function to be always
   * created
   */
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
