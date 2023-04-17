import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  Logo,
} from "@/components/Icons";
import Image from "next/image";
import { useContext } from "react";
import Context from "@/context/Context";
import {
  CATEGORY_BOOKMARKS,
  CATEGORY_HOME,
  CATEGORY_MOVIES,
  CATEGORY_TV_SERIES,
} from "@/utilities/constants";

/**
 * A component that renders the nav bar
 * @component
 */
const NavBar = () => {
  const { updateTab, currentTab } = useContext(Context);

  return (
    <nav className="navbar">
      <Logo cssClass="navbar__logo" />
      <ul className="navbar__list">
        {/*sets the current tab open and gives the icon the active css class*/}
        <li onClick={() => updateTab(CATEGORY_HOME)}>
          <IconNavHome
            cssClass={`${currentTab === CATEGORY_HOME ? "navbar__active" : ""}`}
          />
        </li>
        <li onClick={() => updateTab(CATEGORY_MOVIES)}>
          <IconNavMovies
            cssClass={`${
              currentTab === CATEGORY_MOVIES ? "navbar__active" : ""
            }`}
          />
        </li>
        <li onClick={() => updateTab(CATEGORY_TV_SERIES)}>
          <IconNavTvSeries
            cssClass={`${
              currentTab === CATEGORY_TV_SERIES ? "navbar__active" : ""
            }`}
          />
        </li>
        <li onClick={() => updateTab(CATEGORY_BOOKMARKS)}>
          <IconNavBookmark
            cssClass={`${
              currentTab === CATEGORY_BOOKMARKS ? "navbar__active" : ""
            }`}
          />
        </li>
      </ul>
      <Image
        src="/image-avatar.png"
        alt="User profile picture"
        width={40}
        height={40}
        className="navbar__avatar"
      />
    </nav>
  );
};

export default NavBar;
