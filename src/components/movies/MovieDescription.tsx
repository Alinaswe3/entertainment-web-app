import { IconCategoryMovie, IconCategoryTv } from "@/components/Icons";

/**
 * A component that renders the description of a movie card
 * @param title - title of the show
 * @param year - year the show was released
 * @param category - category to which show belongs i.e. movie or tv series
 * @param rating - rating of the show
 * @param isTrending - true if movie is trending
 * @component
 */
const MovieDescription = ({ title, year, category, rating, isTrending }) => {
  return (
    <div className={`${isTrending ? "trend-movies" : "movie-card"}__details`}>
      <div className="movie-card__description">
        <span className="body-text body-text--medium">{year}</span>
        <span className="dot"></span>
        <span className="body-text body-text--medium movie-card__item-category">
          {/*Choosing icon to render base on the category*/}
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
