import Image from "next/image";
import {
  IconBookmarkEmpty,
  IconBookmarkFull,
  IconPlay,
} from "@/components/Icons";
import { useContext, useState } from "react";
import Context from "@/context/Context";

const MovieHero = ({ id, title, thumbnail, isTrending }) => {
  const { bookmarked, updateBookmarked } = useContext(Context);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked.has(id));

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
    updateBookmarked(id, title);
  };

  return (
    <>
      <div className="movie-card__item-modal">
        <div className="modal-background"></div>
        <div className="movie-card__item-play">
          <IconPlay />
          <span className="heading--extra-small">Play</span>
          <div className="play-background"></div>
        </div>
      </div>
      <Image
        className="movie-card__item-thumbnail"
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
      />
      <button
        className={`movie-card__item-bookmark ${
          isTrending ? "" : "bookmark-adjust"
        }`}
        onClick={toggleBookmark}
      >
        {isBookmarked ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
    </>
  );
};

export default MovieHero;
