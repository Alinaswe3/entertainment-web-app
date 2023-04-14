import MovieGrid from "@/components/movies/MovieGrid";

const Bookmarked = ({ content }) => {
  const series = content.filter((movie) => movie.category === "TV Series");
  const movies = content.filter((movie) => movie.category === "Movie");
  return (
    <>
      <MovieGrid movies={} />
      <MovieGrid movies={} />
    </>
  );
};
