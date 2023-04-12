import Image from "next/image";
import {
  IconBookmarkEmpty,
  IconBookmarkFull,
  IconCategoryMovie,
  IconCategoryTv,
  IconPlay,
} from "@/components/Icons";
import { useState } from "react";

const TrendMovie = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
}) => {
  const [bookmarkState, setBookmarkState] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmarkState((prevState) => !prevState);
  };

  return (
    <div className="trend-movies__item">
      <div className="trend-movies__item-modal">
        <div className="modal-background"></div>
        <div className="trend-movies__item-play">
          <IconPlay />
          <span className="heading--extra-small">Play</span>
          <div className="play-background"></div>
        </div>
      </div>
      <Image
        className="trend-movies__item-thumbnail"
        src={thumbnail}
        alt={title}
        width={200}
        height={60}
      />
      <button className="trend-movies__item-bookmark" onClick={toggleBookmark}>
        {bookmarkState ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
      </button>
      <div className="trend-movies__details">
        <div className="trend-movies__description">
          <span className="body-text body-text--medium trend-movies__item-year">
            {year}
          </span>
          <span className="dot"></span>
          <span className="body-text body-text--medium trend-movies__item-category">
            {category.toLowerCase() === "movie" ? (
              <IconCategoryMovie />
            ) : (
              <IconCategoryTv />
            )}
            {category}
          </span>
          <span className="dot"></span>
          <span className="body-text body-text--medium trend-movies__item-rating">
            {rating}
          </span>
        </div>
        <h3 className="heading--small">{title}</h3>
      </div>
    </div>
  );
};

const TrendingMovies = ({ movies }) => {
  return (
    <div className="movies__trending">
      {/*<h2 className="heading--large">Trending</h2>*/}
      <div className="trend-movies">
        {movies.map((movie) => {
          return (
            <TrendMovie
              title={movie.title}
              thumbnail={movie.thumbnail}
              year={movie.year}
              rating={movie.rating}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingMovies;
