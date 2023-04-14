import { useContext, useState } from "react";
import MovieDescription from "@/components/movies/MovieDescription";
import MovieHero from "@/components/movies/MovieHero";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";

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
  const { currentTab } = useContext(Context);

  // Make sure trending content is only shown on the home page
  const isContentTrending = currentTab === CATEGORY_HOME && isTrending;

  const toggleBookmark = () => {
    setBookmarkState((prevState) => !prevState);
  };

  let movieHero = (
    <div className="movie-card__hero">
      <MovieHero
        title={title}
        thumbnail={thumbnail}
        isTrending={isContentTrending}
        isBookmarked={bookmarkState}
        setBookmark={toggleBookmark}
      />
    </div>
  );

  if (isContentTrending) {
    movieHero = (
      <MovieHero
        title={title}
        thumbnail={thumbnail}
        isTrending={isContentTrending}
        isBookmarked={bookmarkState}
        setBookmark={toggleBookmark}
      />
    );
  }

  return (
    <div
      className={`${
        isContentTrending ? "trend-movies__item" : ""
      } movie-card__item`}
    >
      {movieHero}
      <MovieDescription
        title={title}
        year={year}
        category={category}
        rating={rating}
        isTrending={isContentTrending}
      />
    </div>
  );
};

export default MovieCard;
