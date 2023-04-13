import MovieCard from "@/components/movies/MovieCard";

const MovieGrid = ({ heading, movies }) => {
  return (
    <div className="movie-grid">
      <h2 className="heading--large mb-smd">{heading}</h2>
      <div className="movie-grid__list">
        {movies
          .filter((movie) => !movie.isTrending)
          .map((movie) => {
            return (
              <MovieCard
                key={movie.title + movie.year + movie.rating}
                title={movie.title}
                thumbnail={movie.thumbnail.regular.large}
                year={movie.year}
                rating={movie.rating}
                category={movie.category}
                isBookmarked={movie.isBookmarked}
                isTrending={movie.isTrending}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MovieGrid;
