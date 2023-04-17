import { useContext } from "react";
import MovieDescription from "@/components/movies/MovieDescription";
import MovieHero from "@/components/movies/MovieHero";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";
import { contentType } from "@/utilities/types";

/**
 * A component that renders a movie card
 * @param id - unique id for a certain show
 * @param title - title of the show
 * @param thumbnail - path to thumbnail of the show
 * @param year - year the show was released
 * @param category - category to which show belongs i.e. movie or tv series
 * @param rating - rating of the show
 * @param isTrending - true if movie is trending
 * @component
 */
const MovieCard = ({
  id,
  title,
  thumbnail,
  year,
  category,
  rating,
  isTrending,
}: contentType) => {
  const { currentTab }: any = useContext(Context);

  // Make sure trending content is only shown on the home tab
  const isContentTrending = currentTab === CATEGORY_HOME && isTrending;

  let movieHero = (
    // extra div if movie is not trending
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
