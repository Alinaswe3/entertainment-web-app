import { IconCategoryMovie, IconCategoryTv } from "@/components/Icons";

const MovieDescription = ({ title, year, category, rating, isTrending }) => {
  return (
    <div className={`${isTrending ? "trend-movies" : "movie-card"}__details`}>
      <div className="movie-card__description">
        <span className="body-text body-text--medium">{year}</span>
        <span className="dot"></span>
        <span className="body-text body-text--medium movie-card__item-category">
          {category.toLowerCase() === "movie" ? (
            <IconCategoryMovie />
          ) : (
            <IconCategoryTv />
          )}
          {category}
        </span>
        <span className="dot"></span>
        <span className="body-text body-text--medium">{rating}</span>
      </div>
      <h3 className="heading--small">{title}</h3>
    </div>
  );
};

export default MovieDescription;
