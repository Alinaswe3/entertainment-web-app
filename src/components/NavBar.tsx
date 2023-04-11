import {
  IconNavBookmark,
  IconNavHome,
  IconNavMovies,
  IconNavTvSeries,
  Logo,
} from "@/components/Icons";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__top">
        <Logo cssClass="navbar__logo" />
        <ul className="navbar__list">
          <li>
            <IconNavHome cssClass="navbar__icon" />
          </li>
          <li>
            <IconNavMovies cssClass="navbar__icon" />
          </li>
          <li>
            <IconNavTvSeries cssClass="navbar__icon" />
          </li>
          <li>
            <IconNavBookmark cssClass="navbar__icon" />
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
