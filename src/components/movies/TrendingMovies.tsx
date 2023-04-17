import MovieCard from "@/components/movies/MovieCard";
import { setTrendingThumbnailSize } from "@/utilities/helpers";
import useWindowDimensions from "@/utilities/hooks";
import { contentType } from "@/utilities/types";

const TrendingMovies = ({ movies }: { movies: Array<contentType> }) => {
  // Filtering movies for trending movies only
  const trendingMovies = movies.filter((movie) => movie.isTrending);

  // getting browser window dimensions
  const { width }: any = useWindowDimensions();

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
                thumbnail={setTrendingThumbnailSize(movie, width)}
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
