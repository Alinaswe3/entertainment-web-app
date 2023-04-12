import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import TrendingMovies from "@/components/movies/TrendingMovies";

const trendingMovies = [
  {
    title: "Beyond Earth",
    thumbnail: "/thumbnails/beyond-earth/trending/large.jpg",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Bottom Gear",
    thumbnail: "/thumbnails/bottom-gear/trending/large.jpg",
    year: 2021,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Undiscovered Cities",
    thumbnail: "/thumbnails/undiscovered-cities/trending/large.jpg",
    year: 2019,
    category: "TV Series",
    rating: "E",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "1998",
    thumbnail: "/thumbnails/1998/trending/large.jpg",
    year: 2021,
    category: "Movie",
    rating: "18+",
    isBookmarked: false,
    isTrending: true,
  },
  {
    title: "Dark Side of the Moon",
    thumbnail: "/thumbnails/dark-side-of-the-moon/trending/large.jpg",
    year: 2018,
    category: "TV Series",
    rating: "PG",
    isBookmarked: true,
    isTrending: true,
  },
];

const Home = () => {
  return (
    <main className="home">
      <NavBar />
      <div className="home__main">
        <SearchBar />
        <div className="movies">
          <TrendingMovies movies={trendingMovies} />
          <div className="movies__container">
            <div className="movies__list"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
