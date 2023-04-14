import MovieCard from "@/components/movies/MovieCard";

const TrendingMovies = ({ movies }) => {
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  return (
    <>
      <h2 className="heading--large mb-smd">Trending</h2>
      <div className="movies__trending">
        <div className="trend-movies">
          {trendingMovies.map((movie) => {
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
