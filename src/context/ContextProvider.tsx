import Context from "@/context/Context";
import { useState } from "react";
import { CATEGORY_HOME } from "@/utilities/constants";

const ContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(CATEGORY_HOME);
  const [currentSearch, setCurrentSearch] = useState("");

  const updateTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const updateSearch = (newSearch) => {
    setCurrentSearch(newSearch);
  };

  return (
    <Context.Provider
      value={{ currentTab, currentSearch, updateSearch, updateTab }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
