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
    </>
  );
};

export default TrendingMovies;
