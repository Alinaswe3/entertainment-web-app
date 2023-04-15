import TrendingMovies from "@/components/movies/TrendingMovies";
import MovieGrid from "@/components/movies/MovieGrid";
import { useContext } from "react";
import Context from "@/context/Context";
import {
  CATEGORY_BOOKMARKS,
  CATEGORY_HOME,
  CATEGORY_MOVIES,
  CATEGORY_TV_SERIES,
  DEFAULT_HEADING,
  MOVIE_HEADING,
} from "@/utilities/constants";
import Bookmarked from "@/components/movies/Bookmarked";

const Movies = ({ content }) => {
  const { currentSearch, currentTab, bookmarked } = useContext(Context);

  const curSearch = currentSearch.trim().toLowerCase();

  let renderedMovies = content;
  let renderedHeading = DEFAULT_HEADING;

  // Set the rendered content for a selected tab
  if (currentTab === CATEGORY_MOVIES) {
    renderedMovies = renderedMovies.filter(
      (movie) => movie.category === CATEGORY_MOVIES
    );
    renderedHeading = MOVIE_HEADING;
  }
  if (currentTab === CATEGORY_TV_SERIES) {
    renderedMovies = renderedMovies.filter(
      (movie) => movie.category === CATEGORY_TV_SERIES
    );
    renderedHeading = CATEGORY_TV_SERIES;
  }
  if (currentTab === CATEGORY_BOOKMARKS) {
    renderedMovies = renderedMovies.filter((movie) => bookmarked.has(movie.id));
  }

  // Searches for movie in list
  if (curSearch !== "") {
    renderedMovies = renderedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(curSearch)
    );
    renderedHeading = `Found ${renderedMovies.length} results for '${curSearch}'`;
  }

  return (
    <div className="movies">
      {currentTab === CATEGORY_HOME && curSearch.length === 0 ? (
        <TrendingMovies movies={renderedMovies} />
      ) : (
        <></>
      )}
      {currentTab !== CATEGORY_BOOKMARKS ? (
        <MovieGrid heading={renderedHeading} movies={renderedMovies} />
      ) : (
        <Bookmarked content={renderedMovies} />
      )}
    </div>
  );
};

export default Movies;
