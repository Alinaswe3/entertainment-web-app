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
import { CATEGORY_HOME } from "@/utilities/constants";

const NavBar = () => {
  const { updateTab, currentTab } = useContext(Context);

  return (
    <nav className="navbar">
      <div className="navbar__top">
        <Logo cssClass="navbar__logo" />
        <ul className="navbar__list">
          <li onClick={() => updateTab(CATEGORY_HOME)}>
            <IconNavHome
              cssClass={`${
                currentTab === CATEGORY_HOME ? "navbar__active" : ""
              }`}
            />
          </li>
          <li onClick={() => updateTab("movies")}>
            <IconNavMovies
              cssClass={`${currentTab === "movies" ? "navbar__active" : ""}`}
            />
          </li>
          <li onClick={() => updateTab("tv-series")}>
            <IconNavTvSeries
              cssClass={`${currentTab === "tv-series" ? "navbar__active" : ""}`}
            />
          </li>
          <li onClick={() => updateTab("bookmarks")}>
            <IconNavBookmark
              cssClass={`${currentTab === "bookmarks" ? "navbar__active" : ""}`}
            />
          </li>
        </ul>
      </div>
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
