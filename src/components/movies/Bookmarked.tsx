import MovieGrid from "@/components/movies/MovieGrid";
import {
  BOOKMARKED_MOVIE_HEADING,
  BOOKMARKED_TV_SERIES_HEADING,
  CATEGORY_MOVIES,
  CATEGORY_TV_SERIES,
} from "@/utilities/constants";

const Bookmarked = ({ content }) => {
  const series = content.filter(
    (movie) => movie.category === CATEGORY_TV_SERIES
  );
  const movies = content.filter((movie) => movie.category === CATEGORY_MOVIES);
  // Only render when content is available
  return (
    <>
      {movies.length > 0 ? (
        <MovieGrid heading={BOOKMARKED_MOVIE_HEADING} movies={movies} />
      ) : (
        <></>
      )}
      <div className="movies__separator"></div>
      {series.length > 0 ? (
        <MovieGrid heading={BOOKMARKED_TV_SERIES_HEADING} movies={series} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Bookmarked;
