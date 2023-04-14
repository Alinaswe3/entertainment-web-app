import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Movies from "@/components/movies/Movies";
import ContextProvider from "@/context/ContextProvider";

const Home = () => {
  return (
    <ContextProvider>
      <main className="home">
        <NavBar />
        <div className="home__main">
          <SearchBar />
          <Movies />
        </div>
      </main>
    </ContextProvider>
  );
};

export default Home;
