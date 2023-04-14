import TrendingMovies from "@/components/movies/TrendingMovies";
import MovieGrid from "@/components/movies/MovieGrid";
import movies from "@/data/movieData";
import { useContext } from "react";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";

const Movies = () => {
  const { currentSearch, currentTab } = useContext(Context);

  const curSearch = currentSearch.trim().toLowerCase();
  let renderedMovies = movies;

  if (currentTab === "movies") {
    renderedMovies = renderedMovies.filter(
      (movie) => movie.category === "Movie"
    );
  }
  if (currentTab === "tv-series") {
    renderedMovies = renderedMovies.filter(
      (movie) => movie.category === "TV Series"
    );
  }
  if (currentTab === "bookmarks") {
    renderedMovies = renderedMovies.filter((movie) => movie.isBookmarked);
  }

  // Searches for movie in list
  if (curSearch !== "") {
    renderedMovies = renderedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(curSearch)
    );
  }

  return (
    <div className="movies">
      {currentTab === CATEGORY_HOME && curSearch.length === 0 ? (
        <TrendingMovies movies={movies} />
      ) : (
        <></>
      )}
      {/*<MovieGrid*/}
      {/*  heading={*/}
      {/*    curSearch.length !== 0*/}
      {/*      ? `Found ${renderedMovies.length} results for '${curSearch}'`*/}
      {/*      : "Recommended for you"*/}
      {/*  }*/}
      {/*  movies={renderedMovies}*/}
      {/*/>*/}
      <MovieGrid heading={currentTab} movies={renderedMovies} />
    </div>
  );
};

export default Movies;
