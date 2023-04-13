import MovieHero from "@/components/movies/MovieHero";
import MovieDescription from "@/components/movies/MovieDescription";
import {useState} from "react";

const TrendCard = ({
                     title,
                     thumbnail,
                     year,
                     category,
                     rating,
                     isBookmarked,
                     isTrending,
                   }) => {
  const [bookmarkState, setBookmarkState] = useState(isBookmarked);

  if (isTrending) console.log("I am trending")

  const toggleBookmark = () => {
    setBookmarkState((prevState) => !prevState);
  };
  return (
      <div
          className={`${isTrending ? "trend-movies__item" : ""} movie-card__item`}
      >
        <MovieHero
            title={title}
            thumbnail={thumbnail}
            isTrending={isTrending}
            isBookmarked={bookmarkState}
            setBookmark={toggleBookmark}
        />
        <MovieDescription
            title={title}
            year={year}
            category={category}
            rating={rating}
            isTrending={isTrending}
        />
      </div>
  );
};

export default TrendCard;
