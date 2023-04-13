import TrendCard from "@/components/movies/TrendCard";

const TrendingMovies = ({ movies }) => {
  return (
    <>
      <h2 className="heading--large mb-smd">Trending</h2>
      <div className="movies__trending">
        <div className="trend-movies">
          {movies.map((movie) => {
            return (
              <TrendCard
                key={movie.title + movie.year + movie.rating}
                title={movie.title}
                thumbnail={movie.thumbnail}
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
