import Image from "next/image";
import { IconCategoryMovie, IconCategoryTv } from "@/components/Icons";

const TrendMovie = ({ title, thumbnail, year, category, rating }) => {
  return (
    <div className="trend-movies__item">
      <Image
        className="trend-movies__item-thumbnail"
        src={thumbnail}
        alt={title}
        width={200}
        height={60}
      />
      <div className="trend-movies__details">
        <div className="trend-movies__description">
          <span className="body-text body-text--medium trend-movies__item-year">
            {year}
          </span>
          <span className="dot"></span>
          <span className="body-text body-text--medium trend-movies__item-category">
            {category.toLowerCase() === "movie" ? (
              <IconCategoryMovie />
            ) : (
              <IconCategoryTv />
            )}
            {category}
          </span>
          <span className="dot"></span>
          <span className="body-text body-text--medium trend-movies__item-rating">
            {rating}
          </span>
        </div>
        <h3 className="heading--small">{title}</h3>
      </div>
    </div>
  );
};

const TrendingMovies = ({ movies }) => {
  return (
    <div className="movies__trending">
      {/*<h2 className="heading--large">Trending</h2>*/}
      <div className="trend-movies">
        {movies.map((movie) => {
          return (
            <TrendMovie
              title={movie.title}
              thumbnail={movie.thumbnail}
              year={movie.year}
              rating={movie.rating}
              category={movie.category}
              isBookmarked={movie.isBookmarked}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingMovies;
