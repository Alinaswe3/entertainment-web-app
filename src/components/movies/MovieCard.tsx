import { useState } from "react";
import MovieDescription from "@/components/movies/MovieDescription";
import MovieHero from "@/components/movies/MovieHero";

const MovieCard = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
}) => {
  const [bookmarkState, setBookmarkState] = useState(isBookmarked);

  const toggleBookmark = () => {
    setBookmarkState((prevState) => !prevState);
  };

  let movieHero = (
    <div className="movie-card__hero">
      <MovieHero
        title={title}
        thumbnail={thumbnail}
        isTrending={isTrending}
        isBookmarked={bookmarkState}
        setBookmark={toggleBookmark}
      />
    </div>
  );

  if (isTrending) {
    movieHero = (
      <MovieHero
        title={title}
        thumbnail={thumbnail}
        isTrending={isTrending}
        isBookmarked={bookmarkState}
        setBookmark={toggleBookmark}
      />
    );
  }

  return (
    <div
      className={`${isTrending ? "trend-movies__item" : ""} movie-card__item`}
    >
      {movieHero}
      <MovieDescription
        title={title}
        year={year}
        category={category}
        rating={rating}
        isTrending={isTrending}
      />
    </div>
  );
};

export default MovieCard;
