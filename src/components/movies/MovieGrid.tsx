import MovieCard from "@/components/movies/MovieCard";
import { useContext } from "react";
import Context from "@/context/Context";
import { CATEGORY_HOME } from "@/utilities/constants";

const MovieGrid = ({ heading, movies }) => {
  const { currentTab } = useContext(Context);

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
              thumbnail={movie.thumbnail.regular.large}
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
