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
  const seriesLength = series.length;
  const movies = content.filter((movie) => movie.category === CATEGORY_MOVIES);
  const moviesLength = movies.length;

  // Only render when content is available
  return (
    <>
      {content.length < 1 ? (
        <h2 className="heading--large">No bookmarks found</h2>
      ) : (
        <></>
      )}
      {moviesLength > 0 ? (
        <MovieGrid heading={BOOKMARKED_MOVIE_HEADING} movies={movies} />
      ) : (
        <></>
      )}
      {moviesLength > 0 && seriesLength > 0 ? (
        <div className="movies__separator"></div>
      ) : (
        <></>
      )}
      {seriesLength > 0 ? (
        <MovieGrid heading={BOOKMARKED_TV_SERIES_HEADING} movies={series} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Bookmarked;
