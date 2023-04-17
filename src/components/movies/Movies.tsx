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
import { contentType } from "@/utilities/types";

/**
 * A component that renders the shows
 * @param content - the show objects to be rendered
 * @component
 */
const Movies = ({ content }: { content: any }) => {
  const { currentSearch, currentTab, bookmarked }: any = useContext(Context);

  const curSearch = currentSearch.trim().toLowerCase();

  let renderedMovies = content;
  let renderedHeading = DEFAULT_HEADING;

  // Set the rendered content for a selected tab

  // checks if on movies tab and filters the content
  // for movies only
  if (currentTab === CATEGORY_MOVIES) {
    renderedMovies = renderedMovies.filter(
      (movie: contentType) => movie.category === CATEGORY_MOVIES
    );
    renderedHeading = MOVIE_HEADING;
  }

  // checks if on tv series tab and filters the content
  // for tv series only
  if (currentTab === CATEGORY_TV_SERIES) {
    renderedMovies = renderedMovies.filter(
      (movie: contentType) => movie.category === CATEGORY_TV_SERIES
    );
    renderedHeading = CATEGORY_TV_SERIES;
  }

  // checks if on bookmarks tab and filters the content for
  // bookmarked content only
  if (currentTab === CATEGORY_BOOKMARKS) {
    renderedMovies = renderedMovies.filter((movie: contentType) =>
      bookmarked.has(movie.id)
    );
  }

  // Searches for movie in list and filters the content based on
  // content matching the search criteria
  if (curSearch !== "") {
    renderedMovies = renderedMovies.filter((movie: contentType) =>
      movie.title.toLowerCase().includes(curSearch)
    );
    // custom heading based on search query
    renderedHeading = `Found ${renderedMovies.length} results for '${curSearch}'`;
  }

  /*Renders the bookmarked tab or the current tab based on the current search criteria*/
  /*Renders the home page without any search query*/

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
