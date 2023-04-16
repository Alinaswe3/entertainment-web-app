import { useContext } from "react";
import MovieDescription from "@/components/movies/MovieDescription";
import MovieHero from "@/components/movies/MovieHero";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";

const MovieCard = ({
  id,
  title,
  thumbnail,
  year,
  category,
  rating,
  isTrending,
}) => {
  const { currentTab } = useContext(Context);

  // Make sure trending content is only shown on the home tab
  const isContentTrending = currentTab === CATEGORY_HOME && isTrending;

  let movieHero = (
    <div className="movie-card__hero">
      <MovieHero
        id={id}
        title={title}
        thumbnail={thumbnail}
        isTrending={isContentTrending}
      />
    </div>
  );

  if (isContentTrending) {
    movieHero = (
      <MovieHero
        id={id}
        title={title}
        thumbnail={thumbnail}
        isTrending={isContentTrending}
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
