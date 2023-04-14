import MovieCard from "@/components/movies/MovieCard";

const TrendingMovies = ({ movies }) => {
  return (
    <>
      <h2 className="heading--large mb-smd">Trending</h2>
      <div className="movies__trending">
        <div className="trend-movies">
          {movies
            .filter((movie) => movie.isTrending)
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
    </>
  );
};

export default TrendingMovies;
