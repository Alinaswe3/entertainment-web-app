import MovieCard from "@/components/movies/MovieCard";
import { useContext } from "react";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";
import useWindowDimensions from "@/utilities/hooks";
import { setMovieThumbnailSize } from "@/utilities/helpers";

/**
 * A component that renders movies in a particular grid
 * @param heading - the heading of the movie grid
 * @param movies - an array of movie objects to be rendered
 * @component
 */
const MovieGrid = ({ heading, movies }) => {
  const { currentTab } = useContext(Context);

  // Getting the dimensions of the browser window
  const { width } = useWindowDimensions();
  let filteredMovies;

  // Let trending content to be rendered only when on home tab
  if (currentTab === CATEGORY_HOME)
    filteredMovies = movies.filter((movie) => !movie.isTrending);
  else filteredMovies = movies;

  return (
    <div className="movie-grid">
      <h2 className="heading--large mb-smd">{heading}</h2>
      <div className="movie-grid__list">
        {filteredMovies.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              thumbnail={setMovieThumbnailSize(movie, width)}
              year={movie.year}
              rating={movie.rating}
              category={movie.category}
              isTrending={movie.isTrending}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieGrid;
